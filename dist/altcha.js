var Ho = Object.defineProperty;
var Un = (e) => {
  throw TypeError(e);
};
var Go = (e, t, r) => t in e ? Ho(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ye = (e, t, r) => Go(e, typeof t != "symbol" ? t + "" : t, r), jn = (e, t, r) => t.has(e) || Un("Cannot " + r);
var se = (e, t, r) => (jn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Tr = (e, t, r) => t.has(e) ? Un("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Dr = (e, t, r, i) => (jn(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const ii = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, qn = typeof self < "u" && self.Blob && new Blob([ii], { type: "text/javascript;charset=utf-8" });
function Wo(e) {
  let t;
  try {
    if (t = qn && (self.URL || self.webkitURL).createObjectURL(qn), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(ii),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const Yo = "5";
var ni;
typeof window < "u" && ((ni = window.__svelte ?? (window.__svelte = {})).v ?? (ni.v = /* @__PURE__ */ new Set())).add(Yo);
const Zo = 1, zo = 4, Jo = 8, Ko = 16, Xo = 1, Qo = 2, Hr = "[", oi = "[!", ai = "]", xt = {}, ue = Symbol(), ea = "http://www.w3.org/1999/xhtml", Bn = !1;
function li(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var si = Array.isArray, ta = Array.prototype.indexOf, ra = Array.from, sr = Object.keys, Bt = Object.defineProperty, lt = Object.getOwnPropertyDescriptor, na = Object.getOwnPropertyDescriptors, ia = Object.prototype, oa = Array.prototype, ui = Object.getPrototypeOf, Hn = Object.isExtensible;
const kt = () => {
};
function fi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function aa(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const we = 2, ci = 4, gr = 8, Gr = 16, Fe = 32, ft = 64, ur = 128, he = 256, fr = 512, fe = 1024, De = 2048, ct = 4096, At = 8192, pr = 16384, la = 32768, Wr = 65536, sa = 1 << 19, di = 1 << 20, Or = 1 << 21, jt = Symbol("$state"), hi = Symbol("legacy props"), ua = Symbol("");
function fa(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ca() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function da(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ha() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function va() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ga(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function pa() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ma() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ba() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function mr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let M = !1;
function Ct(e) {
  M = e;
}
let F;
function We(e) {
  if (e === null)
    throw mr(), xt;
  return F = e;
}
function It() {
  return We(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ze(F)
  );
}
function Z(e) {
  if (M) {
    if (/* @__PURE__ */ ze(F) !== null)
      throw mr(), xt;
    F = e;
  }
}
function _a() {
  for (var e = 0, t = F; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === ai) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Hr || r === oi) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ze(t)
    );
    t.remove(), t = i;
  }
}
let ya = !1;
function He(e) {
  if (typeof e != "object" || e === null || jt in e)
    return e;
  const t = ui(e);
  if (t !== ia && t !== oa)
    return e;
  var r = /* @__PURE__ */ new Map(), i = si(e), l = /* @__PURE__ */ P(0), o = $, f = (s) => {
    var c = $;
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
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && pa();
        var b = r.get(c);
        return b === void 0 ? (b = f(() => /* @__PURE__ */ P(d.value)), r.set(c, b)) : _(
          b,
          f(() => He(d.value))
        ), !0;
      },
      deleteProperty(s, c) {
        var d = r.get(c);
        if (d === void 0)
          c in s && (r.set(
            c,
            f(() => /* @__PURE__ */ P(ue))
          ), Nr(l));
        else {
          if (i && typeof c == "string") {
            var b = (
              /** @type {Source<number>} */
              r.get("length")
            ), v = Number(c);
            Number.isInteger(v) && v < b.v && _(b, v);
          }
          _(d, ue), Nr(l);
        }
        return !0;
      },
      get(s, c, d) {
        var y;
        if (c === jt)
          return e;
        var b = r.get(c), v = c in s;
        if (b === void 0 && (!v || (y = lt(s, c)) != null && y.writable) && (b = f(() => /* @__PURE__ */ P(He(v ? s[c] : ue))), r.set(c, b)), b !== void 0) {
          var m = a(b);
          return m === ue ? void 0 : m;
        }
        return Reflect.get(s, c, d);
      },
      getOwnPropertyDescriptor(s, c) {
        var d = Reflect.getOwnPropertyDescriptor(s, c);
        if (d && "value" in d) {
          var b = r.get(c);
          b && (d.value = a(b));
        } else if (d === void 0) {
          var v = r.get(c), m = v == null ? void 0 : v.v;
          if (v !== void 0 && m !== ue)
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
        if (c === jt)
          return !0;
        var d = r.get(c), b = d !== void 0 && d.v !== ue || Reflect.has(s, c);
        if (d !== void 0 || T !== null && (!b || (m = lt(s, c)) != null && m.writable)) {
          d === void 0 && (d = f(() => /* @__PURE__ */ P(b ? He(s[c]) : ue)), r.set(c, d));
          var v = a(d);
          if (v === ue)
            return !1;
        }
        return b;
      },
      set(s, c, d, b) {
        var X;
        var v = r.get(c), m = c in s;
        if (i && c === "length")
          for (var y = d; y < /** @type {Source<number>} */
          v.v; y += 1) {
            var D = r.get(y + "");
            D !== void 0 ? _(D, ue) : y in s && (D = f(() => /* @__PURE__ */ P(ue)), r.set(y + "", D));
          }
        v === void 0 ? (!m || (X = lt(s, c)) != null && X.writable) && (v = f(() => /* @__PURE__ */ P(void 0)), _(
          v,
          f(() => He(d))
        ), r.set(c, v)) : (m = v.v !== ue, _(
          v,
          f(() => He(d))
        ));
        var N = Reflect.getOwnPropertyDescriptor(s, c);
        if (N != null && N.set && N.set.call(b, d), !m) {
          if (i && typeof c == "string") {
            var j = (
              /** @type {Source<number>} */
              r.get("length")
            ), R = Number(c);
            Number.isInteger(R) && R >= j.v && _(j, R + 1);
          }
          Nr(l);
        }
        return !0;
      },
      ownKeys(s) {
        a(l);
        var c = Reflect.ownKeys(s).filter((v) => {
          var m = r.get(v);
          return m === void 0 || m.v !== ue;
        });
        for (var [d, b] of r)
          b.v !== ue && !(d in s) && c.push(d);
        return c;
      },
      setPrototypeOf() {
        ma();
      }
    }
  );
}
function Nr(e, t = 1) {
  _(e, e.v + t);
}
var Gn, vi, gi, pi;
function Fr() {
  if (Gn === void 0) {
    Gn = window, vi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    gi = lt(t, "firstChild").get, pi = lt(t, "nextSibling").get, Hn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Hn(r) && (r.__t = void 0);
  }
}
function br(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return gi.call(e);
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  return pi.call(e);
}
function z(e, t) {
  if (!M)
    return /* @__PURE__ */ me(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ me(F)
  );
  return r === null && (r = F.appendChild(br())), We(r), r;
}
function Mt(e, t) {
  if (!M) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ me(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ze(r) : r;
  }
  return F;
}
function J(e, t = 1, r = !1) {
  let i = M ? F : e;
  for (var l; t--; )
    l = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ ze(i);
  if (!M)
    return i;
  var o = i == null ? void 0 : i.nodeType;
  if (r && o !== 3) {
    var f = br();
    return i === null ? l == null || l.after(f) : i.before(f), We(f), f;
  }
  return We(i), /** @type {TemplateNode} */
  i;
}
function wa(e) {
  e.textContent = "";
}
function mi(e) {
  return e === this.v;
}
function bi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Yr(e) {
  return !bi(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function _r(e) {
  var t = we | De, r = $ !== null && ($.f & we) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return T === null || r !== null && (r.f & he) !== 0 ? t |= he : T.f |= di, {
    ctx: oe,
    deps: null,
    effects: null,
    equals: mi,
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
function Vt(e) {
  const t = /* @__PURE__ */ _r(e);
  return Ti(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ea(e) {
  const t = /* @__PURE__ */ _r(e);
  return t.equals = Yr, t;
}
function _i(e) {
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
function Ca(e) {
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
function yi(e) {
  var t, r = T;
  Ze(Ca(e));
  try {
    _i(e), t = Pi(e);
  } finally {
    Ze(r);
  }
  return t;
}
function wi(e) {
  var t = yi(e), r = (Ge || (e.f & he) !== 0) && e.deps !== null ? ct : fe;
  Ee(e, r), e.equals(t) || (e.v = t, e.wv = Ni());
}
function xa(e) {
  T === null && $ === null && da(), $ !== null && ($.f & he) !== 0 && T === null && ca(), Yt && fa();
}
function ka(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function dt(e, t, r, i = !0) {
  var l = T, o = {
    ctx: oe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | De,
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
      Xr(o), o.f |= la;
    } catch (c) {
      throw Ye(o), c;
    }
  else t !== null && wr(o);
  var f = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (di | ur)) === 0;
  if (!f && i && (l !== null && ka(o, l), $ !== null && ($.f & we) !== 0)) {
    var s = (
      /** @type {Derived} */
      $
    );
    (s.effects ?? (s.effects = [])).push(o);
  }
  return o;
}
function Zr(e) {
  const t = dt(gr, null, !1);
  return Ee(t, fe), t.teardown = e, t;
}
function Mr(e) {
  xa();
  var t = T !== null && (T.f & Fe) !== 0 && oe !== null && !oe.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      oe
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: T,
      reaction: $
    });
  } else {
    var i = zr(e);
    return i;
  }
}
function Aa(e) {
  const t = dt(ft, e, !0);
  return () => {
    Ye(t);
  };
}
function Ia(e) {
  const t = dt(ft, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Ur(t, () => {
      Ye(t), i(void 0);
    }) : (Ye(t), i(void 0));
  });
}
function zr(e) {
  return dt(ci, e, !1);
}
function Jr(e) {
  return dt(gr, e, !0);
}
function Se(e, t = [], r = _r) {
  const i = t.map(r);
  return Ei(() => e(...i.map(a)));
}
function Ei(e, t = 0) {
  return dt(gr | Gr | t, e, !0);
}
function Vr(e, t = !0) {
  return dt(gr | Fe, e, !0, t);
}
function Ci(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Yt, i = $;
    Yn(!0), Ne(null);
    try {
      t.call(null);
    } finally {
      Yn(r), Ne(i);
    }
  }
}
function xi(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & ft) !== 0 ? r.parent = null : Ye(r, t), r = i;
  }
}
function Ra(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Fe) === 0 && Ye(t), t = r;
  }
}
function Ye(e, t = !0) {
  var r = !1;
  (t || (e.f & sa) !== 0) && e.nodes_start !== null && (ki(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), xi(e, t && !r), vr(e, 0), Ee(e, pr);
  var i = e.transitions;
  if (i !== null)
    for (const o of i)
      o.stop();
  Ci(e);
  var l = e.parent;
  l !== null && l.first !== null && Ai(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function ki(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ze(e)
    );
    e.remove(), e = r;
  }
}
function Ai(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Ur(e, t) {
  var r = [];
  Ii(e, r, !0), Sa(r, () => {
    Ye(e), t && t();
  });
}
function Sa(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var l of e)
      l.out(i);
  } else
    t();
}
function Ii(e, t, r) {
  if ((e.f & At) === 0) {
    if (e.f ^= At, e.transitions !== null)
      for (const f of e.transitions)
        (f.is_global || r) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var l = i.next, o = (i.f & Wr) !== 0 || (i.f & Fe) !== 0;
      Ii(i, t, o ? r : !1), i = l;
    }
  }
}
function Wn(e) {
  Ri(e, !0);
}
function Ri(e, t) {
  if ((e.f & At) !== 0) {
    e.f ^= At, (e.f & fe) === 0 && (e.f ^= fe), Zt(e) && (Ee(e, De), wr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, l = (r.f & Wr) !== 0 || (r.f & Fe) !== 0;
      Ri(r, l ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
const $a = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Ht = [], Gt = [];
function Si() {
  var e = Ht;
  Ht = [], fi(e);
}
function $i() {
  var e = Gt;
  Gt = [], fi(e);
}
function Kr(e) {
  Ht.length === 0 && queueMicrotask(Si), Ht.push(e);
}
function Ta(e) {
  Gt.length === 0 && $a($i), Gt.push(e);
}
function Da() {
  Ht.length > 0 && Si(), Gt.length > 0 && $i();
}
let or = !1, cr = !1, dr = null, st = !1, Yt = !1;
function Yn(e) {
  Yt = e;
}
let qt = [];
let $ = null, $e = !1;
function Ne(e) {
  $ = e;
}
let T = null;
function Ze(e) {
  T = e;
}
let ie = null;
function Ti(e) {
  $ !== null && $.f & Or && (ie === null ? ie = [e] : ie.push(e));
}
let ne = null, de = 0, ge = null;
function Na(e) {
  ge = e;
}
let Di = 1, hr = 0, Ge = !1;
function Ni() {
  return ++Di;
}
function Zt(e) {
  var v;
  var t = e.f;
  if ((t & De) !== 0)
    return !0;
  if ((t & ct) !== 0) {
    var r = e.deps, i = (t & he) !== 0;
    if (r !== null) {
      var l, o, f = (t & fr) !== 0, s = i && T !== null && !Ge, c = r.length;
      if (f || s) {
        var d = (
          /** @type {Derived} */
          e
        ), b = d.parent;
        for (l = 0; l < c; l++)
          o = r[l], (f || !((v = o == null ? void 0 : o.reactions) != null && v.includes(d))) && (o.reactions ?? (o.reactions = [])).push(d);
        f && (d.f ^= fr), s && b !== null && (b.f & he) === 0 && (d.f ^= he);
      }
      for (l = 0; l < c; l++)
        if (o = r[l], Zt(
          /** @type {Derived} */
          o
        ) && wi(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!i || T !== null && !Ge) && Ee(e, fe);
  }
  return !1;
}
function La(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & ur) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= ur;
      }
    r = r.parent;
  }
  throw or = !1, e;
}
function Zn(e) {
  return (e.f & pr) === 0 && (e.parent === null || (e.parent.f & ur) === 0);
}
function yr(e, t, r, i) {
  if (or) {
    if (r === null && (or = !1), Zn(t))
      throw e;
    return;
  }
  if (r !== null && (or = !0), La(e, t), Zn(t))
    throw e;
}
function Li(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var l = 0; l < i.length; l++) {
      var o = i[l];
      ie != null && ie.includes(e) || ((o.f & we) !== 0 ? Li(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? Ee(o, De) : (o.f & fe) !== 0 && Ee(o, ct), wr(
        /** @type {Effect} */
        o
      )));
    }
}
function Pi(e) {
  var y;
  var t = ne, r = de, i = ge, l = $, o = Ge, f = ie, s = oe, c = $e, d = e.f;
  ne = /** @type {null | Value[]} */
  null, de = 0, ge = null, Ge = (d & he) !== 0 && ($e || !st || $ === null), $ = (d & (Fe | ft)) === 0 ? e : null, ie = null, zn(e.ctx), $e = !1, hr++, e.f |= Or;
  try {
    var b = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (ne !== null) {
      var m;
      if (vr(e, de), v !== null && de > 0)
        for (v.length = de + ne.length, m = 0; m < ne.length; m++)
          v[de + m] = ne[m];
      else
        e.deps = v = ne;
      if (!Ge)
        for (m = de; m < v.length; m++)
          ((y = v[m]).reactions ?? (y.reactions = [])).push(e);
    } else v !== null && de < v.length && (vr(e, de), v.length = de);
    if (ji() && ge !== null && !$e && v !== null && (e.f & (we | ct | De)) === 0)
      for (m = 0; m < /** @type {Source[]} */
      ge.length; m++)
        Li(
          ge[m],
          /** @type {Effect} */
          e
        );
    return l !== null && l !== e && (hr++, ge !== null && (i === null ? i = ge : i.push(.../** @type {Source[]} */
    ge))), b;
  } finally {
    ne = t, de = r, ge = i, $ = l, Ge = o, ie = f, zn(s), $e = c, e.f ^= Or;
  }
}
function Pa(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = ta.call(r, e);
    if (i !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[i] = r[l], r.pop());
    }
  }
  r === null && (t.f & we) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ne === null || !ne.includes(t)) && (Ee(t, ct), (t.f & (he | fr)) === 0 && (t.f ^= fr), _i(
    /** @type {Derived} **/
    t
  ), vr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function vr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      Pa(e, r[i]);
}
function Xr(e) {
  var t = e.f;
  if ((t & pr) === 0) {
    Ee(e, fe);
    var r = T, i = oe, l = st;
    T = e, st = !0;
    try {
      (t & Gr) !== 0 ? Ra(e) : xi(e), Ci(e);
      var o = Pi(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Di;
      var f = e.deps, s;
      Bn && ya && e.f & De;
    } catch (c) {
      yr(c, e, r, i || e.ctx);
    } finally {
      st = l, T = r;
    }
  }
}
function Oa() {
  try {
    ha();
  } catch (e) {
    if (dr !== null)
      yr(e, dr, null);
    else
      throw e;
  }
}
function Oi() {
  var e = st;
  try {
    var t = 0;
    for (st = !0; qt.length > 0; ) {
      t++ > 1e3 && Oa();
      var r = qt, i = r.length;
      qt = [];
      for (var l = 0; l < i; l++) {
        var o = Ma(r[l]);
        Fa(o);
      }
      Wt.clear();
    }
  } finally {
    cr = !1, st = e, dr = null;
  }
}
function Fa(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (pr | At)) === 0)
        try {
          Zt(i) && (Xr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? Ai(i) : i.fn = null));
        } catch (l) {
          yr(l, i, null, i.ctx);
        }
    }
}
function wr(e) {
  cr || (cr = !0, queueMicrotask(Oi));
  for (var t = dr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (ft | Fe)) !== 0) {
      if ((r & fe) === 0) return;
      t.f ^= fe;
    }
  }
  qt.push(t);
}
function Ma(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, l = (i & (Fe | ft)) !== 0, o = l && (i & fe) !== 0;
    if (!o && (i & At) === 0) {
      if ((i & ci) !== 0)
        t.push(r);
      else if (l)
        r.f ^= fe;
      else
        try {
          Zt(r) && Xr(r);
        } catch (c) {
          yr(c, r, null, r.ctx);
        }
      var f = r.first;
      if (f !== null) {
        r = f;
        continue;
      }
    }
    var s = r.parent;
    for (r = r.next; r === null && s !== null; )
      r = s.next, s = s.parent;
  }
  return t;
}
function C(e) {
  for (var t; ; ) {
    if (Da(), qt.length === 0)
      return (
        /** @type {T} */
        t
      );
    cr = !0, Oi();
  }
}
async function Lr() {
  await Promise.resolve(), C();
}
function a(e) {
  var t = e.f, r = (t & we) !== 0;
  if ($ !== null && !$e) {
    if (!(ie != null && ie.includes(e))) {
      var i = $.deps;
      e.rv < hr && (e.rv = hr, ne === null && i !== null && i[de] === e ? de++ : ne === null ? ne = [e] : (!Ge || !ne.includes(e)) && ne.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), o = l.parent;
    o !== null && (o.f & he) === 0 && (l.f ^= he);
  }
  return r && (l = /** @type {Derived} */
  e, Zt(l) && wi(l)), Yt && Wt.has(e) ? Wt.get(e) : e.v;
}
function ut(e) {
  var t = $e;
  try {
    return $e = !0, e();
  } finally {
    $e = t;
  }
}
const Va = -7169;
function Ee(e, t) {
  e.f = e.f & Va | t;
}
const Wt = /* @__PURE__ */ new Map();
function Fi(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: mi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function P(e, t) {
  const r = Fi(e);
  return Ti(r), r;
}
// @__NO_SIDE_EFFECTS__
function Qr(e, t = !1) {
  const r = Fi(e);
  return t || (r.equals = Yr), r;
}
function _(e, t, r = !1) {
  $ !== null && !$e && ji() && ($.f & (we | Gr)) !== 0 && !(ie != null && ie.includes(e)) && ba();
  let i = r ? He(t) : t;
  return Ua(e, i);
}
function Ua(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Yt ? Wt.set(e, t) : Wt.set(e, r), e.v = t, (e.f & we) !== 0 && ((e.f & De) !== 0 && yi(
      /** @type {Derived} */
      e
    ), Ee(e, (e.f & he) === 0 ? fe : ct)), e.wv = Ni(), Mi(e, De), T !== null && (T.f & fe) !== 0 && (T.f & (Fe | ft)) === 0 && (ge === null ? Na([e]) : ge.push(e));
  }
  return t;
}
function Mi(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, l = 0; l < i; l++) {
      var o = r[l], f = o.f;
      (f & De) === 0 && (Ee(o, t), (f & (fe | he)) !== 0 && ((f & we) !== 0 ? Mi(
        /** @type {Derived} */
        o,
        ct
      ) : wr(
        /** @type {Effect} */
        o
      )));
    }
}
let oe = null;
function zn(e) {
  oe = e;
}
function Vi(e, t = !1, r) {
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
  Zr(() => {
    i.d = !0;
  });
}
function Ui(e) {
  const t = oe;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const f = t.e;
    if (f !== null) {
      var r = T, i = $;
      t.e = null;
      try {
        for (var l = 0; l < f.length; l++) {
          var o = f[l];
          Ze(o.effect), Ne(o.reaction), zr(o.fn);
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
function ji() {
  return !0;
}
const ja = ["touchstart", "touchmove"];
function qa(e) {
  return ja.includes(e);
}
function Ba(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Kr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Jn = !1;
function qi() {
  Jn || (Jn = !0, document.addEventListener(
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
function Bi(e) {
  var t = $, r = T;
  Ne(null), Ze(null);
  try {
    return e();
  } finally {
    Ne(t), Ze(r);
  }
}
function Ha(e, t, r, i = r) {
  e.addEventListener(t, () => Bi(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), i(!0);
  } : e.__on_r = () => i(!0), qi();
}
const Hi = /* @__PURE__ */ new Set(), jr = /* @__PURE__ */ new Set();
function Ga(e, t, r, i = {}) {
  function l(o) {
    if (i.capture || Ut.call(t, o), !o.cancelBubble)
      return Bi(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Kr(() => {
    t.addEventListener(e, l, i);
  }) : t.addEventListener(e, l, i), l;
}
function Be(e, t, r, i, l) {
  var o = { capture: i, passive: l }, f = Ga(e, t, r, o);
  (t === document.body || t === window || t === document) && Zr(() => {
    t.removeEventListener(e, f, o);
  });
}
function Wa(e) {
  for (var t = 0; t < e.length; t++)
    Hi.add(e[t]);
  for (var r of jr)
    r(e);
}
function Ut(e) {
  var X;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, l = ((X = e.composedPath) == null ? void 0 : X.call(e)) || [], o = (
    /** @type {null | Element} */
    l[0] || e.target
  ), f = 0, s = e.__root;
  if (s) {
    var c = l.indexOf(s);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = l.indexOf(t);
    if (d === -1)
      return;
    c <= d && (f = c);
  }
  if (o = /** @type {Element} */
  l[f] || e.target, o !== t) {
    Bt(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var b = $, v = T;
    Ne(null), Ze(null);
    try {
      for (var m, y = []; o !== null; ) {
        var D = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var N = o["__" + i];
          if (N != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (si(N)) {
              var [j, ...R] = N;
              j.apply(o, [e, ...R]);
            } else
              N.call(o, e);
        } catch (ae) {
          m ? y.push(ae) : m = ae;
        }
        if (e.cancelBubble || D === t || D === null)
          break;
        o = D;
      }
      if (m) {
        for (let ae of y)
          queueMicrotask(() => {
            throw ae;
          });
        throw m;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ne(b), Ze(v);
    }
  }
}
function en(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Te(e, t) {
  var r = (
    /** @type {Effect} */
    T
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
  var r = (t & Xo) !== 0, i = (t & Qo) !== 0, l, o = !e.startsWith("<!>");
  return () => {
    if (M)
      return Te(F, null), F;
    l === void 0 && (l = en(o ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ me(l)));
    var f = (
      /** @type {TemplateNode} */
      i || vi ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(f)
      ), c = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      Te(s, c);
    } else
      Te(f, f);
    return f;
  };
}
// @__NO_SIDE_EFFECTS__
function Er(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), l = `<${r}>${i ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (M)
      return Te(F, null), F;
    if (!o) {
      var f = (
        /** @type {DocumentFragment} */
        en(l)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ me(f)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ me(s);
    }
    var c = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return Te(c, c), c;
  };
}
function rr() {
  if (M)
    return Te(F, null), F;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = br();
  return e.append(t, r), Te(t, r), e;
}
function B(e, t) {
  if (M) {
    T.nodes_end = F, It();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Ya(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Gi(e, t) {
  return Wi(e, t);
}
function Za(e, t) {
  Fr(), t.intro = t.intro ?? !1;
  const r = t.target, i = M, l = F;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ me(r)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== Hr); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ ze(o);
    if (!o)
      throw xt;
    Ct(!0), We(
      /** @type {Comment} */
      o
    ), It();
    const f = Wi(e, { ...t, anchor: o });
    if (F === null || F.nodeType !== 8 || /** @type {Comment} */
    F.data !== ai)
      throw mr(), xt;
    return Ct(!1), /**  @type {Exports} */
    f;
  } catch (f) {
    if (f === xt)
      return t.recover === !1 && va(), Fr(), wa(r), Ct(!1), Gi(e, t);
    throw f;
  } finally {
    Ct(i), We(l);
  }
}
const wt = /* @__PURE__ */ new Map();
function Wi(e, { target: t, anchor: r, props: i = {}, events: l, context: o, intro: f = !0 }) {
  Fr();
  var s = /* @__PURE__ */ new Set(), c = (v) => {
    for (var m = 0; m < v.length; m++) {
      var y = v[m];
      if (!s.has(y)) {
        s.add(y);
        var D = qa(y);
        t.addEventListener(y, Ut, { passive: D });
        var N = wt.get(y);
        N === void 0 ? (document.addEventListener(y, Ut, { passive: D }), wt.set(y, 1)) : wt.set(y, N + 1);
      }
    }
  };
  c(ra(Hi)), jr.add(c);
  var d = void 0, b = Ia(() => {
    var v = r ?? t.appendChild(br());
    return Vr(() => {
      if (o) {
        Vi({});
        var m = (
          /** @type {ComponentContext} */
          oe
        );
        m.c = o;
      }
      l && (i.$$events = l), M && Te(
        /** @type {TemplateNode} */
        v,
        null
      ), d = e(v, i) || {}, M && (T.nodes_end = F), o && Ui();
    }), () => {
      var D;
      for (var m of s) {
        t.removeEventListener(m, Ut);
        var y = (
          /** @type {number} */
          wt.get(m)
        );
        --y === 0 ? (document.removeEventListener(m, Ut), wt.delete(m)) : wt.set(m, y);
      }
      jr.delete(c), v !== r && ((D = v.parentNode) == null || D.removeChild(v));
    };
  });
  return qr.set(d, b), d;
}
let qr = /* @__PURE__ */ new WeakMap();
function za(e, t) {
  const r = qr.get(e);
  return r ? (qr.delete(e), r(t)) : Promise.resolve();
}
function K(e, t, [r, i] = [0, 0]) {
  M && r === 0 && It();
  var l = e, o = null, f = null, s = ue, c = r > 0 ? Wr : 0, d = !1;
  const b = (m, y = !0) => {
    d = !0, v(y, m);
  }, v = (m, y) => {
    if (s === (s = m)) return;
    let D = !1;
    if (M && i !== -1) {
      if (r === 0) {
        const j = (
          /** @type {Comment} */
          l.data
        );
        j === Hr ? i = 0 : j === oi ? i = 1 / 0 : (i = parseInt(j.substring(1)), i !== i && (i = s ? 1 / 0 : -1));
      }
      const N = i > r;
      !!s === N && (l = _a(), We(l), Ct(!1), D = !0, i = -1);
    }
    s ? (o ? Wn(o) : y && (o = Vr(() => y(l))), f && Ur(f, () => {
      f = null;
    })) : (f ? Wn(f) : y && (f = Vr(() => y(l, [r + 1, i]))), o && Ur(o, () => {
      o = null;
    })), D && Ct(!0);
  };
  Ei(() => {
    d = !1, t(b), d || v(null, null);
  }, c), M && (l = F);
}
function at(e, t, r = !1, i = !1, l = !1) {
  var o = e, f = "";
  Se(() => {
    var s = (
      /** @type {Effect} */
      T
    );
    if (f === (f = t() ?? "")) {
      M && It();
      return;
    }
    if (s.nodes_start !== null && (ki(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), f !== "") {
      if (M) {
        F.data;
        for (var c = It(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ ze(c);
        if (c === null)
          throw mr(), xt;
        Te(F, d), o = We(c);
        return;
      }
      var b = f + "";
      r ? b = `<svg>${b}</svg>` : i && (b = `<math>${b}</math>`);
      var v = en(b);
      if ((r || i) && (v = /** @type {Element} */
      /* @__PURE__ */ me(v)), Te(
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), r || i)
        for (; /* @__PURE__ */ me(v); )
          o.before(
            /** @type {Node} */
            /* @__PURE__ */ me(v)
          );
      else
        o.before(v);
    }
  });
}
function Ja(e, t, r, i, l) {
  var s;
  M && It();
  var o = (s = t.$$slots) == null ? void 0 : s[r], f = !1;
  o === !0 && (o = t.children, f = !0), o === void 0 || o(e, f ? () => i : i);
}
const Kn = [...` 	
\r\f \v\uFEFF`];
function Ka(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        i = i ? i + " " + l : l;
      else if (i.length)
        for (var o = l.length, f = 0; (f = i.indexOf(l, f)) >= 0; ) {
          var s = f + o;
          (f === 0 || Kn.includes(i[f - 1])) && (s === i.length || Kn.includes(i[s])) ? i = (f === 0 ? "" : i.substring(0, f)) + i.substring(s + 1) : f = s;
        }
  }
  return i === "" ? null : i;
}
function Xa(e, t, r, i, l, o) {
  var f = e.__className;
  if (M || f !== r || f === void 0) {
    var s = Ka(r, i, o);
    (!M || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (o && l !== o)
    for (var c in o) {
      var d = !!o[c];
      (l == null || d !== !!l[c]) && e.classList.toggle(c, d);
    }
  return o;
}
const Qa = Symbol("is custom element"), el = Symbol("is html");
function Xn(e) {
  if (M) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          S(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var l = e.checked;
          S(e, "checked", null), e.checked = l;
        }
      }
    };
    e.__on_r = r, Ta(r), qi();
  }
}
function tl(e, t) {
  var r = Yi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function S(e, t, r, i) {
  var l = Yi(e);
  M && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[ua] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && rl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Yi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Qa]: e.nodeName.includes("-"),
      [el]: e.namespaceURI === ea
    })
  );
}
var Qn = /* @__PURE__ */ new Map();
function rl(e) {
  var t = Qn.get(e.nodeName);
  if (t) return t;
  Qn.set(e.nodeName, t = []);
  for (var r, i = e, l = Element.prototype; l !== i; ) {
    r = na(i);
    for (var o in r)
      r[o].set && t.push(o);
    i = ui(i);
  }
  return t;
}
function nl(e, t, r = t) {
  Ha(e, "change", (i) => {
    var l = i ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (M && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  ut(t) == null) && r(e.checked), Jr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function ei(e, t) {
  return e === t || (e == null ? void 0 : e[jt]) === t;
}
function nr(e = {}, t, r, i) {
  return zr(() => {
    var l, o;
    return Jr(() => {
      l = o, o = [], ut(() => {
        e !== r(...o) && (t(e, ...o), l && ei(r(...l), e) && t(null, ...l));
      });
    }), () => {
      Kr(() => {
        o && ei(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function Zi(e) {
  oe === null && li(), Mr(() => {
    const t = ut(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function il(e) {
  oe === null && li(), Zi(() => () => ut(e));
}
function zi(e, t, r) {
  if (e == null)
    return t(void 0), kt;
  const i = ut(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const Et = [];
function ol(e, t = kt) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function l(s) {
    if (bi(e, s) && (e = s, r)) {
      const c = !Et.length;
      for (const d of i)
        d[1](), Et.push(d, e);
      if (c) {
        for (let d = 0; d < Et.length; d += 2)
          Et[d][0](Et[d + 1]);
        Et.length = 0;
      }
    }
  }
  function o(s) {
    l(s(
      /** @type {T} */
      e
    ));
  }
  function f(s, c = kt) {
    const d = [s, c];
    return i.add(d), i.size === 1 && (r = t(l, o) || kt), s(
      /** @type {T} */
      e
    ), () => {
      i.delete(d), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: l, update: o, subscribe: f };
}
function ar(e) {
  let t;
  return zi(e, (r) => t = r)(), t;
}
let ir = !1, Br = Symbol();
function al(e, t, r) {
  const i = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ Qr(void 0),
    unsubscribe: kt
  });
  if (i.store !== e && !(Br in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = kt;
    else {
      var l = !0;
      i.unsubscribe = zi(e, (o) => {
        l ? i.source.v = o : _(i.source, o);
      }), l = !1;
    }
  return e && Br in r ? ar(e) : a(i.source);
}
function ll() {
  const e = {};
  function t() {
    Zr(() => {
      for (var r in e)
        e[r].unsubscribe();
      Bt(e, Br, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function sl(e) {
  var t = ir;
  try {
    return ir = !1, [e(), ir];
  } finally {
    ir = t;
  }
}
function ti(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function x(e, t, r, i) {
  var Le;
  var l = (r & Zo) !== 0, o = !0, f = (r & Jo) !== 0, s = (r & Ko) !== 0, c = !1, d;
  f ? [d, c] = sl(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var b = jt in e || hi in e, v = f && (((Le = lt(e, t)) == null ? void 0 : Le.set) ?? (b && t in e && ((q) => e[t] = q))) || void 0, m = (
    /** @type {V} */
    i
  ), y = !0, D = !1, N = () => (D = !0, y && (y = !1, s ? m = ut(
    /** @type {() => V} */
    i
  ) : m = /** @type {V} */
  i), m);
  d === void 0 && i !== void 0 && (v && o && ga(), d = N(), v && v(d));
  var j;
  if (j = () => {
    var q = (
      /** @type {V} */
      e[t]
    );
    return q === void 0 ? N() : (y = !0, D = !1, q);
  }, (r & zo) === 0)
    return j;
  if (v) {
    var R = e.$$legacy;
    return function(q, xe) {
      return arguments.length > 0 ? ((!xe || R || c) && v(xe ? j() : q), q) : j();
    };
  }
  var X = !1, ae = /* @__PURE__ */ Qr(d), Q = /* @__PURE__ */ _r(() => {
    var q = j(), xe = a(ae);
    return X ? (X = !1, xe) : ae.v = q;
  });
  return f && a(Q), l || (Q.equals = Yr), function(q, xe) {
    if (arguments.length > 0) {
      const Me = xe ? a(Q) : f ? He(q) : q;
      if (!Q.equals(Me)) {
        if (X = !0, _(ae, Me), D && m !== void 0 && (m = Me), ti(Q))
          return q;
        ut(() => a(Q));
      }
      return q;
    }
    return ti(Q) ? Q.v : a(Q);
  };
}
function ul(e) {
  return new fl(e);
}
var Oe, pe;
class fl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Tr(this, Oe);
    /** @type {Record<string, any>} */
    Tr(this, pe);
    var o;
    var r = /* @__PURE__ */ new Map(), i = (f, s) => {
      var c = /* @__PURE__ */ Qr(s);
      return r.set(f, c), c;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(f, s) {
          return a(r.get(s) ?? i(s, Reflect.get(f, s)));
        },
        has(f, s) {
          return s === hi ? !0 : (a(r.get(s) ?? i(s, Reflect.get(f, s))), Reflect.has(f, s));
        },
        set(f, s, c) {
          return _(r.get(s) ?? i(s, c), c), Reflect.set(f, s, c);
        }
      }
    );
    Dr(this, pe, (t.hydrate ? Za : Gi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && C(), Dr(this, Oe, l.$$events);
    for (const f of Object.keys(se(this, pe)))
      f === "$set" || f === "$destroy" || f === "$on" || Bt(this, f, {
        get() {
          return se(this, pe)[f];
        },
        /** @param {any} value */
        set(s) {
          se(this, pe)[f] = s;
        },
        enumerable: !0
      });
    se(this, pe).$set = /** @param {Record<string, any>} next */
    (f) => {
      Object.assign(l, f);
    }, se(this, pe).$destroy = () => {
      za(se(this, pe));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    se(this, pe).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    se(this, Oe)[t] = se(this, Oe)[t] || [];
    const i = (...l) => r.call(this, ...l);
    return se(this, Oe)[t].push(i), () => {
      se(this, Oe)[t] = se(this, Oe)[t].filter(
        /** @param {any} fn */
        (l) => l !== i
      );
    };
  }
  $destroy() {
    se(this, pe).$destroy();
  }
}
Oe = new WeakMap(), pe = new WeakMap();
let Ji;
typeof HTMLElement == "function" && (Ji = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
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
        return (o) => {
          const f = document.createElement("slot");
          l !== "default" && (f.name = l), B(o, f);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = cl(this);
      for (const l of this.$$s)
        l in i && (l === "default" && !this.$$d.children ? (this.$$d.children = t(l), r.default = !0) : r[l] = t(l));
      for (const l of this.attributes) {
        const o = this.$$g_p(l.name);
        o in this.$$d || (this.$$d[o] = lr(o, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = ul({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Aa(() => {
        Jr(() => {
          var l;
          this.$$r = !0;
          for (const o of sr(this.$$c)) {
            if (!((l = this.$$p_d[o]) != null && l.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const f = lr(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            f == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, f);
          }
          this.$$r = !1;
        });
      });
      for (const l in this.$$l)
        for (const o of this.$$l[l]) {
          const f = this.$$c.$on(l, o);
          this.$$l_u.set(o, f);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = lr(t, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
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
    return sr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function lr(e, t, r, i) {
  var o;
  const l = (o = r[e]) == null ? void 0 : o.type;
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
function cl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function dl(e, t, r, i, l, o) {
  let f = class extends Ji {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return sr(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return sr(t).forEach((s) => {
    Bt(f.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(c) {
        var v;
        c = lr(s, c, t), this.$$d[s] = c;
        var d = this.$$c;
        if (d) {
          var b = (v = lt(d, s)) == null ? void 0 : v.get;
          b ? d[s] = c : d.$set({ [s]: c });
        }
      }
    });
  }), i.forEach((s) => {
    Bt(f.prototype, s, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[s];
      }
    });
  }), e.element = /** @type {any} */
  f, f;
}
const Ki = new TextEncoder();
function hl(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function vl(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await Xi(i, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function Xi(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return hl(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Ki.encode(e + t)
    )
  );
}
function gl(e, t, r = "SHA-256", i = 1e6, l = 0) {
  const o = new AbortController(), f = Date.now();
  return {
    promise: (async () => {
      for (let c = l; c <= i; c += 1) {
        if (o.signal.aborted)
          return null;
        if (await Xi(t, c, r) === e)
          return {
            number: c,
            took: Date.now() - f
          };
      }
      return null;
    })(),
    controller: o
  };
}
function ri() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function pl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function ml(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function bl(e, t = "", r = 1e6, i = 0) {
  const l = "AES-GCM", o = new AbortController(), f = Date.now(), s = async () => {
    for (let b = i; b <= r; b += 1) {
      if (o.signal.aborted || !c || !d)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: l,
            iv: ml(b)
          },
          c,
          d
        );
        if (v)
          return {
            clearText: new TextDecoder().decode(v),
            took: Date.now() - f
          };
      } catch {
      }
    }
    return null;
  };
  let c = null, d = null;
  try {
    d = pl(e);
    const b = await crypto.subtle.digest(
      "SHA-256",
      Ki.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      b,
      l,
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
var w = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(w || {}), te = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(te || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => ar(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(ar(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(ar(globalThis.altchaI18n.store));
  },
  store: ol({})
};
const _l = {
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
globalThis.altchaI18n.set("en", _l);
const Pr = (e, t) => {
  let r = /* @__PURE__ */ Ea(() => aa(t == null ? void 0 : t(), 24));
  var i = Cl();
  Se(() => {
    S(i, "width", a(r)), S(i, "height", a(r));
  }), B(e, i);
};
function yl(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function wl(e, t) {
  e.preventDefault(), t();
}
function El(e, t, r, i, l, o, f, s) {
  var c;
  [
    w.UNVERIFIED,
    w.ERROR,
    w.EXPIRED,
    w.CODE
  ].includes(a(t)) ? r() !== !1 && ((c = a(i)) == null ? void 0 : c.reportValidity()) === !1 ? _(l, !1) : o() ? f() : s() : _(l, !0);
}
var Cl = /* @__PURE__ */ Er('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), xl = /* @__PURE__ */ Ce('<input type="hidden">'), kl = /* @__PURE__ */ Ce('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), Al = /* @__PURE__ */ Er('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), Il = /* @__PURE__ */ Er('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), Rl = /* @__PURE__ */ Er('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), Sl = /* @__PURE__ */ Ce('<button type="button" class="altcha-code-challenge-audio"><!></button>'), $l = /* @__PURE__ */ Ce("<audio hidden autoplay><source></audio>"), Tl = /* @__PURE__ */ Ce('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), Dl = /* @__PURE__ */ Ce("<div><!></div>"), Nl = /* @__PURE__ */ Ce("<div><!></div>"), Ll = /* @__PURE__ */ Ce('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), Pl = /* @__PURE__ */ Ce('<div class="altcha-footer"><div><!></div></div>'), Ol = /* @__PURE__ */ Ce('<div class="altcha-anchor-arrow"></div>'), Fl = /* @__PURE__ */ Ce('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Ml(e, t) {
  var Mn, Vn;
  Vi(t, !0);
  const [r, i] = ll(), l = () => al(ro, "$altchaI18nStore", r);
  let o = x(t, "auto", 7, void 0), f = x(t, "blockspam", 7, void 0), s = x(t, "challengeurl", 7, void 0), c = x(t, "challengejson", 7, void 0), d = x(t, "credentials", 7, void 0), b = x(t, "customfetch", 7, void 0), v = x(t, "debug", 7, !1), m = x(t, "delay", 7, 0), y = x(t, "disableautofocus", 7, !1), D = x(t, "refetchonexpire", 7, !0), N = x(t, "disablerefetchonexpire", 23, () => !D()), j = x(t, "expire", 7, void 0), R = x(t, "floating", 7, void 0), X = x(t, "floatinganchor", 7, void 0), ae = x(t, "floatingoffset", 7, void 0), Q = x(t, "floatingpersist", 7, !1), Le = x(t, "hidefooter", 7, !1), q = x(t, "hidelogo", 7, !1), xe = x(t, "id", 7, void 0), Me = x(t, "language", 7, void 0), Je = x(t, "name", 7, "altcha"), Ke = x(t, "maxnumber", 7, 1e6), Rt = x(t, "mockerror", 7, !1), Ve = x(t, "obfuscated", 7, void 0), be = x(t, "overlay", 7, void 0), St = x(t, "overlaycontent", 7, void 0), zt = x(t, "plugins", 7, void 0), Xe = x(t, "sentinel", 7, void 0), ke = x(t, "spamfilter", 7, !1), ht = x(t, "strings", 7, void 0), ve = x(t, "test", 7, !1), re = x(t, "verifyurl", 7, void 0), vt = x(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), $t = x(t, "workerurl", 7, void 0);
  const { altchaI18n: to } = globalThis, ro = to.store, tn = ["SHA-256", "SHA-384", "SHA-512"], no = "https://altcha.org/", Ue = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, rn = (Vn = (Mn = document.documentElement.lang) == null ? void 0 : Mn.split("-")) == null ? void 0 : Vn[0], Cr = /* @__PURE__ */ Vt(() => {
    var n;
    return s() && new URL(s(), location.origin).host.endsWith(".altcha.org") && !!((n = s()) != null && n.includes("apiKey=ckey_"));
  }), Jt = /* @__PURE__ */ Vt(() => c() ? mn(c()) : void 0), io = /* @__PURE__ */ Vt(() => ht() ? mn(ht()) : {}), O = /* @__PURE__ */ Vt(() => ({
    ...an(l()),
    ...a(io)
  })), nn = /* @__PURE__ */ Vt(() => `${xe() || Je()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let Qe = /* @__PURE__ */ P(null), Tt = /* @__PURE__ */ P(!1), G = /* @__PURE__ */ P(null), A = /* @__PURE__ */ P(He(w.UNVERIFIED)), V = /* @__PURE__ */ P(void 0), Dt = /* @__PURE__ */ P(null), je = /* @__PURE__ */ P(null), ce = /* @__PURE__ */ P(null), xr = /* @__PURE__ */ P(null), gt = /* @__PURE__ */ P(null), L = /* @__PURE__ */ P(null), Nt = /* @__PURE__ */ P(null), et = /* @__PURE__ */ P(null), Ae = null, W = /* @__PURE__ */ P(null), tt = /* @__PURE__ */ P(!1), qe = [], kr = /* @__PURE__ */ P(!1), Ie = /* @__PURE__ */ P(null);
  Mr(() => {
    bo(a(et));
  }), Mr(() => {
    _o(a(A));
  }), il(() => {
    oo(), _(Nt, null), a(L) && (a(L).removeEventListener("submit", dn), a(L).removeEventListener("reset", hn), a(L).removeEventListener("focusin", cn), _(L, null)), Ae && (clearTimeout(Ae), Ae = null), document.removeEventListener("click", un), document.removeEventListener("scroll", fn), window.removeEventListener("resize", pn);
  }), Zi(() => {
    var n;
    I("mounted", "2.2.3"), I("workers", vt()), uo(), I("plugins", qe.length ? qe.map((u) => u.constructor.pluginName).join(", ") : "none"), ve() && I("using test mode"), j() && Ir(j()), o() !== void 0 && I("auto", o()), R() !== void 0 && wn(R()), _(L, (n = a(V)) == null ? void 0 : n.closest("form"), !0), a(L) && (a(L).addEventListener("submit", dn, { capture: !0 }), a(L).addEventListener("reset", hn), (o() === "onfocus" || Q() === "focus") && a(L).addEventListener("focusin", cn)), be() && En(!0), o() === "onload" && (Ve() ? Lt() : Pe()), a(Cr) && (Le() || q()) && I("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Ue("load");
    });
  });
  function Kt(n, u) {
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
  function oo() {
    for (const n of qe)
      n.destroy();
  }
  function on() {
    s() && !N() && a(A) === w.VERIFIED ? Pe() : rt(w.EXPIRED, a(O).expired);
  }
  async function ao() {
    if (Rt())
      throw I("mocking error"), new Error("Mocked error.");
    if (a(Jt))
      return I("using provided json data"), bn(a(Jt).salt), a(Jt);
    if (ve())
      return I("generating test challenge", { test: ve() }), vl(typeof ve() != "boolean" ? +ve() : void 0);
    {
      if (!s() && a(L)) {
        const h = a(L).getAttribute("action");
        h != null && h.includes("/form/") && s(h + "/altcha");
      }
      if (!s())
        throw new Error("Attribute challengeurl not set.");
      I("fetching challenge from", s());
      const n = {
        credentials: typeof d() == "boolean" ? "include" : d(),
        headers: ke() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, u = await Ar()(s(), n);
      if (!u || !(u instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (u.status !== 200)
        throw new Error(`Server responded with ${u.status}.`);
      const g = u.headers.get("X-Altcha-Config"), p = await u.json();
      if (bn(p.salt), g)
        try {
          const h = JSON.parse(g);
          h && typeof h == "object" && (h.verifyurl && !h.verifyurl.startsWith("fn:") && (h.verifyurl = sn(h.verifyurl)), kn(h));
        } catch (h) {
          I("unable to configure from X-Altcha-Config", h);
        }
      return p;
    }
  }
  function lo(n) {
    var g, p;
    const u = (g = a(L)) == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((p = u == null ? void 0 : u.value) == null ? void 0 : p.slice(u.value.indexOf("@"))) || void 0;
  }
  function Ar() {
    let n = fetch;
    if (b())
      if (I("using customfetch"), typeof b() == "string") {
        if (n = globalThis[b()] || null, !n)
          throw new Error(`Custom fetch function not found: ${b()}`);
      } else
        n = b();
    return n;
  }
  function an(n, u = [
    Me() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const g = Object.keys(n).map((h) => h.toLowerCase()), p = u.reduce(
      (h, E) => (E = E.toLowerCase(), h || (n[E] ? E : null) || g.find((k) => E.split("-")[0] === k.split("-")[0]) || null),
      null
    );
    return n[p || "en"];
  }
  function so() {
    return ke() === "ipAddress" ? {
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
    } : typeof ke() == "object" ? ke() : {
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
  function ln(n) {
    var g;
    return [
      ...((g = a(L)) == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((p) => `input[name="${p}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (p, h) => {
        const E = h.name, k = h.value;
        return E && k && (p[E] = /\n/.test(k) ? k.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : k), p;
      },
      {}
    );
  }
  function sn(n, u) {
    const g = new URL(s() || location.origin), p = new URL(n, g);
    if (p.search || (p.search = g.search), u)
      for (const h in u)
        u[h] !== void 0 && u[h] !== null && p.searchParams.set(h, u[h]);
    return p.toString();
  }
  function uo() {
    const n = zt() !== void 0 ? zt().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && qe.push(new u({
        el: a(V),
        clarify: Lt,
        dispatch: Ue,
        getConfiguration: An,
        getFloatingAnchor: In,
        getState: Rn,
        log: I,
        reset: rt,
        solve: xn,
        setState: Re,
        setFloatingAnchor: Sn,
        verify: Pe
      }));
  }
  function I(...n) {
    (v() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${Je()}]`, ...n);
  }
  function fo() {
    _(W, te.PAUSED, !0);
  }
  function co(n) {
    _(W, te.ERROR, !0);
  }
  function ho() {
    _(W, te.READY, !0);
  }
  function vo() {
    _(W, te.LOADING, !0);
  }
  function go() {
    _(W, te.PLAYING, !0);
  }
  function po() {
    _(W, te.PAUSED, !0);
  }
  function mo(n) {
    var u;
    if (n.preventDefault(), n.stopPropagation(), a(G)) {
      const g = new FormData(n.target), p = String(g.get("code"));
      if ((u = re()) != null && u.startsWith("fn:")) {
        const h = re().replace(/^fn:/, "");
        if (I(`calling ${h} function instead of verifyurl`), !(h in globalThis))
          throw new Error(`Global function "${h}" is undefined.`);
        return globalThis[h]({
          challenge: a(G).challenge,
          code: p,
          solution: a(G).solution
        });
      }
      _(tt, !0), _n(Kt(a(G).challenge, a(G).solution), p).then(({ reason: h, verified: E }) => {
        E ? (_(G, null), Re(w.VERIFIED), I("verified"), Lr().then(() => {
          var k;
          (k = a(xr)) == null || k.focus(), Ue("verified", { payload: a(Ie) }), o() === "onsubmit" ? yn(a(Nt)) : be() && Pt();
        })) : (rt(), _(et, h || "Verification failed", !0));
      }).catch((h) => {
        _(G, null), Re(w.ERROR, h), I("sentinel verification failed:", h);
      }).finally(() => {
        _(tt, !1);
      });
    }
  }
  function un(n) {
    var g;
    const u = n.target;
    R() && u && !a(V).contains(u) && (a(A) === w.VERIFIED && Q() === !1 || a(A) === w.VERIFIED && Q() === "focus" && !((g = a(L)) != null && g.matches(":focus-within")) || o() === "off" && a(A) === w.UNVERIFIED) && Pt();
  }
  function fn() {
    R() && a(A) !== w.UNVERIFIED && Ot();
  }
  function bo(n) {
    for (const u of qe)
      typeof u.onErrorChange == "function" && u.onErrorChange(a(et));
  }
  function cn(n) {
    a(A) === w.UNVERIFIED ? Pe() : R() && Q() === "focus" && a(A) === w.VERIFIED && Xt();
  }
  function dn(n) {
    var p;
    const u = n.target;
    u != null && u.hasAttribute("data-code-challenge-form") || (_(Nt, n.submitter, !0), a(L) && o() === "onsubmit" ? ((p = a(Nt)) == null || p.blur(), a(A) === w.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Pe().then(() => {
      yn(a(Nt));
    })) : a(A) !== w.VERIFIED && (n.preventDefault(), n.stopPropagation(), a(A) === w.VERIFYING && vn())) : a(L) && R() && o() === "off" && a(A) === w.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), Xt()));
  }
  function hn() {
    rt();
  }
  function vn() {
    a(A) === w.VERIFYING && a(O).waitAlert && alert(a(O).waitAlert);
  }
  function gn() {
    a(je) ? a(je).paused ? (a(je).currentTime = 0, a(je).play()) : a(je).pause() : (_(kr, !0), requestAnimationFrame(() => {
      var n;
      (n = a(je)) == null || n.play();
    }));
  }
  function _o(n) {
    for (const u of qe)
      typeof u.onStateChange == "function" && u.onStateChange(a(A));
    R() && a(A) !== w.UNVERIFIED && requestAnimationFrame(() => {
      Ot();
    }), _(Tt, a(A) === w.VERIFIED), be() && a(ce) && (a(A) !== w.UNVERIFIED ? Xt() : Pt());
  }
  function pn() {
    R() && Ot();
  }
  function mn(n) {
    return JSON.parse(n);
  }
  function bn(n) {
    var p;
    const u = new URLSearchParams((p = n.split("?")) == null ? void 0 : p[1]), g = u.get("expires") || u.get("expire");
    if (g) {
      const h = new Date(+g * 1e3), E = isNaN(h.getTime()) ? 0 : h.getTime() - Date.now();
      E > 0 && Ir(E);
    } else Ae && (clearTimeout(Ae), Ae = null);
  }
  async function yo(n) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    I("requesting server verification from", re());
    const u = { payload: n };
    if (ke() !== !1) {
      const {
        blockedCountries: h,
        classifier: E,
        disableRules: k,
        email: H,
        expectedLanguages: U,
        expectedCountries: ee,
        fields: le,
        ipAddress: it,
        text: mt,
        timeZone: ot
      } = so();
      u.blockedCountries = h, u.classifier = E, u.disableRules = k, u.email = H === !1 ? void 0 : lo(H), u.expectedCountries = ee, u.expectedLanguages = U || (rn ? [rn] : void 0), u.fields = le === !1 ? void 0 : ln(le), u.ipAddress = it === !1 ? void 0 : it || "auto", u.text = mt, u.timeZone = ot === !1 ? void 0 : ot || ri();
    }
    const g = await Ar()(re(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!g || !(g instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const p = await g.json();
    if (p != null && p.payload && _(Ie, p.payload, !0), Ue("serververification", p), f() && p.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function _n(n, u) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    I("requesting sentinel verification from", re());
    const g = { code: u, payload: n };
    Xe() && (g.fields = Xe().fields ? ln() : void 0, g.timeZone = Xe().timeZone ? ri() : void 0);
    const p = await Ar()(re(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!p || !(p instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (p.status !== 200)
      throw new Error(`Server responded with ${p.status}.`);
    const h = await p.json();
    return h != null && h.payload && _(Ie, h.payload, !0), Ue("sentinelverification", h), h;
  }
  function yn(n) {
    var u;
    a(L) && "requestSubmit" in a(L) ? a(L).requestSubmit(n) : (u = a(L)) != null && u.reportValidity() && (n ? n.click() : a(L).submit());
  }
  function Ir(n) {
    I("expire", n), Ae && (clearTimeout(Ae), Ae = null), n < 1 ? on() : Ae = setTimeout(on, n);
  }
  function wn(n) {
    I("floating", n), R() !== n && (a(V).style.left = "", a(V).style.top = ""), R(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : R()), R() ? (o() || o("onsubmit"), document.addEventListener("scroll", fn), document.addEventListener("click", un), window.addEventListener("resize", pn)) : o() === "onsubmit" && o(void 0);
  }
  function En(n) {
    var u, g;
    if (I("overlay", n), be(n), n) {
      if (o() || o("onsubmit"), a(ce) && a(V).parentElement && a(ce).replaceWith(a(V).parentElement), (g = (u = a(V)) == null ? void 0 : u.parentElement) != null && g.parentElement) {
        _(ce, document.createElement("div"), !0), a(V).parentElement.parentElement.appendChild(a(ce));
        const p = document.createElement("div"), h = document.createElement("button");
        h.type = "button", h.innerHTML = "&times;", h.addEventListener("click", (E) => {
          E.preventDefault(), rt();
        }), a(ce).classList.add("altcha-overlay-backdrop"), h.classList.add("altcha-overlay-close-button"), p.classList.add("altcha-overlay"), a(ce).append(p), p.append(h), St() && p.append(...document.querySelectorAll(St())), p.append(a(V).parentElement);
      }
    } else a(ce) && a(V).parentElement && (a(ce).replaceWith(a(V).parentElement), a(V).style.display = "block");
  }
  function Cn(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!tn.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${tn.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function xn(n) {
    let u = null, g = null;
    if ("Worker" in window) {
      try {
        u = wo(n, n.maxNumber || n.maxnumber || Ke()), _(Qe, u.controller, !0), g = await u.promise;
      } catch (p) {
        I(p);
      } finally {
        _(Qe, null);
      }
      if (g === null || (g == null ? void 0 : g.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: g };
    }
    if ("obfuscated" in n) {
      const p = await bl(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await p.promise };
    }
    u = gl(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || Ke()), _(Qe, u.controller, !0);
    try {
      g = await u.promise;
    } catch (p) {
      I(p);
    } finally {
      _(Qe, null);
    }
    return { data: n, solution: g };
  }
  function wo(n, u = typeof ve() == "number" ? ve() : n.maxNumber || n.maxnumber || Ke(), g = Math.ceil(vt())) {
    const p = new AbortController(), h = [];
    g = Math.min(16, u, Math.max(1, g));
    for (let H = 0; H < g; H++)
      h.push(altchaCreateWorker($t()));
    const E = Math.ceil(u / g);
    return { promise: (async () => {
      const H = await Promise.all(h.map((U, ee) => {
        const le = ee * E;
        return p.signal.addEventListener("abort", () => {
          U.postMessage({ type: "abort" });
        }), new Promise((it) => {
          U.addEventListener("message", (mt) => {
            if (mt.data)
              for (const ot of h)
                ot !== U && ot.postMessage({ type: "abort" });
            it(mt.data);
          }), U.postMessage({
            payload: n,
            max: le + E,
            start: le,
            type: "work"
          });
        });
      }));
      for (const U of h)
        U.terminate();
      return H.find((U) => !!U) || null;
    })(), controller: p };
  }
  async function Lt() {
    if (!Ve()) {
      Re(w.ERROR);
      return;
    }
    const n = qe.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Re(w.ERROR), I("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function kn(n) {
    n.obfuscated !== void 0 && Ve(n.obfuscated), n.auto !== void 0 && (o(n.auto), o() === "onload" && (Ve() ? Lt() : Pe())), n.blockspam !== void 0 && f(!!n.blockspam), n.customfetch !== void 0 && b(n.customfetch), n.floatinganchor !== void 0 && X(n.floatinganchor), n.delay !== void 0 && m(n.delay), n.floatingoffset !== void 0 && ae(n.floatingoffset), n.floating !== void 0 && wn(n.floating), n.expire !== void 0 && (Ir(n.expire), j(n.expire)), n.challenge && (c(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), Cn(a(Jt))), n.challengeurl !== void 0 && s(n.challengeurl), n.debug !== void 0 && v(!!n.debug), n.hidefooter !== void 0 && Le(!!n.hidefooter), n.hidelogo !== void 0 && q(!!n.hidelogo), n.language !== void 0 && ht(an(l(), [n.language])), n.maxnumber !== void 0 && Ke(+n.maxnumber), n.mockerror !== void 0 && Rt(!!n.mockerror), n.name !== void 0 && Je(n.name), n.overlaycontent !== void 0 && St(n.overlaycontent), n.overlay !== void 0 && En(n.overlay), n.refetchonexpire !== void 0 && N(!n.refetchonexpire), n.disablerefetchonexpire !== void 0 && N(!n.disablerefetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Xe(n.sentinel), n.spamfilter !== void 0 && ke(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ht(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && ve(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && re(n.verifyurl), n.workers !== void 0 && vt(+n.workers), n.workerurl !== void 0 && $t(n.workerurl);
  }
  function An() {
    return {
      auto: o(),
      blockspam: f(),
      challengeurl: s(),
      debug: v(),
      delay: m(),
      disableautofocus: y(),
      disablerefetchonexpire: N(),
      expire: j(),
      floating: R(),
      floatinganchor: X(),
      floatingoffset: ae(),
      hidefooter: Le(),
      hidelogo: q(),
      name: Je(),
      maxnumber: Ke(),
      mockerror: Rt(),
      obfuscated: Ve(),
      overlay: be(),
      refetchonexpire: !N(),
      spamfilter: ke(),
      strings: a(O),
      test: ve(),
      verifyurl: re(),
      workers: vt(),
      workerurl: $t()
    };
  }
  function In() {
    return a(gt);
  }
  function Eo(n) {
    return qe.find((u) => u.constructor.pluginName === n);
  }
  function Rn() {
    return a(A);
  }
  function Pt() {
    a(V).style.display = "none", be() && a(ce) && (a(ce).style.display = "none");
  }
  function Ot(n = 20) {
    var u;
    if (a(V))
      if (a(gt) || _(gt, (X() ? document.querySelector(X()) : (u = a(L)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || a(L), !0), a(gt)) {
        const g = parseInt(ae(), 10) || 12, p = a(gt).getBoundingClientRect(), h = a(V).getBoundingClientRect(), E = document.documentElement.clientHeight, k = document.documentElement.clientWidth, H = R() === "auto" ? p.bottom + h.height + g + n > E : R() === "top", U = Math.max(n, Math.min(k - n - h.width, p.left + p.width / 2 - h.width / 2));
        if (H ? a(V).style.top = `${p.top - (h.height + g)}px` : a(V).style.top = `${p.bottom + g}px`, a(V).style.left = `${U}px`, a(V).setAttribute("data-floating", H ? "top" : "bottom"), a(Dt)) {
          const ee = a(Dt).getBoundingClientRect();
          a(Dt).style.left = p.left - U + p.width / 2 - ee.width / 2 + "px";
        }
      } else
        I("unable to find floating anchor element");
  }
  function rt(n = w.UNVERIFIED, u = null) {
    a(Qe) && (a(Qe).abort(), _(Qe, null)), _(Tt, !1), _(Ie, null), _(G, null), _(kr, !1), _(W, null), Re(n, u);
  }
  function Sn(n) {
    _(gt, n, !0);
  }
  function Re(n, u = null) {
    _(A, n, !0), _(et, u, !0), Ue("statechange", {
      payload: a(Ie),
      state: a(A)
    });
  }
  function Xt() {
    a(V).style.display = "block", R() && Ot(), be() && a(ce) && (a(ce).style.display = "flex");
  }
  async function Pe() {
    return rt(w.VERIFYING), await new Promise((n) => setTimeout(n, m() || 0)), ao().then((n) => (Cn(n), I("challenge", n), xn(n))).then(({ data: n, solution: u }) => {
      var g;
      if (I("solution", u), !u || n && "challenge" in n && !("clearText" in u)) {
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (re() && "codeChallenge" in n)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(((g = document.activeElement) == null ? void 0 : g.tagName) || "") && y() === !1 && document.activeElement.blur(), _(G, { challenge: n, solution: u }, !0);
          else {
            if (re() && Xe() !== void 0)
              return _n(Kt(n, u));
            if (re())
              return yo(Kt(n, u));
            _(Ie, Kt(n, u), !0), I("payload", a(Ie));
          }
        else if (a(A) !== w.EXPIRED)
          throw I("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
      }
    }).then(() => {
      a(G) ? (Re(w.CODE), Lr().then(() => {
        Ue("code", { codeChallenge: a(G) });
      })) : a(Ie) && (Re(w.VERIFIED), I("verified"), Lr().then(() => {
        Ue("verified", { payload: a(Ie) }), be() && Pt();
      }));
    }).catch((n) => {
      I(n), Re(w.ERROR, n.message);
    });
  }
  var $n = Fl(), Tn = Mt($n);
  Ja(Tn, t, "default", {});
  var pt = J(Tn, 2), Rr = z(pt), Qt = z(Rr);
  let Dn;
  var Nn = z(Qt);
  {
    var Co = (n) => {
      Pr(n);
    };
    K(Nn, (n) => {
      a(A) === w.VERIFYING && n(Co);
    });
  }
  var nt = J(Nn, 2);
  Xn(nt), nt.__change = [
    El,
    A,
    ke,
    L,
    Tt,
    Ve,
    Lt,
    Pe
  ], nr(nt, (n) => _(xr, n), () => a(xr)), Z(Qt);
  var er = J(Qt, 2), xo = z(er);
  {
    var ko = (n) => {
      var u = rr(), g = Mt(u);
      at(g, () => a(O).verified), B(n, u);
    }, Ao = (n, u) => {
      {
        var g = (h) => {
          var E = rr(), k = Mt(E);
          at(k, () => a(O).verifying), B(h, E);
        }, p = (h, E) => {
          {
            var k = (U) => {
              var ee = rr(), le = Mt(ee);
              at(le, () => a(O).verificationRequired), B(U, ee);
            }, H = (U) => {
              var ee = rr(), le = Mt(ee);
              at(le, () => a(O).label), B(U, ee);
            };
            K(
              h,
              (U) => {
                a(A) === w.CODE ? U(k) : U(H, !1);
              },
              E
            );
          }
        };
        K(
          n,
          (h) => {
            a(A) === w.VERIFYING ? h(g) : h(p, !1);
          },
          u
        );
      }
    };
    K(xo, (n) => {
      a(A) === w.VERIFIED ? n(ko) : n(Ao, !1);
    });
  }
  Z(er);
  var Ln = J(er, 2);
  {
    var Io = (n) => {
      var u = xl();
      Xn(u), Se(() => {
        S(u, "name", Je()), tl(u, a(Ie));
      }), B(n, u);
    };
    K(Ln, (n) => {
      a(A) === w.VERIFIED && n(Io);
    });
  }
  var Pn = J(Ln, 2);
  {
    var Ro = (n) => {
      var u = kl(), g = z(u);
      S(g, "href", no), Z(u), Se(() => S(g, "aria-label", a(O).ariaLinkLabel)), B(n, u);
    };
    K(Pn, (n) => {
      (q() !== !0 || a(Cr)) && n(Ro);
    });
  }
  var So = J(Pn, 2);
  {
    var $o = (n) => {
      var u = Tl(), g = J(z(u), 2), p = z(g), h = J(p, 2);
      Ba(h, !y()), h.__keydown = [
        yl,
        gn
      ];
      var E = J(h, 2), k = z(E), H = z(k);
      {
        var U = (_e) => {
          var Y = Sl();
          Y.__click = gn;
          var tr = z(Y);
          {
            var Ft = (bt) => {
              Pr(bt, () => 20);
            }, Mo = (bt, Vo) => {
              {
                var Uo = (_t) => {
                  var Sr = Al();
                  B(_t, Sr);
                }, jo = (_t, Sr) => {
                  {
                    var qo = (yt) => {
                      var $r = Il();
                      B(yt, $r);
                    }, Bo = (yt) => {
                      var $r = Rl();
                      B(yt, $r);
                    };
                    K(
                      _t,
                      (yt) => {
                        a(W) === te.PLAYING ? yt(qo) : yt(Bo, !1);
                      },
                      Sr
                    );
                  }
                };
                K(
                  bt,
                  (_t) => {
                    a(W) === te.ERROR ? _t(Uo) : _t(jo, !1);
                  },
                  Vo
                );
              }
            };
            K(tr, (bt) => {
              a(W) === te.LOADING ? bt(Ft) : bt(Mo, !1);
            });
          }
          Z(Y), Se(() => {
            S(Y, "title", a(O).getAudioChallenge), Y.disabled = a(W) === te.LOADING || a(W) === te.ERROR || a(tt), S(Y, "aria-label", a(W) === te.LOADING ? a(O).loading : a(O).getAudioChallenge);
          }), B(_e, Y);
        };
        K(H, (_e) => {
          a(G).challenge.codeChallenge.audio && _e(U);
        });
      }
      var ee = J(H, 2);
      ee.__click = [wl, Pe], Z(k);
      var le = J(k, 2), it = z(le);
      {
        var mt = (_e) => {
          Pr(_e, () => 16);
        };
        K(it, (_e) => {
          a(tt) && _e(mt);
        });
      }
      var ot = J(it);
      Z(le), Z(E);
      var Oo = J(E, 2);
      {
        var Fo = (_e) => {
          var Y = $l(), tr = z(Y);
          Z(Y), nr(Y, (Ft) => _(je, Ft), () => a(je)), Se((Ft) => S(tr, "src", Ft), [
            () => sn(a(G).challenge.codeChallenge.audio, { language: Me() })
          ]), Be("loadstart", Y, vo), Be("canplay", Y, ho), Be("pause", Y, po), Be("playing", Y, go), Be("ended", Y, fo), Be("error", tr, co), B(_e, Y);
        };
        K(Oo, (_e) => {
          a(G).challenge.codeChallenge.audio && a(kr) && _e(Fo);
        });
      }
      Z(g), Z(u), Se(() => {
        S(u, "aria-label", a(O).verificationRequired), S(p, "src", a(G).challenge.codeChallenge.image), S(h, "minlength", a(G).challenge.codeChallenge.length || 1), S(h, "maxlength", a(G).challenge.codeChallenge.length), S(h, "placeholder", a(O).enterCode), S(h, "aria-label", a(W) === te.LOADING ? a(O).loading : a(W) === te.PLAYING ? "" : a(O).enterCodeAria), S(h, "aria-live", a(W) ? "assertive" : "polite"), S(h, "aria-busy", a(W) === te.LOADING), h.disabled = a(tt), S(ee, "aria-label", a(O).reload), S(ee, "title", a(O).reload), ee.disabled = a(tt), le.disabled = a(tt), S(le, "aria-label", a(O).verify), Ya(ot, ` ${a(O).verify ?? ""}`);
      }), Be("submit", g, mo, !0), B(n, u);
    };
    K(So, (n) => {
      var u;
      (u = a(G)) != null && u.challenge.codeChallenge && n($o);
    });
  }
  Z(Rr);
  var On = J(Rr, 2);
  {
    var To = (n) => {
      var u = Ll(), g = J(z(u), 2);
      {
        var p = (E) => {
          var k = Dl(), H = z(k);
          at(H, () => a(O).expired), Z(k), Se(() => S(k, "title", a(et))), B(E, k);
        }, h = (E) => {
          var k = Nl(), H = z(k);
          at(H, () => a(O).error), Z(k), Se(() => S(k, "title", a(et))), B(E, k);
        };
        K(g, (E) => {
          a(A) === w.EXPIRED ? E(p) : E(h, !1);
        });
      }
      Z(u), B(n, u);
    };
    K(On, (n) => {
      (a(et) || a(A) === w.EXPIRED) && n(To);
    });
  }
  var Fn = J(On, 2);
  {
    var Do = (n) => {
      var u = Pl(), g = z(u), p = z(g);
      at(p, () => a(O).footer), Z(g), Z(u), B(n, u);
    };
    K(Fn, (n) => {
      a(O).footer && (Le() !== !0 || a(Cr)) && n(Do);
    });
  }
  var No = J(Fn, 2);
  {
    var Lo = (n) => {
      var u = Ol();
      nr(u, (g) => _(Dt, g), () => a(Dt)), B(n, u);
    };
    K(No, (n) => {
      R() && n(Lo);
    });
  }
  Z(pt), nr(pt, (n) => _(V, n), () => a(V)), Se(
    (n) => {
      S(pt, "data-state", a(A)), S(pt, "data-floating", R()), S(pt, "data-overlay", be()), Dn = Xa(Qt, 1, "altcha-checkbox", null, Dn, n), S(nt, "id", a(nn)), nt.required = o() !== "onsubmit" && (!R() || o() !== "off"), S(er, "for", a(nn));
    },
    [
      () => ({
        "altcha-checkbox-verifying": a(A) === w.VERIFYING
      })
    ]
  ), Be("invalid", nt, vn), nl(nt, () => a(Tt), (n) => _(Tt, n)), B(e, $n);
  var Po = Ui({
    clarify: Lt,
    configure: kn,
    getConfiguration: An,
    getFloatingAnchor: In,
    getPlugin: Eo,
    getState: Rn,
    hide: Pt,
    repositionFloating: Ot,
    reset: rt,
    setFloatingAnchor: Sn,
    setState: Re,
    show: Xt,
    verify: Pe,
    get auto() {
      return o();
    },
    set auto(n = void 0) {
      o(n), C();
    },
    get blockspam() {
      return f();
    },
    set blockspam(n = void 0) {
      f(n), C();
    },
    get challengeurl() {
      return s();
    },
    set challengeurl(n = void 0) {
      s(n), C();
    },
    get challengejson() {
      return c();
    },
    set challengejson(n = void 0) {
      c(n), C();
    },
    get credentials() {
      return d();
    },
    set credentials(n = void 0) {
      d(n), C();
    },
    get customfetch() {
      return b();
    },
    set customfetch(n = void 0) {
      b(n), C();
    },
    get debug() {
      return v();
    },
    set debug(n = !1) {
      v(n), C();
    },
    get delay() {
      return m();
    },
    set delay(n = 0) {
      m(n), C();
    },
    get disableautofocus() {
      return y();
    },
    set disableautofocus(n = !1) {
      y(n), C();
    },
    get refetchonexpire() {
      return D();
    },
    set refetchonexpire(n = !0) {
      D(n), C();
    },
    get disablerefetchonexpire() {
      return N();
    },
    set disablerefetchonexpire(n = !D) {
      N(n), C();
    },
    get expire() {
      return j();
    },
    set expire(n = void 0) {
      j(n), C();
    },
    get floating() {
      return R();
    },
    set floating(n = void 0) {
      R(n), C();
    },
    get floatinganchor() {
      return X();
    },
    set floatinganchor(n = void 0) {
      X(n), C();
    },
    get floatingoffset() {
      return ae();
    },
    set floatingoffset(n = void 0) {
      ae(n), C();
    },
    get floatingpersist() {
      return Q();
    },
    set floatingpersist(n = !1) {
      Q(n), C();
    },
    get hidefooter() {
      return Le();
    },
    set hidefooter(n = !1) {
      Le(n), C();
    },
    get hidelogo() {
      return q();
    },
    set hidelogo(n = !1) {
      q(n), C();
    },
    get id() {
      return xe();
    },
    set id(n = void 0) {
      xe(n), C();
    },
    get language() {
      return Me();
    },
    set language(n = void 0) {
      Me(n), C();
    },
    get name() {
      return Je();
    },
    set name(n = "altcha") {
      Je(n), C();
    },
    get maxnumber() {
      return Ke();
    },
    set maxnumber(n = 1e6) {
      Ke(n), C();
    },
    get mockerror() {
      return Rt();
    },
    set mockerror(n = !1) {
      Rt(n), C();
    },
    get obfuscated() {
      return Ve();
    },
    set obfuscated(n = void 0) {
      Ve(n), C();
    },
    get overlay() {
      return be();
    },
    set overlay(n = void 0) {
      be(n), C();
    },
    get overlaycontent() {
      return St();
    },
    set overlaycontent(n = void 0) {
      St(n), C();
    },
    get plugins() {
      return zt();
    },
    set plugins(n = void 0) {
      zt(n), C();
    },
    get sentinel() {
      return Xe();
    },
    set sentinel(n = void 0) {
      Xe(n), C();
    },
    get spamfilter() {
      return ke();
    },
    set spamfilter(n = !1) {
      ke(n), C();
    },
    get strings() {
      return ht();
    },
    set strings(n = void 0) {
      ht(n), C();
    },
    get test() {
      return ve();
    },
    set test(n = !1) {
      ve(n), C();
    },
    get verifyurl() {
      return re();
    },
    set verifyurl(n = void 0) {
      re(n), C();
    },
    get workers() {
      return vt();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      vt(n), C();
    },
    get workerurl() {
      return $t();
    },
    set workerurl(n = void 0) {
      $t(n), C();
    }
  });
  return i(), Po;
}
Wa(["change", "keydown", "click"]);
customElements.define("altcha-widget", dl(
  Ml,
  {
    blockspam: { type: "Boolean" },
    debug: { type: "Boolean" },
    delay: { type: "Number" },
    disableautofocus: { type: "Boolean" },
    disablerefetchonexpire: { type: "Boolean" },
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
const Qi = '@keyframes overlay-slidein{to{opacity:1;top:50%}}@keyframes altcha-spinner{to{transform:rotate(360deg)}}.altcha{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative}.altcha:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top] .altcha-anchor-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom]:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top]:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]:not([data-state=unverified]){display:block}.altcha-anchor-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main{align-items:center;display:flex;gap:.4rem;padding:.7rem;position:relative}.altcha-code-challenge{background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));padding:.5rem;position:absolute;top:2.5rem;z-index:9999999}.altcha-code-challenge>form{display:flex;flex-direction:column;gap:.5rem}.altcha-code-challenge-input{border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:0;font-size:16px;padding:.35rem;width:220px}.altcha-code-challenge-input:focus{outline:2px solid color-mix(in srgb,var(--altcha-color-active, #1D1DC9) 20%,transparent)}.altcha-code-challenge-input:disabled{opacity:.7}.altcha-code-challenge-image{background-color:#fff;border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px}.altcha-code-challenge-audio,.altcha-code-challenge-reload{background:color-mix(in srgb,var(--altcha-color-text, currentColor) 10%,transparent);border:0;border-radius:3px;color:var(--altcha-color-text, currentColor);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:.35rem}.altcha-code-challenge-audio:disabled,.altcha-code-challenge-reload:disabled,.altcha-code-challenge-verify:disabled{opacity:.7;pointer-events:none}.altcha-code-challenge-audio>*,.altcha-code-challenge-reload>*{height:20px;width:20px}.altcha-code-challenge-buttons{display:flex;justify-content:space-between}.altcha-code-challenge-buttons-left{display:flex;gap:.25rem}.altcha-code-challenge-verify{align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:#fff;cursor:pointer;display:flex;gap:.5rem;font-size:100%;padding:.35rem 1rem}.altcha-code-challenge-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:.15rem;position:absolute;top:-12px;width:0}.altcha[data-floating=top] .altcha-code-challenge{top:-150px}.altcha[data-floating=top] .altcha-code-challenge-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto}.altcha-label{cursor:pointer;flex-grow:1}.altcha-logo{color:currentColor!important;opacity:.7}.altcha-footer:hover,.altcha-logo:hover{opacity:1}.altcha-error{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:.85rem;gap:.3rem;padding:0 .7rem .7rem}.altcha-footer{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:.75rem;opacity:.7;justify-content:end;padding:.2rem .7rem}.altcha-footer a{color:currentColor}.altcha-checkbox{display:flex;align-items:center;justify-content:center;height:24px;position:relative;width:24px}.altcha-checkbox .altcha-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.altcha-checkbox input{width:18px;height:18px;margin:0}.altcha-checkbox-verifying input{appearance:none;opacity:0;pointer-events:none}.altcha-spinner{animation:altcha-spinner .75s infinite linear;transform-origin:center}.altcha-overlay{--altcha-color-base:#fff;--altcha-color-text:#000;animation:overlay-slidein .5s forwards;display:flex;flex-direction:column;gap:.5rem;left:50%;width:260px;opacity:0;position:fixed;top:45%;transform:translate(-50%,-50%)}.altcha-overlay-backdrop{background:rgba(0,0,0,.5);bottom:0;display:none;left:0;position:fixed;right:0;top:0;z-index:99999999}.altcha-overlay-close-button{align-self:flex-end;background:0 0;border:0;padding:.25rem;cursor:pointer;color:currentColor;font-size:130%;line-height:1;opacity:.7}@media (max-height:450px){.altcha-overlay{top:10%!important;transform:translate(-50%,0)}}';
function eo(e, t = "__altcha-css") {
  if (!document.getElementById(t)) {
    const r = document.createElement("style");
    r.id = t, r.textContent = e, document.head.appendChild(r);
  }
}
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new Wo();
eo(Qi);
eo(Qi);
export {
  Ml as Altcha
};
