const Yn = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,l=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=l;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const l="AES-GCM",o=new AbortController,a=Date.now(),s=async()=>{for(let i=n;i<=r;i+=1){if(o.signal.aborted||!c||!u)return null;try{const f=await crypto.subtle.decrypt({name:l,iv:g(i)},c,u);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,u=null;try{u=h(e);const i=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",i,l,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:s(),controller:o}}let y;onmessage=async e=>{const{type:t,payload:r,start:n,max:l}=e.data;let o=null;if(t==="abort")y?.abort(),y=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:s}=r||{};o=await m(s,a,l,n)}else{const{algorithm:a,challenge:s,salt:c}=r||{};o=w(s,c,a,l,n)}y=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, Dn = typeof self < "u" && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", Yn], { type: "text/javascript;charset=utf-8" });
function Ni(e) {
  let t;
  try {
    if (t = Dn && (self.URL || self.webkitURL).createObjectURL(Dn), !t) throw "";
    const r = new Worker(t, {
      name: e?.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(Yn),
      {
        name: e?.name
      }
    );
  }
}
const Li = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Li);
const Pi = 1, Oi = 4, Fi = 8, Mi = 16, Vi = 1, Ui = 2, Mr = "[", Zn = "[!", zn = "]", bt = {}, ae = Symbol(), ji = "http://www.w3.org/1999/xhtml", Nn = !1;
function Jn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Kn = Array.isArray, qi = Array.prototype.indexOf, Bi = Array.from, or = Object.keys, Mt = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, Hi = Object.getOwnPropertyDescriptors, Gi = Object.prototype, Wi = Array.prototype, Xn = Object.getPrototypeOf, Ln = Object.isExtensible;
const yt = () => {
};
function Qn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Yi(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const me = 2, eo = 4, fr = 8, Vr = 16, De = 32, it = 64, ir = 128, fe = 256, ar = 512, le = 1024, Ie = 2048, at = 4096, wt = 8192, dr = 16384, Zi = 32768, Ur = 65536, zi = 1 << 19, to = 1 << 20, Sr = 1 << 21, Ot = Symbol("$state"), ro = Symbol("legacy props"), Ji = Symbol("");
function Ki(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Xi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Qi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ea() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ta() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ra(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function na() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function oa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ia() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function hr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let O = !1;
function _t(e) {
  O = e;
}
let P;
function Ue(e) {
  if (e === null)
    throw hr(), bt;
  return P = e;
}
function Et() {
  return Ue(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Be(P)
  );
}
function Z(e) {
  if (O) {
    if (/* @__PURE__ */ Be(P) !== null)
      throw hr(), bt;
    P = e;
  }
}
function aa() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === zn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Mr || r === Zn) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Be(t)
    );
    t.remove(), t = o;
  }
}
let la = !1;
function Me(e) {
  if (typeof e != "object" || e === null || Ot in e)
    return e;
  const t = Xn(e);
  if (t !== Gi && t !== Wi)
    return e;
  var r = /* @__PURE__ */ new Map(), o = Kn(e), l = /* @__PURE__ */ N(0), a = $, s = (c) => {
    var f = $;
    Re(a);
    var d = c();
    return Re(f), d;
  };
  return o && r.set("length", /* @__PURE__ */ N(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, f, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && na();
        var m = r.get(f);
        return m === void 0 ? (m = s(() => /* @__PURE__ */ N(d.value)), r.set(f, m)) : b(
          m,
          s(() => Me(d.value))
        ), !0;
      },
      deleteProperty(c, f) {
        var d = r.get(f);
        if (d === void 0)
          f in c && (r.set(
            f,
            s(() => /* @__PURE__ */ N(ae))
          ), Ir(l));
        else {
          if (o && typeof f == "string") {
            var m = (
              /** @type {Source<number>} */
              r.get("length")
            ), v = Number(f);
            Number.isInteger(v) && v < m.v && b(m, v);
          }
          b(d, ae), Ir(l);
        }
        return !0;
      },
      get(c, f, d) {
        if (f === Ot)
          return e;
        var m = r.get(f), v = f in c;
        if (m === void 0 && (!v || rt(c, f)?.writable) && (m = s(() => /* @__PURE__ */ N(Me(v ? c[f] : ae))), r.set(f, m)), m !== void 0) {
          var _ = i(m);
          return _ === ae ? void 0 : _;
        }
        return Reflect.get(c, f, d);
      },
      getOwnPropertyDescriptor(c, f) {
        var d = Reflect.getOwnPropertyDescriptor(c, f);
        if (d && "value" in d) {
          var m = r.get(f);
          m && (d.value = i(m));
        } else if (d === void 0) {
          var v = r.get(f), _ = v?.v;
          if (v !== void 0 && _ !== ae)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return d;
      },
      has(c, f) {
        if (f === Ot)
          return !0;
        var d = r.get(f), m = d !== void 0 && d.v !== ae || Reflect.has(c, f);
        if (d !== void 0 || S !== null && (!m || rt(c, f)?.writable)) {
          d === void 0 && (d = s(() => /* @__PURE__ */ N(m ? Me(c[f]) : ae)), r.set(f, d));
          var v = i(d);
          if (v === ae)
            return !1;
        }
        return m;
      },
      set(c, f, d, m) {
        var v = r.get(f), _ = f in c;
        if (o && f === "length")
          for (var w = d; w < /** @type {Source<number>} */
          v.v; w += 1) {
            var F = r.get(w + "");
            F !== void 0 ? b(F, ae) : w in c && (F = s(() => /* @__PURE__ */ N(ae)), r.set(w + "", F));
          }
        v === void 0 ? (!_ || rt(c, f)?.writable) && (v = s(() => /* @__PURE__ */ N(void 0)), b(
          v,
          s(() => Me(d))
        ), r.set(f, v)) : (_ = v.v !== ae, b(
          v,
          s(() => Me(d))
        ));
        var M = Reflect.getOwnPropertyDescriptor(c, f);
        if (M?.set && M.set.call(m, d), !_) {
          if (o && typeof f == "string") {
            var U = (
              /** @type {Source<number>} */
              r.get("length")
            ), I = Number(f);
            Number.isInteger(I) && I >= U.v && b(U, I + 1);
          }
          Ir(l);
        }
        return !0;
      },
      ownKeys(c) {
        i(l);
        var f = Reflect.ownKeys(c).filter((v) => {
          var _ = r.get(v);
          return _ === void 0 || _.v !== ae;
        });
        for (var [d, m] of r)
          m.v !== ae && !(d in c) && f.push(d);
        return f;
      },
      setPrototypeOf() {
        oa();
      }
    }
  );
}
function Ir(e, t = 1) {
  b(e, e.v + t);
}
var Pn, no, oo, io;
function Tr() {
  if (Pn === void 0) {
    Pn = window, no = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    oo = rt(t, "firstChild").get, io = rt(t, "nextSibling").get, Ln(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ln(r) && (r.__t = void 0);
  }
}
function vr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  return oo.call(e);
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  return io.call(e);
}
function z(e, t) {
  if (!O)
    return /* @__PURE__ */ ve(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ve(P)
  );
  return r === null && (r = P.appendChild(vr())), Ue(r), r;
}
function Nt(e, t) {
  if (!O) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ve(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Be(r) : r;
  }
  return P;
}
function J(e, t = 1, r = !1) {
  let o = O ? P : e;
  for (var l; t--; )
    l = o, o = /** @type {TemplateNode} */
    /* @__PURE__ */ Be(o);
  if (!O)
    return o;
  var a = o?.nodeType;
  if (r && a !== 3) {
    var s = vr();
    return o === null ? l?.after(s) : o.before(s), Ue(s), s;
  }
  return Ue(o), /** @type {TemplateNode} */
  o;
}
function sa(e) {
  e.textContent = "";
}
function ao(e) {
  return e === this.v;
}
function lo(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function jr(e) {
  return !lo(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function gr(e) {
  var t = me | Ie, r = $ !== null && ($.f & me) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return S === null || r !== null && (r.f & fe) !== 0 ? t |= fe : S.f |= to, {
    ctx: ne,
    deps: null,
    effects: null,
    equals: ao,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? S
  };
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  const t = /* @__PURE__ */ gr(e);
  return wo(t), t;
}
// @__NO_SIDE_EFFECTS__
function ua(e) {
  const t = /* @__PURE__ */ gr(e);
  return t.equals = jr, t;
}
function so(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      je(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ca(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & me) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function uo(e) {
  var t, r = S;
  qe(ca(e));
  try {
    so(e), t = ko(e);
  } finally {
    qe(r);
  }
  return t;
}
function co(e) {
  var t = uo(e), r = (Ve || (e.f & fe) !== 0) && e.deps !== null ? at : le;
  _e(e, r), e.equals(t) || (e.v = t, e.wv = xo());
}
function fa(e) {
  S === null && $ === null && Qi(), $ !== null && ($.f & fe) !== 0 && S === null && Xi(), qt && Ki();
}
function da(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function lt(e, t, r, o = !0) {
  var l = S, a = {
    ctx: ne,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ie,
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
      Wr(a), a.f |= Zi;
    } catch (f) {
      throw je(a), f;
    }
  else t !== null && mr(a);
  var s = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (to | ir)) === 0;
  if (!s && o && (l !== null && da(a, l), $ !== null && ($.f & me) !== 0)) {
    var c = (
      /** @type {Derived} */
      $
    );
    (c.effects ??= []).push(a);
  }
  return a;
}
function qr(e) {
  const t = lt(fr, null, !1);
  return _e(t, le), t.teardown = e, t;
}
function Dr(e) {
  fa();
  var t = S !== null && (S.f & De) !== 0 && ne !== null && !ne.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ne
    );
    (r.e ??= []).push({
      fn: e,
      effect: S,
      reaction: $
    });
  } else {
    var o = Br(e);
    return o;
  }
}
function ha(e) {
  const t = lt(it, e, !0);
  return () => {
    je(t);
  };
}
function va(e) {
  const t = lt(it, e, !0);
  return (r = {}) => new Promise((o) => {
    r.outro ? Lr(t, () => {
      je(t), o(void 0);
    }) : (je(t), o(void 0));
  });
}
function Br(e) {
  return lt(eo, e, !1);
}
function Hr(e) {
  return lt(fr, e, !0);
}
function Ce(e, t = [], r = gr) {
  const o = t.map(r);
  return fo(() => e(...o.map(i)));
}
function fo(e, t = 0) {
  return lt(fr | Vr | t, e, !0);
}
function Nr(e, t = !0) {
  return lt(fr | De, e, !0, t);
}
function ho(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = qt, o = $;
    Fn(!0), Re(null);
    try {
      t.call(null);
    } finally {
      Fn(r), Re(o);
    }
  }
}
function vo(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var o = r.next;
    (r.f & it) !== 0 ? r.parent = null : je(r, t), r = o;
  }
}
function ga(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & De) === 0 && je(t), t = r;
  }
}
function je(e, t = !0) {
  var r = !1;
  (t || (e.f & zi) !== 0) && e.nodes_start !== null && (go(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), vo(e, t && !r), cr(e, 0), _e(e, dr);
  var o = e.transitions;
  if (o !== null)
    for (const a of o)
      a.stop();
  ho(e);
  var l = e.parent;
  l !== null && l.first !== null && po(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function go(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Be(e)
    );
    e.remove(), e = r;
  }
}
function po(e) {
  var t = e.parent, r = e.prev, o = e.next;
  r !== null && (r.next = o), o !== null && (o.prev = r), t !== null && (t.first === e && (t.first = o), t.last === e && (t.last = r));
}
function Lr(e, t) {
  var r = [];
  mo(e, r, !0), pa(r, () => {
    je(e), t && t();
  });
}
function pa(e, t) {
  var r = e.length;
  if (r > 0) {
    var o = () => --r || t();
    for (var l of e)
      l.out(o);
  } else
    t();
}
function mo(e, t, r) {
  if ((e.f & wt) === 0) {
    if (e.f ^= wt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var o = e.first; o !== null; ) {
      var l = o.next, a = (o.f & Ur) !== 0 || (o.f & De) !== 0;
      mo(o, t, a ? r : !1), o = l;
    }
  }
}
function On(e) {
  _o(e, !0);
}
function _o(e, t) {
  if ((e.f & wt) !== 0) {
    e.f ^= wt, (e.f & le) === 0 && (e.f ^= le), Bt(e) && (_e(e, Ie), mr(e));
    for (var r = e.first; r !== null; ) {
      var o = r.next, l = (r.f & Ur) !== 0 || (r.f & De) !== 0;
      _o(r, l ? t : !1), r = o;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
const ma = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Vt = [], Ut = [];
function bo() {
  var e = Vt;
  Vt = [], Qn(e);
}
function yo() {
  var e = Ut;
  Ut = [], Qn(e);
}
function Gr(e) {
  Vt.length === 0 && queueMicrotask(bo), Vt.push(e);
}
function _a(e) {
  Ut.length === 0 && ma(yo), Ut.push(e);
}
function ba() {
  Vt.length > 0 && bo(), Ut.length > 0 && yo();
}
let tr = !1, lr = !1, sr = null, nt = !1, qt = !1;
function Fn(e) {
  qt = e;
}
let Ft = [];
let $ = null, ke = !1;
function Re(e) {
  $ = e;
}
let S = null;
function qe(e) {
  S = e;
}
let Te = null;
function wo(e) {
  $ !== null && $.f & Sr && (Te === null ? Te = [e] : Te.push(e));
}
let re = null, ce = 0, he = null;
function ya(e) {
  he = e;
}
let Eo = 1, ur = 0, Ve = !1;
function xo() {
  return ++Eo;
}
function Bt(e) {
  var t = e.f;
  if ((t & Ie) !== 0)
    return !0;
  if ((t & at) !== 0) {
    var r = e.deps, o = (t & fe) !== 0;
    if (r !== null) {
      var l, a, s = (t & ar) !== 0, c = o && S !== null && !Ve, f = r.length;
      if (s || c) {
        var d = (
          /** @type {Derived} */
          e
        ), m = d.parent;
        for (l = 0; l < f; l++)
          a = r[l], (s || !a?.reactions?.includes(d)) && (a.reactions ??= []).push(d);
        s && (d.f ^= ar), c && m !== null && (m.f & fe) === 0 && (d.f ^= fe);
      }
      for (l = 0; l < f; l++)
        if (a = r[l], Bt(
          /** @type {Derived} */
          a
        ) && co(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || S !== null && !Ve) && _e(e, le);
  }
  return !1;
}
function wa(e, t) {
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
  throw tr = !1, e;
}
function Mn(e) {
  return (e.f & dr) === 0 && (e.parent === null || (e.parent.f & ir) === 0);
}
function pr(e, t, r, o) {
  if (tr) {
    if (r === null && (tr = !1), Mn(t))
      throw e;
    return;
  }
  if (r !== null && (tr = !0), wa(e, t), Mn(t))
    throw e;
}
function Co(e, t, r = !0) {
  var o = e.reactions;
  if (o !== null)
    for (var l = 0; l < o.length; l++) {
      var a = o[l];
      Te?.includes(e) || ((a.f & me) !== 0 ? Co(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? _e(a, Ie) : (a.f & le) !== 0 && _e(a, at), mr(
        /** @type {Effect} */
        a
      )));
    }
}
function ko(e) {
  var t = re, r = ce, o = he, l = $, a = Ve, s = Te, c = ne, f = ke, d = e.f;
  re = /** @type {null | Value[]} */
  null, ce = 0, he = null, Ve = (d & fe) !== 0 && (ke || !nt || $ === null), $ = (d & (De | it)) === 0 ? e : null, Te = null, Vn(e.ctx), ke = !1, ur++, e.f |= Sr;
  try {
    var m = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (re !== null) {
      var _;
      if (cr(e, ce), v !== null && ce > 0)
        for (v.length = ce + re.length, _ = 0; _ < re.length; _++)
          v[ce + _] = re[_];
      else
        e.deps = v = re;
      if (!Ve)
        for (_ = ce; _ < v.length; _++)
          (v[_].reactions ??= []).push(e);
    } else v !== null && ce < v.length && (cr(e, ce), v.length = ce);
    if (To() && he !== null && !ke && v !== null && (e.f & (me | at | Ie)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      he.length; _++)
        Co(
          he[_],
          /** @type {Effect} */
          e
        );
    return l !== null && l !== e && (ur++, he !== null && (o === null ? o = he : o.push(.../** @type {Source[]} */
    he))), m;
  } finally {
    re = t, ce = r, he = o, $ = l, Ve = a, Te = s, Vn(c), ke = f, e.f ^= Sr;
  }
}
function Ea(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var o = qi.call(r, e);
    if (o !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[o] = r[l], r.pop());
    }
  }
  r === null && (t.f & me) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (re === null || !re.includes(t)) && (_e(t, at), (t.f & (fe | ar)) === 0 && (t.f ^= ar), so(
    /** @type {Derived} **/
    t
  ), cr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function cr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var o = t; o < r.length; o++)
      Ea(e, r[o]);
}
function Wr(e) {
  var t = e.f;
  if ((t & dr) === 0) {
    _e(e, le);
    var r = S, o = ne, l = nt;
    S = e, nt = !0;
    try {
      (t & Vr) !== 0 ? ga(e) : vo(e), ho(e);
      var a = ko(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Eo;
      var s = e.deps, c;
      Nn && la && e.f & Ie;
    } catch (f) {
      pr(f, e, r, o || e.ctx);
    } finally {
      nt = l, S = r;
    }
  }
}
function xa() {
  try {
    ea();
  } catch (e) {
    if (sr !== null)
      pr(e, sr, null);
    else
      throw e;
  }
}
function Ao() {
  var e = nt;
  try {
    var t = 0;
    for (nt = !0; Ft.length > 0; ) {
      t++ > 1e3 && xa();
      var r = Ft, o = r.length;
      Ft = [];
      for (var l = 0; l < o; l++) {
        var a = ka(r[l]);
        Ca(a);
      }
      jt.clear();
    }
  } finally {
    lr = !1, nt = e, sr = null;
  }
}
function Ca(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var o = e[r];
      if ((o.f & (dr | wt)) === 0)
        try {
          Bt(o) && (Wr(o), o.deps === null && o.first === null && o.nodes_start === null && (o.teardown === null ? po(o) : o.fn = null));
        } catch (l) {
          pr(l, o, null, o.ctx);
        }
    }
}
function mr(e) {
  lr || (lr = !0, queueMicrotask(Ao));
  for (var t = sr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (it | De)) !== 0) {
      if ((r & le) === 0) return;
      t.f ^= le;
    }
  }
  Ft.push(t);
}
function ka(e) {
  for (var t = [], r = e; r !== null; ) {
    var o = r.f, l = (o & (De | it)) !== 0, a = l && (o & le) !== 0;
    if (!a && (o & wt) === 0) {
      if ((o & eo) !== 0)
        t.push(r);
      else if (l)
        r.f ^= le;
      else
        try {
          Bt(r) && Wr(r);
        } catch (f) {
          pr(f, r, null, r.ctx);
        }
      var s = r.first;
      if (s !== null) {
        r = s;
        continue;
      }
    }
    var c = r.parent;
    for (r = r.next; r === null && c !== null; )
      r = c.next, c = c.parent;
  }
  return t;
}
function E(e) {
  for (var t; ; ) {
    if (ba(), Ft.length === 0)
      return (
        /** @type {T} */
        t
      );
    lr = !0, Ao();
  }
}
async function Rr() {
  await Promise.resolve(), E();
}
function i(e) {
  var t = e.f, r = (t & me) !== 0;
  if ($ !== null && !ke) {
    if (!Te?.includes(e)) {
      var o = $.deps;
      e.rv < ur && (e.rv = ur, re === null && o !== null && o[ce] === e ? ce++ : re === null ? re = [e] : (!Ve || !re.includes(e)) && re.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), a = l.parent;
    a !== null && (a.f & fe) === 0 && (l.f ^= fe);
  }
  return r && (l = /** @type {Derived} */
  e, Bt(l) && co(l)), qt && jt.has(e) ? jt.get(e) : e.v;
}
function ot(e) {
  var t = ke;
  try {
    return ke = !0, e();
  } finally {
    ke = t;
  }
}
const Aa = -7169;
function _e(e, t) {
  e.f = e.f & Aa | t;
}
const jt = /* @__PURE__ */ new Map();
function Io(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ao,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function N(e, t) {
  const r = Io(e);
  return wo(r), r;
}
// @__NO_SIDE_EFFECTS__
function Yr(e, t = !1) {
  const r = Io(e);
  return t || (r.equals = jr), r;
}
function b(e, t, r = !1) {
  $ !== null && !ke && To() && ($.f & (me | Vr)) !== 0 && !Te?.includes(e) && ia();
  let o = r ? Me(t) : t;
  return Ia(e, o);
}
function Ia(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    qt ? jt.set(e, t) : jt.set(e, r), e.v = t, (e.f & me) !== 0 && ((e.f & Ie) !== 0 && uo(
      /** @type {Derived} */
      e
    ), _e(e, (e.f & fe) === 0 ? le : at)), e.wv = xo(), Ro(e, Ie), S !== null && (S.f & le) !== 0 && (S.f & (De | it)) === 0 && (he === null ? ya([e]) : he.push(e));
  }
  return t;
}
function Ro(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var o = r.length, l = 0; l < o; l++) {
      var a = r[l], s = a.f;
      (s & Ie) === 0 && (_e(a, t), (s & (le | fe)) !== 0 && ((s & me) !== 0 ? Ro(
        /** @type {Derived} */
        a,
        at
      ) : mr(
        /** @type {Effect} */
        a
      )));
    }
}
let ne = null;
function Vn(e) {
  ne = e;
}
function $o(e, t = !1, r) {
  var o = ne = {
    p: ne,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  qr(() => {
    o.d = !0;
  });
}
function So(e) {
  const t = ne;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = S, o = $;
      t.e = null;
      try {
        for (var l = 0; l < s.length; l++) {
          var a = s[l];
          qe(a.effect), Re(a.reaction), Br(a.fn);
        }
      } finally {
        qe(r), Re(o);
      }
    }
    ne = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function To() {
  return !0;
}
const Ra = ["touchstart", "touchmove"];
function $a(e) {
  return Ra.includes(e);
}
function Sa(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Gr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Un = !1;
function Do() {
  Un || (Un = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function No(e) {
  var t = $, r = S;
  Re(null), qe(null);
  try {
    return e();
  } finally {
    Re(t), qe(r);
  }
}
function Ta(e, t, r, o = r) {
  e.addEventListener(t, () => No(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), o(!0);
  } : e.__on_r = () => o(!0), Do();
}
const Lo = /* @__PURE__ */ new Set(), Pr = /* @__PURE__ */ new Set();
function Da(e, t, r, o = {}) {
  function l(a) {
    if (o.capture || Pt.call(t, a), !a.cancelBubble)
      return No(() => r?.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Gr(() => {
    t.addEventListener(e, l, o);
  }) : t.addEventListener(e, l, o), l;
}
function Fe(e, t, r, o, l) {
  var a = { capture: o, passive: l }, s = Da(e, t, r, a);
  (t === document.body || t === window || t === document) && qr(() => {
    t.removeEventListener(e, s, a);
  });
}
function Na(e) {
  for (var t = 0; t < e.length; t++)
    Lo.add(e[t]);
  for (var r of Pr)
    r(e);
}
function Pt(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), o = e.type, l = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    l[0] || e.target
  ), s = 0, c = e.__root;
  if (c) {
    var f = l.indexOf(c);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = l.indexOf(t);
    if (d === -1)
      return;
    f <= d && (s = f);
  }
  if (a = /** @type {Element} */
  l[s] || e.target, a !== t) {
    Mt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var m = $, v = S;
    Re(null), qe(null);
    try {
      for (var _, w = []; a !== null; ) {
        var F = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var M = a["__" + o];
          if (M != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Kn(M)) {
              var [U, ...I] = M;
              U.apply(a, [e, ...I]);
            } else
              M.call(a, e);
        } catch (ee) {
          _ ? w.push(ee) : _ = ee;
        }
        if (e.cancelBubble || F === t || F === null)
          break;
        a = F;
      }
      if (_) {
        for (let ee of w)
          queueMicrotask(() => {
            throw ee;
          });
        throw _;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Re(m), qe(v);
    }
  }
}
function Zr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ae(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function be(e, t) {
  var r = (t & Vi) !== 0, o = (t & Ui) !== 0, l, a = !e.startsWith("<!>");
  return () => {
    if (O)
      return Ae(P, null), P;
    l === void 0 && (l = Zr(a ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ ve(l)));
    var s = (
      /** @type {TemplateNode} */
      o || no ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (r) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ve(s)
      ), f = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ae(c, f);
    } else
      Ae(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function _r(e, t, r = "svg") {
  var o = !e.startsWith("<!>"), l = `<${r}>${o ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (O)
      return Ae(P, null), P;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Zr(l)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ ve(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ ve(c);
    }
    var f = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Ae(f, f), f;
  };
}
function Xt() {
  if (O)
    return Ae(P, null), P;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = vr();
  return e.append(t, r), Ae(t, r), e;
}
function B(e, t) {
  if (O) {
    S.nodes_end = P, Et();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function La(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ??= e.nodeValue) && (e.__t = r, e.nodeValue = r + "");
}
function Po(e, t) {
  return Oo(e, t);
}
function Pa(e, t) {
  Tr(), t.intro = t.intro ?? !1;
  const r = t.target, o = O, l = P;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ve(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Mr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Be(a);
    if (!a)
      throw bt;
    _t(!0), Ue(
      /** @type {Comment} */
      a
    ), Et();
    const s = Oo(e, { ...t, anchor: a });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== zn)
      throw hr(), bt;
    return _t(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === bt)
      return t.recover === !1 && ta(), Tr(), sa(r), _t(!1), Po(e, t);
    throw s;
  } finally {
    _t(o), Ue(l);
  }
}
const pt = /* @__PURE__ */ new Map();
function Oo(e, { target: t, anchor: r, props: o = {}, events: l, context: a, intro: s = !0 }) {
  Tr();
  var c = /* @__PURE__ */ new Set(), f = (v) => {
    for (var _ = 0; _ < v.length; _++) {
      var w = v[_];
      if (!c.has(w)) {
        c.add(w);
        var F = $a(w);
        t.addEventListener(w, Pt, { passive: F });
        var M = pt.get(w);
        M === void 0 ? (document.addEventListener(w, Pt, { passive: F }), pt.set(w, 1)) : pt.set(w, M + 1);
      }
    }
  };
  f(Bi(Lo)), Pr.add(f);
  var d = void 0, m = va(() => {
    var v = r ?? t.appendChild(vr());
    return Nr(() => {
      if (a) {
        $o({});
        var _ = (
          /** @type {ComponentContext} */
          ne
        );
        _.c = a;
      }
      l && (o.$$events = l), O && Ae(
        /** @type {TemplateNode} */
        v,
        null
      ), d = e(v, o) || {}, O && (S.nodes_end = P), a && So();
    }), () => {
      for (var _ of c) {
        t.removeEventListener(_, Pt);
        var w = (
          /** @type {number} */
          pt.get(_)
        );
        --w === 0 ? (document.removeEventListener(_, Pt), pt.delete(_)) : pt.set(_, w);
      }
      Pr.delete(f), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return Or.set(d, m), d;
}
let Or = /* @__PURE__ */ new WeakMap();
function Oa(e, t) {
  const r = Or.get(e);
  return r ? (Or.delete(e), r(t)) : Promise.resolve();
}
function K(e, t, [r, o] = [0, 0]) {
  O && r === 0 && Et();
  var l = e, a = null, s = null, c = ae, f = r > 0 ? Ur : 0, d = !1;
  const m = (_, w = !0) => {
    d = !0, v(w, _);
  }, v = (_, w) => {
    if (c === (c = _)) return;
    let F = !1;
    if (O && o !== -1) {
      if (r === 0) {
        const U = (
          /** @type {Comment} */
          l.data
        );
        U === Mr ? o = 0 : U === Zn ? o = 1 / 0 : (o = parseInt(U.substring(1)), o !== o && (o = c ? 1 / 0 : -1));
      }
      const M = o > r;
      !!c === M && (l = aa(), Ue(l), _t(!1), F = !0, o = -1);
    }
    c ? (a ? On(a) : w && (a = Nr(() => w(l))), s && Lr(s, () => {
      s = null;
    })) : (s ? On(s) : w && (s = Nr(() => w(l, [r + 1, o]))), a && Lr(a, () => {
      a = null;
    })), F && _t(!0);
  };
  fo(() => {
    d = !1, t(m), d || v(null, null);
  }, f), O && (l = P);
}
function tt(e, t, r = !1, o = !1, l = !1) {
  var a = e, s = "";
  Ce(() => {
    var c = (
      /** @type {Effect} */
      S
    );
    if (s === (s = t() ?? "")) {
      O && Et();
      return;
    }
    if (c.nodes_start !== null && (go(
      c.nodes_start,
      /** @type {TemplateNode} */
      c.nodes_end
    ), c.nodes_start = c.nodes_end = null), s !== "") {
      if (O) {
        P.data;
        for (var f = Et(), d = f; f !== null && (f.nodeType !== 8 || /** @type {Comment} */
        f.data !== ""); )
          d = f, f = /** @type {TemplateNode} */
          /* @__PURE__ */ Be(f);
        if (f === null)
          throw hr(), bt;
        Ae(P, d), a = Ue(f);
        return;
      }
      var m = s + "";
      r ? m = `<svg>${m}</svg>` : o && (m = `<math>${m}</math>`);
      var v = Zr(m);
      if ((r || o) && (v = /** @type {Element} */
      /* @__PURE__ */ ve(v)), Ae(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ve(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), r || o)
        for (; /* @__PURE__ */ ve(v); )
          a.before(
            /** @type {Node} */
            /* @__PURE__ */ ve(v)
          );
      else
        a.before(v);
    }
  });
}
function Fa(e, t, r, o, l) {
  O && Et();
  var a = t.$$slots?.[r], s = !1;
  a === !0 && (a = t.children, s = !0), a === void 0 || a(e, s ? () => o : o);
}
const jn = [...` 	
\r\f \v\uFEFF`];
function Ma(e, t, r) {
  var o = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        o = o ? o + " " + l : l;
      else if (o.length)
        for (var a = l.length, s = 0; (s = o.indexOf(l, s)) >= 0; ) {
          var c = s + a;
          (s === 0 || jn.includes(o[s - 1])) && (c === o.length || jn.includes(o[c])) ? o = (s === 0 ? "" : o.substring(0, s)) + o.substring(c + 1) : s = c;
        }
  }
  return o === "" ? null : o;
}
function Va(e, t, r, o, l, a) {
  var s = e.__className;
  if (O || s !== r || s === void 0) {
    var c = Ma(r, o, a);
    (!O || c !== e.getAttribute("class")) && (c == null ? e.removeAttribute("class") : e.className = c), e.__className = r;
  } else if (a && l !== a)
    for (var f in a) {
      var d = !!a[f];
      (l == null || d !== !!l[f]) && e.classList.toggle(f, d);
    }
  return a;
}
const Ua = Symbol("is custom element"), ja = Symbol("is html");
function qn(e) {
  if (O) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var o = e.value;
          R(e, "value", null), e.value = o;
        }
        if (e.hasAttribute("checked")) {
          var l = e.checked;
          R(e, "checked", null), e.checked = l;
        }
      }
    };
    e.__on_r = r, _a(r), Do();
  }
}
function qa(e, t) {
  var r = Fo(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function R(e, t, r, o) {
  var l = Fo(e);
  O && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[Ji] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ba(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Fo(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Ua]: e.nodeName.includes("-"),
      [ja]: e.namespaceURI === ji
    }
  );
}
var Bn = /* @__PURE__ */ new Map();
function Ba(e) {
  var t = Bn.get(e.nodeName);
  if (t) return t;
  Bn.set(e.nodeName, t = []);
  for (var r, o = e, l = Element.prototype; l !== o; ) {
    r = Hi(o);
    for (var a in r)
      r[a].set && t.push(a);
    o = Xn(o);
  }
  return t;
}
function Ha(e, t, r = t) {
  Ta(e, "change", (o) => {
    var l = o ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (O && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  ot(t) == null) && r(e.checked), Hr(() => {
    var o = t();
    e.checked = !!o;
  });
}
function Hn(e, t) {
  return e === t || e?.[Ot] === t;
}
function Qt(e = {}, t, r, o) {
  return Br(() => {
    var l, a;
    return Hr(() => {
      l = a, a = [], ot(() => {
        e !== r(...a) && (t(e, ...a), l && Hn(r(...l), e) && t(null, ...l));
      });
    }), () => {
      Gr(() => {
        a && Hn(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Mo(e) {
  ne === null && Jn(), Dr(() => {
    const t = ot(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ga(e) {
  ne === null && Jn(), Mo(() => () => ot(e));
}
function Vo(e, t, r) {
  if (e == null)
    return t(void 0), yt;
  const o = ot(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
const mt = [];
function Wa(e, t = yt) {
  let r = null;
  const o = /* @__PURE__ */ new Set();
  function l(c) {
    if (lo(e, c) && (e = c, r)) {
      const f = !mt.length;
      for (const d of o)
        d[1](), mt.push(d, e);
      if (f) {
        for (let d = 0; d < mt.length; d += 2)
          mt[d][0](mt[d + 1]);
        mt.length = 0;
      }
    }
  }
  function a(c) {
    l(c(
      /** @type {T} */
      e
    ));
  }
  function s(c, f = yt) {
    const d = [c, f];
    return o.add(d), o.size === 1 && (r = t(l, a) || yt), c(
      /** @type {T} */
      e
    ), () => {
      o.delete(d), o.size === 0 && r && (r(), r = null);
    };
  }
  return { set: l, update: a, subscribe: s };
}
function rr(e) {
  let t;
  return Vo(e, (r) => t = r)(), t;
}
let er = !1, Fr = Symbol();
function Ya(e, t, r) {
  const o = r[t] ??= {
    store: null,
    source: /* @__PURE__ */ Yr(void 0),
    unsubscribe: yt
  };
  if (o.store !== e && !(Fr in r))
    if (o.unsubscribe(), o.store = e ?? null, e == null)
      o.source.v = void 0, o.unsubscribe = yt;
    else {
      var l = !0;
      o.unsubscribe = Vo(e, (a) => {
        l ? o.source.v = a : b(o.source, a);
      }), l = !1;
    }
  return e && Fr in r ? rr(e) : i(o.source);
}
function Za() {
  const e = {};
  function t() {
    qr(() => {
      for (var r in e)
        e[r].unsubscribe();
      Mt(e, Fr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function za(e) {
  var t = er;
  try {
    return er = !1, [e(), er];
  } finally {
    er = t;
  }
}
function Gn(e) {
  return e.ctx?.d ?? !1;
}
function x(e, t, r, o) {
  var l = (r & Pi) !== 0, a = !0, s = (r & Fi) !== 0, c = (r & Mi) !== 0, f = !1, d;
  s ? [d, f] = za(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var m = Ot in e || ro in e, v = s && (rt(e, t)?.set ?? (m && t in e && ((j) => e[t] = j))) || void 0, _ = (
    /** @type {V} */
    o
  ), w = !0, F = !1, M = () => (F = !0, w && (w = !1, c ? _ = ot(
    /** @type {() => V} */
    o
  ) : _ = /** @type {V} */
  o), _);
  d === void 0 && o !== void 0 && (v && a && ra(), d = M(), v && v(d));
  var U;
  if (U = () => {
    var j = (
      /** @type {V} */
      e[t]
    );
    return j === void 0 ? M() : (w = !0, F = !1, j);
  }, (r & Oi) === 0)
    return U;
  if (v) {
    var I = e.$$legacy;
    return function(j, se) {
      return arguments.length > 0 ? ((!se || I || f) && v(se ? U() : j), j) : U();
    };
  }
  var ee = !1, $e = /* @__PURE__ */ Yr(d), X = /* @__PURE__ */ gr(() => {
    var j = U(), se = i($e);
    return ee ? (ee = !1, se) : $e.v = j;
  });
  return s && i(X), l || (X.equals = jr), function(j, se) {
    if (arguments.length > 0) {
      const He = se ? i(X) : s ? Me(j) : j;
      if (!X.equals(He)) {
        if (ee = !0, b($e, He), F && _ !== void 0 && (_ = He), Gn(X))
          return j;
        ot(() => i(X));
      }
      return j;
    }
    return Gn(X) ? X.v : i(X);
  };
}
function Ja(e) {
  return new Ka(e);
}
class Ka {
  /** @type {any} */
  #t;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var c = /* @__PURE__ */ Yr(s);
      return r.set(a, c), c;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return i(r.get(s) ?? o(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === ro ? !0 : (i(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, c) {
          return b(r.get(s) ?? o(s, c), c), Reflect.set(a, s, c);
        }
      }
    );
    this.#e = (t.hydrate ? Pa : Po)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && E(), this.#t = l.$$events;
    for (const a of Object.keys(this.#e))
      a === "$set" || a === "$destroy" || a === "$on" || Mt(this, a, {
        get() {
          return this.#e[a];
        },
        /** @param {any} value */
        set(s) {
          this.#e[a] = s;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(l, a);
    }, this.#e.$destroy = () => {
      Oa(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#e.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    this.#t[t] = this.#t[t] || [];
    const o = (...l) => r.call(this, ...l);
    return this.#t[t].push(o), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (l) => l !== o
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let Uo;
typeof HTMLElement == "function" && (Uo = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, r) {
    super(), this.$$ctor = e, this.$$s = t, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const o = this.$$c.$on(e, t);
      this.$$l_u.set(t, o);
    }
    super.addEventListener(e, t, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, r) {
    if (super.removeEventListener(e, t, r), this.$$c) {
      const o = this.$$l_u.get(t);
      o && (o(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(o) {
        return (l) => {
          const a = document.createElement("slot");
          o !== "default" && (a.name = o), B(l, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, r = Xa(this);
      for (const o of this.$$s)
        o in r && (o === "default" && !this.$$d.children ? (this.$$d.children = e(o), t.default = !0) : t[o] = e(o));
      for (const o of this.attributes) {
        const l = this.$$g_p(o.name);
        l in this.$$d || (this.$$d[l] = nr(l, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = Ja({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = ha(() => {
        Hr(() => {
          this.$$r = !0;
          for (const o of or(this.$$c)) {
            if (!this.$$p_d[o]?.reflect) continue;
            this.$$d[o] = this.$$c[o];
            const l = nr(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, l);
          }
          this.$$r = !1;
        });
      });
      for (const o in this.$$l)
        for (const l of this.$$l[o]) {
          const a = this.$$c.$on(o, l);
          this.$$l_u.set(l, a);
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
  attributeChangedCallback(e, t, r) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = nr(e, r, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return or(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function nr(e, t, r, o) {
  const l = r[e]?.type;
  if (t = l === "Boolean" && typeof t != "boolean" ? t != null : t, !o || !r[e])
    return t;
  if (o === "toAttribute")
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
function Xa(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Qa(e, t, r, o, l, a) {
  let s = class extends Uo {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return or(t).map(
        (c) => (t[c].attribute || c).toLowerCase()
      );
    }
  };
  return or(t).forEach((c) => {
    Mt(s.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(f) {
        f = nr(c, f, t), this.$$d[c] = f;
        var d = this.$$c;
        if (d) {
          var m = rt(d, c)?.get;
          m ? d[c] = f : d.$set({ [c]: f });
        }
      }
    });
  }), o.forEach((c) => {
    Mt(s.prototype, c, {
      get() {
        return this.$$c?.[c];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const jo = new TextEncoder();
function el(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function tl(e, t = "SHA-256", r = 1e5) {
  const o = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await qo(o, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: o,
    signature: ""
  };
}
async function qo(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return el(
    await crypto.subtle.digest(
      r.toUpperCase(),
      jo.encode(e + t)
    )
  );
}
function rl(e, t, r = "SHA-256", o = 1e6, l = 0) {
  const a = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let f = l; f <= o; f += 1) {
        if (a.signal.aborted)
          return null;
        if (await qo(t, f, r) === e)
          return {
            number: f,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: a
  };
}
function Wn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function nl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let o = 0; o < t.length; o++)
    r[o] = t.charCodeAt(o);
  return r;
}
function ol(e, t = 12) {
  const r = new Uint8Array(t);
  for (let o = 0; o < t; o++)
    r[o] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function il(e, t = "", r = 1e6, o = 0) {
  const l = "AES-GCM", a = new AbortController(), s = Date.now(), c = async () => {
    for (let m = o; m <= r; m += 1) {
      if (a.signal.aborted || !f || !d)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: l,
            iv: ol(m)
          },
          f,
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
  let f = null, d = null;
  try {
    d = nl(e);
    const m = await crypto.subtle.digest(
      "SHA-256",
      jo.encode(t)
    );
    f = await crypto.subtle.importKey(
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
    promise: c(),
    controller: a
  };
}
var y = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(y || {}), Q = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(Q || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => rr(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(rr(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(rr(globalThis.altchaI18n.store));
  },
  store: Wa({})
};
const al = {
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
globalThis.altchaI18n.set("en", al);
const $r = (e, t) => {
  let r = /* @__PURE__ */ ua(() => Yi(t?.(), 24));
  var o = cl();
  Ce(() => {
    R(o, "width", i(r)), R(o, "height", i(r));
  }), B(e, o);
};
function ll(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function sl(e, t) {
  e.preventDefault(), t();
}
function ul(e, t, r, o, l, a, s, c) {
  [
    y.UNVERIFIED,
    y.ERROR,
    y.EXPIRED,
    y.CODE
  ].includes(i(t)) ? r() !== !1 && i(o)?.reportValidity() === !1 ? b(l, !1) : a() ? s() : c() : b(l, !0);
}
var cl = /* @__PURE__ */ _r('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), fl = /* @__PURE__ */ be('<input type="hidden">'), dl = /* @__PURE__ */ be('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), hl = /* @__PURE__ */ _r('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), vl = /* @__PURE__ */ _r('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), gl = /* @__PURE__ */ _r('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), pl = /* @__PURE__ */ be('<button type="button" class="altcha-code-challenge-audio"><!></button>'), ml = /* @__PURE__ */ be("<audio hidden autoplay><source></audio>"), _l = /* @__PURE__ */ be('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), bl = /* @__PURE__ */ be("<div><!></div>"), yl = /* @__PURE__ */ be("<div><!></div>"), wl = /* @__PURE__ */ be('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), El = /* @__PURE__ */ be('<div class="altcha-footer"><div><!></div></div>'), xl = /* @__PURE__ */ be('<div class="altcha-anchor-arrow"></div>'), Cl = /* @__PURE__ */ be('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function kl(e, t) {
  $o(t, !0);
  const [r, o] = Za(), l = () => Ya(Wo, "$altchaI18nStore", r);
  let a = x(t, "auto", 7, void 0), s = x(t, "blockspam", 7, void 0), c = x(t, "challengeurl", 7, void 0), f = x(t, "challengejson", 7, void 0), d = x(t, "credentials", 7, void 0), m = x(t, "customfetch", 7, void 0), v = x(t, "debug", 7, !1), _ = x(t, "delay", 7, 0), w = x(t, "disableautofocus", 7, !1), F = x(t, "refetchonexpire", 7, !0), M = x(t, "disablerefetchonexpire", 23, () => !F()), U = x(t, "expire", 7, void 0), I = x(t, "floating", 7, void 0), ee = x(t, "floatinganchor", 7, void 0), $e = x(t, "floatingoffset", 7, void 0), X = x(t, "floatingpersist", 7, !1), j = x(t, "hidefooter", 7, !1), se = x(t, "hidelogo", 7, !1), He = x(t, "id", 7, void 0), Ht = x(t, "language", 7, void 0), Ge = x(t, "name", 7, "altcha"), We = x(t, "maxnumber", 7, 1e6), xt = x(t, "mockerror", 7, !1), Ne = x(t, "obfuscated", 7, void 0), ge = x(t, "overlay", 7, void 0), Ct = x(t, "overlaycontent", 7, void 0), Gt = x(t, "plugins", 7, void 0), Ye = x(t, "sentinel", 7, void 0), ye = x(t, "spamfilter", 7, !1), st = x(t, "strings", 7, void 0), de = x(t, "test", 7, !1), te = x(t, "verifyurl", 7, void 0), ut = x(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), kt = x(t, "workerurl", 7, void 0);
  const { altchaI18n: Go } = globalThis, Wo = Go.store, zr = ["SHA-256", "SHA-384", "SHA-512"], Yo = "https://altcha.org/", Le = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, Jr = document.documentElement.lang?.split("-")?.[0], br = /* @__PURE__ */ Lt(() => c() && new URL(c(), location.origin).host.endsWith(".altcha.org") && !!c()?.includes("apiKey=ckey_")), Wt = /* @__PURE__ */ Lt(() => f() ? fn(f()) : void 0), Zo = /* @__PURE__ */ Lt(() => st() ? fn(st()) : {}), L = /* @__PURE__ */ Lt(() => ({
    ...Qr(l()),
    ...i(Zo)
  })), Kr = /* @__PURE__ */ Lt(() => `${He() || Ge()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let Ze = /* @__PURE__ */ N(null), At = /* @__PURE__ */ N(!1), G = /* @__PURE__ */ N(null), k = /* @__PURE__ */ N(Me(y.UNVERIFIED)), V = /* @__PURE__ */ N(void 0), It = /* @__PURE__ */ N(null), Pe = /* @__PURE__ */ N(null), ue = /* @__PURE__ */ N(null), yr = /* @__PURE__ */ N(null), ct = /* @__PURE__ */ N(null), T = /* @__PURE__ */ N(null), Rt = /* @__PURE__ */ N(null), ze = /* @__PURE__ */ N(null), we = null, W = /* @__PURE__ */ N(null), Je = /* @__PURE__ */ N(!1), Oe = [], wr = /* @__PURE__ */ N(!1), Ee = /* @__PURE__ */ N(null);
  Dr(() => {
    li(i(ze));
  }), Dr(() => {
    si(i(k));
  }), Ga(() => {
    zo(), b(Rt, null), i(T) && (i(T).removeEventListener("submit", an), i(T).removeEventListener("reset", ln), i(T).removeEventListener("focusin", on), b(T, null)), we && (clearTimeout(we), we = null), document.removeEventListener("click", rn), document.removeEventListener("scroll", nn), window.removeEventListener("resize", cn);
  }), Mo(() => {
    A("mounted", "2.2.4"), A("workers", ut()), Qo(), A("plugins", Oe.length ? Oe.map((n) => n.constructor.pluginName).join(", ") : "none"), de() && A("using test mode"), U() && xr(U()), a() !== void 0 && A("auto", a()), I() !== void 0 && gn(I()), b(T, i(V)?.closest("form"), !0), i(T) && (i(T).addEventListener("submit", an, { capture: !0 }), i(T).addEventListener("reset", ln), (a() === "onfocus" || X() === "focus") && i(T).addEventListener("focusin", on)), ge() && pn(!0), a() === "onload" && (Ne() ? $t() : Se()), i(br) && (j() || se()) && A("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Le("load");
    });
  });
  function Yt(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: de() ? !0 : void 0,
      took: u.took
    }));
  }
  function zo() {
    for (const n of Oe)
      n.destroy();
  }
  function Xr() {
    c() && !M() && i(k) === y.VERIFIED ? Se() : Ke(y.EXPIRED, i(L).expired);
  }
  async function Jo() {
    if (xt())
      throw A("mocking error"), new Error("Mocked error.");
    if (i(Wt))
      return A("using provided json data"), dn(i(Wt).salt), i(Wt);
    if (de())
      return A("generating test challenge", { test: de() }), tl(typeof de() != "boolean" ? +de() : void 0);
    {
      if (!c() && i(T)) {
        const g = i(T).getAttribute("action");
        g?.includes("/form/") && c(g + "/altcha");
      }
      if (!c())
        throw new Error("Attribute challengeurl not set.");
      A("fetching challenge from", c());
      const n = {
        credentials: typeof d() == "boolean" ? "include" : d(),
        headers: ye() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, u = await Er()(c(), n);
      if (!u || !(u instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (u.status !== 200)
        throw new Error(`Server responded with ${u.status}.`);
      const h = u.headers.get("X-Altcha-Config"), p = await u.json();
      if (dn(p.salt), h)
        try {
          const g = JSON.parse(h);
          g && typeof g == "object" && (g.verifyurl && !g.verifyurl.startsWith("fn:") && (g.verifyurl = tn(g.verifyurl)), bn(g));
        } catch (g) {
          A("unable to configure from X-Altcha-Config", g);
        }
      return p;
    }
  }
  function Ko(n) {
    const u = i(T)?.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return u?.value?.slice(u.value.indexOf("@")) || void 0;
  }
  function Er() {
    let n = fetch;
    if (m())
      if (A("using customfetch"), typeof m() == "string") {
        if (n = globalThis[m()] || null, !n)
          throw new Error(`Custom fetch function not found: ${m()}`);
      } else
        n = m();
    return n;
  }
  function Qr(n, u = [
    Ht() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const h = Object.keys(n).map((g) => g.toLowerCase()), p = u.reduce(
      (g, C) => (C = C.toLowerCase(), g || (n[C] ? C : null) || h.find((D) => C.split("-")[0] === D.split("-")[0]) || null),
      null
    );
    return n[p || "en"];
  }
  function Xo() {
    return ye() === "ipAddress" ? {
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
    } : typeof ye() == "object" ? ye() : {
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
  function en(n) {
    return [
      ...i(T)?.querySelectorAll(n?.length ? n.map((h) => `input[name="${h}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])') || []
    ].reduce(
      (h, p) => {
        const g = p.name, C = p.value;
        return g && C && (h[g] = /\n/.test(C) ? C.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : C), h;
      },
      {}
    );
  }
  function tn(n, u) {
    const h = new URL(c() || location.origin), p = new URL(n, h);
    if (p.search || (p.search = h.search), u)
      for (const g in u)
        u[g] !== void 0 && u[g] !== null && p.searchParams.set(g, u[g]);
    return p.toString();
  }
  function Qo() {
    const n = Gt() !== void 0 ? Gt().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && Oe.push(new u({
        el: i(V),
        clarify: $t,
        dispatch: Le,
        getConfiguration: yn,
        getFloatingAnchor: wn,
        getState: En,
        log: A,
        reset: Ke,
        solve: _n,
        setState: xe,
        setFloatingAnchor: xn,
        verify: Se
      }));
  }
  function A(...n) {
    (v() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${Ge()}]`, ...n);
  }
  function ei() {
    b(W, Q.PAUSED, !0);
  }
  function ti(n) {
    b(W, Q.ERROR, !0);
  }
  function ri() {
    b(W, Q.READY, !0);
  }
  function ni() {
    b(W, Q.LOADING, !0);
  }
  function oi() {
    b(W, Q.PLAYING, !0);
  }
  function ii() {
    b(W, Q.PAUSED, !0);
  }
  function ai(n) {
    if (n.preventDefault(), n.stopPropagation(), i(G)) {
      const u = new FormData(n.target), h = String(u.get("code"));
      if (te()?.startsWith("fn:")) {
        const p = te().replace(/^fn:/, "");
        if (A(`calling ${p} function instead of verifyurl`), !(p in globalThis))
          throw new Error(`Global function "${p}" is undefined.`);
        return globalThis[p]({
          challenge: i(G).challenge,
          code: h,
          solution: i(G).solution
        });
      }
      b(Je, !0), hn(Yt(i(G).challenge, i(G).solution), h).then(({ reason: p, verified: g }) => {
        g ? (b(G, null), xe(y.VERIFIED), A("verified"), Rr().then(() => {
          i(yr)?.focus(), Le("verified", { payload: i(Ee) }), a() === "onsubmit" ? vn(i(Rt)) : ge() && St();
        })) : (Ke(), b(ze, p || "Verification failed", !0));
      }).catch((p) => {
        b(G, null), xe(y.ERROR, p), A("sentinel verification failed:", p);
      }).finally(() => {
        b(Je, !1);
      });
    }
  }
  function rn(n) {
    const u = n.target;
    I() && u && !i(V).contains(u) && (i(k) === y.VERIFIED && X() === !1 || i(k) === y.VERIFIED && X() === "focus" && !i(T)?.matches(":focus-within") || a() === "off" && i(k) === y.UNVERIFIED) && St();
  }
  function nn() {
    I() && i(k) !== y.UNVERIFIED && Tt();
  }
  function li(n) {
    for (const u of Oe)
      typeof u.onErrorChange == "function" && u.onErrorChange(i(ze));
  }
  function on(n) {
    i(k) === y.UNVERIFIED ? Se() : I() && X() === "focus" && i(k) === y.VERIFIED && Zt();
  }
  function an(n) {
    n.target?.hasAttribute("data-code-challenge-form") || (b(Rt, n.submitter, !0), i(T) && a() === "onsubmit" ? (i(Rt)?.blur(), i(k) === y.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Se().then(() => {
      vn(i(Rt));
    })) : i(k) !== y.VERIFIED && (n.preventDefault(), n.stopPropagation(), i(k) === y.VERIFYING && sn())) : i(T) && I() && a() === "off" && i(k) === y.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), Zt()));
  }
  function ln() {
    Ke();
  }
  function sn() {
    i(k) === y.VERIFYING && i(L).waitAlert && alert(i(L).waitAlert);
  }
  function un() {
    i(Pe) ? i(Pe).paused ? (i(Pe).currentTime = 0, i(Pe).play()) : i(Pe).pause() : (b(wr, !0), requestAnimationFrame(() => {
      i(Pe)?.play();
    }));
  }
  function si(n) {
    for (const u of Oe)
      typeof u.onStateChange == "function" && u.onStateChange(i(k));
    I() && i(k) !== y.UNVERIFIED && requestAnimationFrame(() => {
      Tt();
    }), b(At, i(k) === y.VERIFIED), ge() && i(ue) && (i(k) !== y.UNVERIFIED ? Zt() : St());
  }
  function cn() {
    I() && Tt();
  }
  function fn(n) {
    return JSON.parse(n);
  }
  function dn(n) {
    const u = new URLSearchParams(n.split("?")?.[1]), h = u.get("expires") || u.get("expire");
    if (h) {
      const p = new Date(+h * 1e3), g = isNaN(p.getTime()) ? 0 : p.getTime() - Date.now();
      g > 0 && xr(g);
    } else we && (clearTimeout(we), we = null);
  }
  async function ui(n) {
    if (!te())
      throw new Error("Attribute verifyurl not set.");
    A("requesting server verification from", te());
    const u = { payload: n };
    if (ye() !== !1) {
      const {
        blockedCountries: g,
        classifier: C,
        disableRules: D,
        email: H,
        expectedLanguages: q,
        expectedCountries: oe,
        fields: ie,
        ipAddress: Qe,
        text: dt,
        timeZone: et
      } = Xo();
      u.blockedCountries = g, u.classifier = C, u.disableRules = D, u.email = H === !1 ? void 0 : Ko(H), u.expectedCountries = oe, u.expectedLanguages = q || (Jr ? [Jr] : void 0), u.fields = ie === !1 ? void 0 : en(ie), u.ipAddress = Qe === !1 ? void 0 : Qe || "auto", u.text = dt, u.timeZone = et === !1 ? void 0 : et || Wn();
    }
    const h = await Er()(te(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!h || !(h instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (h.status !== 200)
      throw new Error(`Server responded with ${h.status}.`);
    const p = await h.json();
    if (p?.payload && b(Ee, p.payload, !0), Le("serververification", p), s() && p.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function hn(n, u) {
    if (!te())
      throw new Error("Attribute verifyurl not set.");
    A("requesting sentinel verification from", te());
    const h = { code: u, payload: n };
    Ye() && (h.fields = Ye().fields ? en() : void 0, h.timeZone = Ye().timeZone ? Wn() : void 0);
    const p = await Er()(te(), {
      body: JSON.stringify(h),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!p || !(p instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (p.status !== 200)
      throw new Error(`Server responded with ${p.status}.`);
    const g = await p.json();
    return g?.payload && b(Ee, g.payload, !0), Le("sentinelverification", g), g;
  }
  function vn(n) {
    i(T) && "requestSubmit" in i(T) ? i(T).requestSubmit(n) : i(T)?.reportValidity() && (n ? n.click() : i(T).submit());
  }
  function xr(n) {
    A("expire", n), we && (clearTimeout(we), we = null), n < 1 ? Xr() : we = setTimeout(Xr, n);
  }
  function gn(n) {
    A("floating", n), I() !== n && (i(V).style.left = "", i(V).style.top = ""), I(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : I()), I() ? (a() || a("onsubmit"), document.addEventListener("scroll", nn), document.addEventListener("click", rn), window.addEventListener("resize", cn)) : a() === "onsubmit" && a(void 0);
  }
  function pn(n) {
    if (A("overlay", n), ge(n), n) {
      if (a() || a("onsubmit"), i(ue) && i(V).parentElement && i(ue).replaceWith(i(V).parentElement), i(V)?.parentElement?.parentElement) {
        b(ue, document.createElement("div"), !0), i(V).parentElement.parentElement.appendChild(i(ue));
        const u = document.createElement("div"), h = document.createElement("button");
        h.type = "button", h.innerHTML = "&times;", h.addEventListener("click", (p) => {
          p.preventDefault(), Ke();
        }), i(ue).classList.add("altcha-overlay-backdrop"), h.classList.add("altcha-overlay-close-button"), u.classList.add("altcha-overlay"), i(ue).append(u), u.append(h), Ct() && u.append(...document.querySelectorAll(Ct())), u.append(i(V).parentElement);
      }
    } else i(ue) && i(V).parentElement && (i(ue).replaceWith(i(V).parentElement), i(V).style.display = "block");
  }
  function mn(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!zr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${zr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function _n(n) {
    let u = null, h = null;
    if ("Worker" in window) {
      try {
        u = ci(n, n.maxNumber || n.maxnumber || We()), b(Ze, u.controller, !0), h = await u.promise;
      } catch (p) {
        A(p);
      } finally {
        b(Ze, null);
      }
      if (h === null || h?.number !== void 0 || "obfuscated" in n)
        return { data: n, solution: h };
    }
    if ("obfuscated" in n) {
      const p = await il(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await p.promise };
    }
    u = rl(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || We()), b(Ze, u.controller, !0);
    try {
      h = await u.promise;
    } catch (p) {
      A(p);
    } finally {
      b(Ze, null);
    }
    return { data: n, solution: h };
  }
  function ci(n, u = typeof de() == "number" ? de() : n.maxNumber || n.maxnumber || We(), h = Math.ceil(ut())) {
    const p = new AbortController(), g = [];
    h = Math.min(16, u, Math.max(1, h));
    for (let H = 0; H < h; H++)
      g.push(altchaCreateWorker(kt()));
    const C = Math.ceil(u / h);
    return { promise: (async () => {
      const H = await Promise.all(g.map((q, oe) => {
        const ie = oe * C;
        return p.signal.addEventListener("abort", () => {
          q.postMessage({ type: "abort" });
        }), new Promise((Qe) => {
          q.addEventListener("message", (dt) => {
            if (dt.data)
              for (const et of g)
                et !== q && et.postMessage({ type: "abort" });
            Qe(dt.data);
          }), q.postMessage({
            payload: n,
            max: ie + C,
            start: ie,
            type: "work"
          });
        });
      }));
      for (const q of g)
        q.terminate();
      return H.find((q) => !!q) || null;
    })(), controller: p };
  }
  async function $t() {
    if (!Ne()) {
      xe(y.ERROR);
      return;
    }
    const n = Oe.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      xe(y.ERROR), A("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function bn(n) {
    n.obfuscated !== void 0 && Ne(n.obfuscated), n.auto !== void 0 && (a(n.auto), a() === "onload" && (Ne() ? $t() : Se())), n.blockspam !== void 0 && s(!!n.blockspam), n.customfetch !== void 0 && m(n.customfetch), n.floatinganchor !== void 0 && ee(n.floatinganchor), n.delay !== void 0 && _(n.delay), n.floatingoffset !== void 0 && $e(n.floatingoffset), n.floating !== void 0 && gn(n.floating), n.expire !== void 0 && (xr(n.expire), U(n.expire)), n.challenge && (f(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), mn(i(Wt))), n.challengeurl !== void 0 && c(n.challengeurl), n.debug !== void 0 && v(!!n.debug), n.hidefooter !== void 0 && j(!!n.hidefooter), n.hidelogo !== void 0 && se(!!n.hidelogo), n.language !== void 0 && st(Qr(l(), [n.language])), n.maxnumber !== void 0 && We(+n.maxnumber), n.mockerror !== void 0 && xt(!!n.mockerror), n.name !== void 0 && Ge(n.name), n.overlaycontent !== void 0 && Ct(n.overlaycontent), n.overlay !== void 0 && pn(n.overlay), n.refetchonexpire !== void 0 && M(!n.refetchonexpire), n.disablerefetchonexpire !== void 0 && M(!n.disablerefetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Ye(n.sentinel), n.spamfilter !== void 0 && ye(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && st(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && de(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && te(n.verifyurl), n.workers !== void 0 && ut(+n.workers), n.workerurl !== void 0 && kt(n.workerurl);
  }
  function yn() {
    return {
      auto: a(),
      blockspam: s(),
      challengeurl: c(),
      debug: v(),
      delay: _(),
      disableautofocus: w(),
      disablerefetchonexpire: M(),
      expire: U(),
      floating: I(),
      floatinganchor: ee(),
      floatingoffset: $e(),
      hidefooter: j(),
      hidelogo: se(),
      name: Ge(),
      maxnumber: We(),
      mockerror: xt(),
      obfuscated: Ne(),
      overlay: ge(),
      refetchonexpire: !M(),
      spamfilter: ye(),
      strings: i(L),
      test: de(),
      verifyurl: te(),
      workers: ut(),
      workerurl: kt()
    };
  }
  function wn() {
    return i(ct);
  }
  function fi(n) {
    return Oe.find((u) => u.constructor.pluginName === n);
  }
  function En() {
    return i(k);
  }
  function St() {
    i(V).style.display = "none", ge() && i(ue) && (i(ue).style.display = "none");
  }
  function Tt(n = 20) {
    if (i(V))
      if (i(ct) || b(ct, (ee() ? document.querySelector(ee()) : i(T)?.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || i(T), !0), i(ct)) {
        const u = parseInt($e(), 10) || 12, h = i(ct).getBoundingClientRect(), p = i(V).getBoundingClientRect(), g = document.documentElement.clientHeight, C = document.documentElement.clientWidth, D = I() === "auto" ? h.bottom + p.height + u + n > g : I() === "top", H = Math.max(n, Math.min(C - n - p.width, h.left + h.width / 2 - p.width / 2));
        if (D ? i(V).style.top = `${h.top - (p.height + u)}px` : i(V).style.top = `${h.bottom + u}px`, i(V).style.left = `${H}px`, i(V).setAttribute("data-floating", D ? "top" : "bottom"), i(It)) {
          const q = i(It).getBoundingClientRect();
          i(It).style.left = h.left - H + h.width / 2 - q.width / 2 + "px";
        }
      } else
        A("unable to find floating anchor element");
  }
  function Ke(n = y.UNVERIFIED, u = null) {
    i(Ze) && (i(Ze).abort(), b(Ze, null)), b(At, !1), b(Ee, null), b(G, null), b(wr, !1), b(W, null), xe(n, u);
  }
  function xn(n) {
    b(ct, n, !0);
  }
  function xe(n, u = null) {
    b(k, n, !0), b(ze, u, !0), Le("statechange", {
      payload: i(Ee),
      state: i(k)
    });
  }
  function Zt() {
    i(V).style.display = "block", I() && Tt(), ge() && i(ue) && (i(ue).style.display = "flex");
  }
  async function Se() {
    return Ke(y.VERIFYING), await new Promise((n) => setTimeout(n, _() || 0)), Jo().then((n) => (mn(n), A("challenge", n), _n(n))).then(({ data: n, solution: u }) => {
      if (A("solution", u), !u || n && "challenge" in n && !("clearText" in u)) {
        if (u?.number !== void 0 && "challenge" in n)
          if (te() && "codeChallenge" in n)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(document.activeElement?.tagName || "") && w() === !1 && document.activeElement.blur(), b(G, { challenge: n, solution: u }, !0);
          else {
            if (te() && Ye() !== void 0)
              return hn(Yt(n, u));
            if (te())
              return ui(Yt(n, u));
            b(Ee, Yt(n, u), !0), A("payload", i(Ee));
          }
        else if (i(k) !== y.EXPIRED)
          throw A("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
      }
    }).then(() => {
      i(G) ? (xe(y.CODE), Rr().then(() => {
        Le("code", { codeChallenge: i(G) });
      })) : i(Ee) && (xe(y.VERIFIED), A("verified"), Rr().then(() => {
        Le("verified", { payload: i(Ee) }), ge() && St();
      }));
    }).catch((n) => {
      A(n), xe(y.ERROR, n.message);
    });
  }
  var Cn = Cl(), kn = Nt(Cn);
  Fa(kn, t, "default", {});
  var ft = J(kn, 2), Cr = z(ft), zt = z(Cr);
  let An;
  var In = z(zt);
  {
    var di = (n) => {
      $r(n);
    };
    K(In, (n) => {
      i(k) === y.VERIFYING && n(di);
    });
  }
  var Xe = J(In, 2);
  qn(Xe), Xe.__change = [
    ul,
    k,
    ye,
    T,
    At,
    Ne,
    $t,
    Se
  ], Qt(Xe, (n) => b(yr, n), () => i(yr)), Z(zt);
  var Jt = J(zt, 2), hi = z(Jt);
  {
    var vi = (n) => {
      var u = Xt(), h = Nt(u);
      tt(h, () => i(L).verified), B(n, u);
    }, gi = (n, u) => {
      {
        var h = (g) => {
          var C = Xt(), D = Nt(C);
          tt(D, () => i(L).verifying), B(g, C);
        }, p = (g, C) => {
          {
            var D = (q) => {
              var oe = Xt(), ie = Nt(oe);
              tt(ie, () => i(L).verificationRequired), B(q, oe);
            }, H = (q) => {
              var oe = Xt(), ie = Nt(oe);
              tt(ie, () => i(L).label), B(q, oe);
            };
            K(
              g,
              (q) => {
                i(k) === y.CODE ? q(D) : q(H, !1);
              },
              C
            );
          }
        };
        K(
          n,
          (g) => {
            i(k) === y.VERIFYING ? g(h) : g(p, !1);
          },
          u
        );
      }
    };
    K(hi, (n) => {
      i(k) === y.VERIFIED ? n(vi) : n(gi, !1);
    });
  }
  Z(Jt);
  var Rn = J(Jt, 2);
  {
    var pi = (n) => {
      var u = fl();
      qn(u), Ce(() => {
        R(u, "name", Ge()), qa(u, i(Ee));
      }), B(n, u);
    };
    K(Rn, (n) => {
      i(k) === y.VERIFIED && n(pi);
    });
  }
  var $n = J(Rn, 2);
  {
    var mi = (n) => {
      var u = dl(), h = z(u);
      R(h, "href", Yo), Z(u), Ce(() => R(h, "aria-label", i(L).ariaLinkLabel)), B(n, u);
    };
    K($n, (n) => {
      (se() !== !0 || i(br)) && n(mi);
    });
  }
  var _i = J($n, 2);
  {
    var bi = (n) => {
      var u = _l(), h = J(z(u), 2), p = z(h), g = J(p, 2);
      Sa(g, !w()), g.__keydown = [
        ll,
        un
      ];
      var C = J(g, 2), D = z(C), H = z(D);
      {
        var q = (pe) => {
          var Y = pl();
          Y.__click = un;
          var Kt = z(Y);
          {
            var Dt = (ht) => {
              $r(ht, () => 20);
            }, Ii = (ht, Ri) => {
              {
                var $i = (vt) => {
                  var kr = hl();
                  B(vt, kr);
                }, Si = (vt, kr) => {
                  {
                    var Ti = (gt) => {
                      var Ar = vl();
                      B(gt, Ar);
                    }, Di = (gt) => {
                      var Ar = gl();
                      B(gt, Ar);
                    };
                    K(
                      vt,
                      (gt) => {
                        i(W) === Q.PLAYING ? gt(Ti) : gt(Di, !1);
                      },
                      kr
                    );
                  }
                };
                K(
                  ht,
                  (vt) => {
                    i(W) === Q.ERROR ? vt($i) : vt(Si, !1);
                  },
                  Ri
                );
              }
            };
            K(Kt, (ht) => {
              i(W) === Q.LOADING ? ht(Dt) : ht(Ii, !1);
            });
          }
          Z(Y), Ce(() => {
            R(Y, "title", i(L).getAudioChallenge), Y.disabled = i(W) === Q.LOADING || i(W) === Q.ERROR || i(Je), R(Y, "aria-label", i(W) === Q.LOADING ? i(L).loading : i(L).getAudioChallenge);
          }), B(pe, Y);
        };
        K(H, (pe) => {
          i(G).challenge.codeChallenge.audio && pe(q);
        });
      }
      var oe = J(H, 2);
      oe.__click = [sl, Se], Z(D);
      var ie = J(D, 2), Qe = z(ie);
      {
        var dt = (pe) => {
          $r(pe, () => 16);
        };
        K(Qe, (pe) => {
          i(Je) && pe(dt);
        });
      }
      var et = J(Qe);
      Z(ie), Z(C);
      var ki = J(C, 2);
      {
        var Ai = (pe) => {
          var Y = ml(), Kt = z(Y);
          Z(Y), Qt(Y, (Dt) => b(Pe, Dt), () => i(Pe)), Ce((Dt) => R(Kt, "src", Dt), [
            () => tn(i(G).challenge.codeChallenge.audio, { language: Ht() })
          ]), Fe("loadstart", Y, ni), Fe("canplay", Y, ri), Fe("pause", Y, ii), Fe("playing", Y, oi), Fe("ended", Y, ei), Fe("error", Kt, ti), B(pe, Y);
        };
        K(ki, (pe) => {
          i(G).challenge.codeChallenge.audio && i(wr) && pe(Ai);
        });
      }
      Z(h), Z(u), Ce(() => {
        R(u, "aria-label", i(L).verificationRequired), R(p, "src", i(G).challenge.codeChallenge.image), R(g, "minlength", i(G).challenge.codeChallenge.length || 1), R(g, "maxlength", i(G).challenge.codeChallenge.length), R(g, "placeholder", i(L).enterCode), R(g, "aria-label", i(W) === Q.LOADING ? i(L).loading : i(W) === Q.PLAYING ? "" : i(L).enterCodeAria), R(g, "aria-live", i(W) ? "assertive" : "polite"), R(g, "aria-busy", i(W) === Q.LOADING), g.disabled = i(Je), R(oe, "aria-label", i(L).reload), R(oe, "title", i(L).reload), oe.disabled = i(Je), ie.disabled = i(Je), R(ie, "aria-label", i(L).verify), La(et, ` ${i(L).verify ?? ""}`);
      }), Fe("submit", h, ai, !0), B(n, u);
    };
    K(_i, (n) => {
      i(G)?.challenge.codeChallenge && n(bi);
    });
  }
  Z(Cr);
  var Sn = J(Cr, 2);
  {
    var yi = (n) => {
      var u = wl(), h = J(z(u), 2);
      {
        var p = (C) => {
          var D = bl(), H = z(D);
          tt(H, () => i(L).expired), Z(D), Ce(() => R(D, "title", i(ze))), B(C, D);
        }, g = (C) => {
          var D = yl(), H = z(D);
          tt(H, () => i(L).error), Z(D), Ce(() => R(D, "title", i(ze))), B(C, D);
        };
        K(h, (C) => {
          i(k) === y.EXPIRED ? C(p) : C(g, !1);
        });
      }
      Z(u), B(n, u);
    };
    K(Sn, (n) => {
      (i(ze) || i(k) === y.EXPIRED) && n(yi);
    });
  }
  var Tn = J(Sn, 2);
  {
    var wi = (n) => {
      var u = El(), h = z(u), p = z(h);
      tt(p, () => i(L).footer), Z(h), Z(u), B(n, u);
    };
    K(Tn, (n) => {
      i(L).footer && (j() !== !0 || i(br)) && n(wi);
    });
  }
  var Ei = J(Tn, 2);
  {
    var xi = (n) => {
      var u = xl();
      Qt(u, (h) => b(It, h), () => i(It)), B(n, u);
    };
    K(Ei, (n) => {
      I() && n(xi);
    });
  }
  Z(ft), Qt(ft, (n) => b(V, n), () => i(V)), Ce(
    (n) => {
      R(ft, "data-state", i(k)), R(ft, "data-floating", I()), R(ft, "data-overlay", ge()), An = Va(zt, 1, "altcha-checkbox", null, An, n), R(Xe, "id", i(Kr)), Xe.required = a() !== "onsubmit" && (!I() || a() !== "off"), R(Jt, "for", i(Kr));
    },
    [
      () => ({
        "altcha-checkbox-verifying": i(k) === y.VERIFYING
      })
    ]
  ), Fe("invalid", Xe, sn), Ha(Xe, () => i(At), (n) => b(At, n)), B(e, Cn);
  var Ci = So({
    clarify: $t,
    configure: bn,
    getConfiguration: yn,
    getFloatingAnchor: wn,
    getPlugin: fi,
    getState: En,
    hide: St,
    repositionFloating: Tt,
    reset: Ke,
    setFloatingAnchor: xn,
    setState: xe,
    show: Zt,
    verify: Se,
    get auto() {
      return a();
    },
    set auto(n = void 0) {
      a(n), E();
    },
    get blockspam() {
      return s();
    },
    set blockspam(n = void 0) {
      s(n), E();
    },
    get challengeurl() {
      return c();
    },
    set challengeurl(n = void 0) {
      c(n), E();
    },
    get challengejson() {
      return f();
    },
    set challengejson(n = void 0) {
      f(n), E();
    },
    get credentials() {
      return d();
    },
    set credentials(n = void 0) {
      d(n), E();
    },
    get customfetch() {
      return m();
    },
    set customfetch(n = void 0) {
      m(n), E();
    },
    get debug() {
      return v();
    },
    set debug(n = !1) {
      v(n), E();
    },
    get delay() {
      return _();
    },
    set delay(n = 0) {
      _(n), E();
    },
    get disableautofocus() {
      return w();
    },
    set disableautofocus(n = !1) {
      w(n), E();
    },
    get refetchonexpire() {
      return F();
    },
    set refetchonexpire(n = !0) {
      F(n), E();
    },
    get disablerefetchonexpire() {
      return M();
    },
    set disablerefetchonexpire(n = !F) {
      M(n), E();
    },
    get expire() {
      return U();
    },
    set expire(n = void 0) {
      U(n), E();
    },
    get floating() {
      return I();
    },
    set floating(n = void 0) {
      I(n), E();
    },
    get floatinganchor() {
      return ee();
    },
    set floatinganchor(n = void 0) {
      ee(n), E();
    },
    get floatingoffset() {
      return $e();
    },
    set floatingoffset(n = void 0) {
      $e(n), E();
    },
    get floatingpersist() {
      return X();
    },
    set floatingpersist(n = !1) {
      X(n), E();
    },
    get hidefooter() {
      return j();
    },
    set hidefooter(n = !1) {
      j(n), E();
    },
    get hidelogo() {
      return se();
    },
    set hidelogo(n = !1) {
      se(n), E();
    },
    get id() {
      return He();
    },
    set id(n = void 0) {
      He(n), E();
    },
    get language() {
      return Ht();
    },
    set language(n = void 0) {
      Ht(n), E();
    },
    get name() {
      return Ge();
    },
    set name(n = "altcha") {
      Ge(n), E();
    },
    get maxnumber() {
      return We();
    },
    set maxnumber(n = 1e6) {
      We(n), E();
    },
    get mockerror() {
      return xt();
    },
    set mockerror(n = !1) {
      xt(n), E();
    },
    get obfuscated() {
      return Ne();
    },
    set obfuscated(n = void 0) {
      Ne(n), E();
    },
    get overlay() {
      return ge();
    },
    set overlay(n = void 0) {
      ge(n), E();
    },
    get overlaycontent() {
      return Ct();
    },
    set overlaycontent(n = void 0) {
      Ct(n), E();
    },
    get plugins() {
      return Gt();
    },
    set plugins(n = void 0) {
      Gt(n), E();
    },
    get sentinel() {
      return Ye();
    },
    set sentinel(n = void 0) {
      Ye(n), E();
    },
    get spamfilter() {
      return ye();
    },
    set spamfilter(n = !1) {
      ye(n), E();
    },
    get strings() {
      return st();
    },
    set strings(n = void 0) {
      st(n), E();
    },
    get test() {
      return de();
    },
    set test(n = !1) {
      de(n), E();
    },
    get verifyurl() {
      return te();
    },
    set verifyurl(n = void 0) {
      te(n), E();
    },
    get workers() {
      return ut();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      ut(n), E();
    },
    get workerurl() {
      return kt();
    },
    set workerurl(n = void 0) {
      kt(n), E();
    }
  });
  return o(), Ci;
}
Na(["change", "keydown", "click"]);
customElements.define("altcha-widget", Qa(
  kl,
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
const Bo = '@keyframes overlay-slidein{to{opacity:1;top:50%}}@keyframes altcha-spinner{to{transform:rotate(360deg)}}.altcha{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative}.altcha:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top] .altcha-anchor-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom]:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top]:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]:not([data-state=unverified]){display:block}.altcha-anchor-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main{align-items:center;display:flex;gap:.4rem;padding:.7rem;position:relative}.altcha-code-challenge{background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));padding:.5rem;position:absolute;top:2.5rem;z-index:9999999}.altcha-code-challenge>form{display:flex;flex-direction:column;gap:.5rem}.altcha-code-challenge-input{border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:0;font-size:16px;padding:.35rem;width:220px}.altcha-code-challenge-input:focus{outline:2px solid color-mix(in srgb,var(--altcha-color-active, #1D1DC9) 20%,transparent)}.altcha-code-challenge-input:disabled{opacity:.7}.altcha-code-challenge-image{background-color:#fff;border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px}.altcha-code-challenge-audio,.altcha-code-challenge-reload{background:color-mix(in srgb,var(--altcha-color-text, currentColor) 10%,transparent);border:0;border-radius:3px;color:var(--altcha-color-text, currentColor);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:.35rem}.altcha-code-challenge-audio:disabled,.altcha-code-challenge-reload:disabled,.altcha-code-challenge-verify:disabled{opacity:.7;pointer-events:none}.altcha-code-challenge-audio>*,.altcha-code-challenge-reload>*{height:20px;width:20px}.altcha-code-challenge-buttons{display:flex;justify-content:space-between}.altcha-code-challenge-buttons-left{display:flex;gap:.25rem}.altcha-code-challenge-verify{align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:#fff;cursor:pointer;display:flex;gap:.5rem;font-size:100%;padding:.35rem 1rem}.altcha-code-challenge-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:.15rem;position:absolute;top:-12px;width:0}.altcha[data-floating=top] .altcha-code-challenge{top:-150px}.altcha[data-floating=top] .altcha-code-challenge-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto}.altcha-label{cursor:pointer;flex-grow:1}.altcha-logo{color:currentColor!important;opacity:.7}.altcha-footer:hover,.altcha-logo:hover{opacity:1}.altcha-error{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:.85rem;gap:.3rem;padding:0 .7rem .7rem}.altcha-footer{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:.75rem;opacity:.7;justify-content:end;padding:.2rem .7rem}.altcha-footer a{color:currentColor}.altcha-checkbox{display:flex;align-items:center;justify-content:center;height:24px;position:relative;width:24px}.altcha-checkbox .altcha-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.altcha-checkbox input{width:18px;height:18px;margin:0}.altcha-checkbox-verifying input{appearance:none;opacity:0;pointer-events:none}.altcha-spinner{animation:altcha-spinner .75s infinite linear;transform-origin:center}.altcha-overlay{--altcha-color-base:#fff;--altcha-color-text:#000;animation:overlay-slidein .5s forwards;display:flex;flex-direction:column;gap:.5rem;left:50%;width:260px;opacity:0;position:fixed;top:45%;transform:translate(-50%,-50%)}.altcha-overlay-backdrop{background:rgba(0,0,0,.5);bottom:0;display:none;left:0;position:fixed;right:0;top:0;z-index:99999999}.altcha-overlay-close-button{align-self:flex-end;background:0 0;border:0;padding:.25rem;cursor:pointer;color:currentColor;font-size:130%;line-height:1;opacity:.7}@media (max-height:450px){.altcha-overlay{top:10%!important;transform:translate(-50%,0)}}';
function Ho(e, t = "__altcha-css") {
  if (!document.getElementById(t)) {
    const r = document.createElement("style");
    r.id = t, r.textContent = e, document.head.appendChild(r);
  }
}
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new Ni();
Ho(Bo);
Ho(Bo);
export {
  kl as Altcha
};
