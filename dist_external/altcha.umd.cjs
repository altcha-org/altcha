(function(w,E){typeof exports=="object"&&typeof module<"u"?E(exports):typeof define=="function"&&define.amd?define(["exports"],E):(w=typeof globalThis<"u"?globalThis:w||self,E(w.altcha={}))})(this,function(w){"use strict";var Bn=Object.defineProperty;var Vt=w=>{throw TypeError(w)};var Hn=(w,E,F)=>E in w?Bn(w,E,{enumerable:!0,configurable:!0,writable:!0,value:F}):w[E]=F;var q=(w,E,F)=>Hn(w,typeof E!="symbol"?E+"":E,F),Pt=(w,E,F)=>E.has(w)||Vt("Cannot "+F);var X=(w,E,F)=>(Pt(w,E,"read from private field"),F?F.call(w):E.get(w)),de=(w,E,F)=>E.has(w)?Vt("Cannot add the same private member more than once"):E instanceof WeakSet?E.add(w):E.set(w,F),Ot=(w,E,F,Se)=>(Pt(w,E,"write to private field"),Se?Se.call(w,F):E.set(w,F),F);var ye,_e,pe,ke,Ce,Ae;var E=typeof document<"u"?document.currentScript:null;function F(){}function Se(n,e){for(const t in e)n[t]=e[t];return n}function Je(n){return n()}function Xe(){return Object.create(null)}function we(n){n.forEach(Je)}function We(n){return typeof n=="function"}function Bt(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Ht(n){return Object.keys(n).length===0}function qt(n,e,t,r){if(n){const o=ze(n,e,t,r);return n[0](o)}}function ze(n,e,t,r){return n[1]&&r?Se(t.ctx.slice(),n[1](r(e))):t.ctx}function Zt(n,e,t,r){if(n[2]&&r){const o=n[2](r(t));if(e.dirty===void 0)return o;if(typeof o=="object"){const s=[],l=Math.max(e.dirty.length,o.length);for(let c=0;c<l;c+=1)s[c]=e.dirty[c]|o[c];return s}return e.dirty|o}return e.dirty}function Gt(n,e,t,r,o,s){if(o){const l=ze(e,t,r,s);n.p(l,o)}}function Yt(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function T(n,e){n.appendChild(e)}function V(n,e,t){n.insertBefore(e,t||null)}function D(n){n.parentNode&&n.parentNode.removeChild(n)}function M(n){return document.createElement(n)}function ne(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Ke(n){return document.createTextNode(n)}function Q(){return Ke(" ")}function Jt(){return Ke("")}function Pe(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function a(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Xt(n){return Array.from(n.childNodes)}function Qe(n,e,t){n.classList.toggle(e,!!t)}function Wt(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}function zt(n){const e={};return n.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}let Ee;function ve(n){Ee=n}function Oe(){if(!Ee)throw new Error("Function called outside component initialization");return Ee}function Kt(n){Oe().$$.on_mount.push(n)}function Qt(n){Oe().$$.on_destroy.push(n)}function $t(){const n=Oe();return(e,t,{cancelable:r=!1}={})=>{const o=n.$$.callbacks[e];if(o){const s=Wt(e,t,{cancelable:r});return o.slice().forEach(l=>{l.call(n,s)}),!s.defaultPrevented}return!0}}const me=[],De=[];let ge=[];const $e=[],et=Promise.resolve();let Be=!1;function tt(){Be||(Be=!0,et.then(v))}function en(){return tt(),et}function He(n){ge.push(n)}const qe=new Set;let be=0;function v(){if(be!==0)return;const n=Ee;do{try{for(;be<me.length;){const e=me[be];be++,ve(e),tn(e.$$)}}catch(e){throw me.length=0,be=0,e}for(ve(null),me.length=0,be=0;De.length;)De.pop()();for(let e=0;e<ge.length;e+=1){const t=ge[e];qe.has(t)||(qe.add(t),t())}ge.length=0}while(me.length);for(;$e.length;)$e.pop()();Be=!1,qe.clear(),ve(n)}function tn(n){if(n.fragment!==null){n.update(),we(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(He)}}function nn(n){const e=[],t=[];ge.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),ge=e}const Me=new Set;let rn;function nt(n,e){n&&n.i&&(Me.delete(n),n.i(e))}function on(n,e,t,r){if(n&&n.o){if(Me.has(n))return;Me.add(n),rn.c.push(()=>{Me.delete(n)}),n.o(e)}}function sn(n,e,t){const{fragment:r,after_update:o}=n.$$;r&&r.m(e,t),He(()=>{const s=n.$$.on_mount.map(Je).filter(We);n.$$.on_destroy?n.$$.on_destroy.push(...s):we(s),n.$$.on_mount=[]}),o.forEach(He)}function ln(n,e){const t=n.$$;t.fragment!==null&&(nn(t.after_update),we(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function cn(n,e){n.$$.dirty[0]===-1&&(me.push(n),tt(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function fn(n,e,t,r,o,s,l=null,c=[-1]){const f=Ee;ve(n);const h=n.$$={fragment:null,ctx:[],props:s,update:F,not_equal:o,bound:Xe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:Xe(),dirty:c,skip_bound:!1,root:e.target||f.$$.root};l&&l(h.root);let _=!1;if(h.ctx=t?t(n,e.props||{},(I,ie,...C)=>{const z=C.length?C[0]:ie;return h.ctx&&o(h.ctx[I],h.ctx[I]=z)&&(!h.skip_bound&&h.bound[I]&&h.bound[I](z),_&&cn(n,I)),ie}):[],h.update(),_=!0,we(h.before_update),h.fragment=r?r(h.ctx):!1,e.target){if(e.hydrate){const I=Xt(e.target);h.fragment&&h.fragment.l(I),I.forEach(D)}else h.fragment&&h.fragment.c();e.intro&&nt(n.$$.fragment),sn(n,e.target,e.anchor),v()}ve(f)}let it;typeof HTMLElement=="function"&&(it=class extends HTMLElement{constructor(e,t,r){super();q(this,"$$ctor");q(this,"$$s");q(this,"$$c");q(this,"$$cn",!1);q(this,"$$d",{});q(this,"$$r",!1);q(this,"$$p_d",{});q(this,"$$l",{});q(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=t,r&&this.attachShadow({mode:"open"})}addEventListener(e,t,r){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const o=this.$$c.$on(e,t);this.$$l_u.set(t,o)}super.addEventListener(e,t,r)}removeEventListener(e,t,r){if(super.removeEventListener(e,t,r),this.$$c){const o=this.$$l_u.get(t);o&&(o(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(s){return()=>{let l;return{c:function(){l=M("slot"),s!=="default"&&a(l,"name",s)},m:function(h,_){V(h,l,_)},d:function(h){h&&D(l)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},r=zt(this);for(const s of this.$$s)s in r&&(t[s]=[e(s)]);for(const s of this.attributes){const l=this.$$g_p(s.name);l in this.$$d||(this.$$d[l]=Ne(l,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});const o=()=>{this.$$r=!0;for(const s in this.$$p_d)if(this.$$d[s]=this.$$c.$$.ctx[this.$$c.$$.props[s]],this.$$p_d[s].reflect){const l=Ne(s,this.$$d[s],this.$$p_d,"toAttribute");l==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,l)}this.$$r=!1};this.$$c.$$.after_update.push(o),o();for(const s in this.$$l)for(const l of this.$$l[s]){const c=this.$$c.$on(s,l);this.$$l_u.set(l,c)}this.$$l={}}}attributeChangedCallback(e,t,r){var o;this.$$r||(e=this.$$g_p(e),this.$$d[e]=Ne(e,r,this.$$p_d,"toProp"),(o=this.$$c)==null||o.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function Ne(n,e,t,r){var s;const o=(s=t[n])==null?void 0:s.type;if(e=o==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!t[n])return e;if(r==="toAttribute")switch(o){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function an(n,e,t,r,o,s){let l=class extends it{constructor(){super(n,t,o),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(c=>(e[c].attribute||c).toLowerCase())}};return Object.keys(e).forEach(c=>{Object.defineProperty(l.prototype,c,{get(){return this.$$c&&c in this.$$c?this.$$c[c]:this.$$d[c]},set(f){var h;f=Ne(c,f,e),this.$$d[c]=f,(h=this.$$c)==null||h.$set({[c]:f})}})}),r.forEach(c=>{Object.defineProperty(l.prototype,c,{get(){var f;return(f=this.$$c)==null?void 0:f[c]}})}),n.element=l,l}class un{constructor(){q(this,"$$");q(this,"$$set")}$destroy(){ln(this,1),this.$destroy=F}$on(e,t){if(!We(t))return F;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!Ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const hn="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(hn);const rt=new TextEncoder;function dn(n){return[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function mn(n,e="SHA-256",t=1e5){const r=Date.now().toString(16);n||(n=Math.round(Math.random()*t));const o=await ot(r,n,e);return{algorithm:e,challenge:o,salt:r,signature:""}}async function ot(n,e,t){return dn(await crypto.subtle.digest(t.toUpperCase(),rt.encode(n+e)))}function gn(n,e,t="SHA-256",r=1e6,o=0){const s=new AbortController,l=Date.now();return{promise:(async()=>{for(let f=o;f<=r;f+=1){if(s.signal.aborted)return null;if(await ot(e,f,t)===n)return{number:f,took:Date.now()-l}}return null})(),controller:s}}function st(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function bn(n){const e=atob(n),t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}function yn(n,e=12){const t=new Uint8Array(e);for(let r=0;r<e;r++)t[r]=n%256,n=Math.floor(n/256);return t}async function _n(n,e="",t=1e6,r=0){const o="AES-GCM",s=new AbortController,l=Date.now(),c=async()=>{for(let _=r;_<=t;_+=1){if(s.signal.aborted||!f||!h)return null;try{const I=await crypto.subtle.decrypt({name:o,iv:yn(_)},f,h);if(I)return{clearText:new TextDecoder().decode(I),took:Date.now()-l}}catch{}}return null};let f=null,h=null;try{h=bn(n);const _=await crypto.subtle.digest("SHA-256",rt.encode(e));f=await crypto.subtle.importKey("raw",_,o,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:s}}return{promise:c(),controller:s}}class wn{constructor(e){q(this,"beaconUrl",null);q(this,"error",null);q(this,"loadTime",Date.now());q(this,"submitTime",null);q(this,"startTime",null);q(this,"viewTimeThresholdMs",1500);de(this,ye,{});de(this,_e,null);de(this,pe,this.onFormChange.bind(this));de(this,ke,this.onFormFocus.bind(this));de(this,Ce,this.onFormSubmit.bind(this));de(this,Ae,this.onUnload.bind(this));this.elForm=e,window.addEventListener("unload",X(this,Ae)),this.elForm.addEventListener("change",X(this,pe)),this.elForm.addEventListener("focusin",X(this,ke)),this.elForm.addEventListener("submit",X(this,Ce))}data(){const e=Object.entries(X(this,ye));return{correction:e.length&&e.filter(([t,r])=>r>1).length/e.length||0,dropoff:!this.submitTime&&!this.error&&X(this,_e)?X(this,_e):null,error:this.error,mobile:this.isMobile(),start:this.startTime,submit:this.submitTime,tz:st()}}dataAsBase64(){try{return btoa(JSON.stringify(this.data()))}catch(e){console.error("failed to encode ALTCHA session data to base64",e)}return""}destroy(){window.removeEventListener("unload",X(this,Ae)),this.elForm.removeEventListener("change",X(this,pe)),this.elForm.removeEventListener("focusin",X(this,ke)),this.elForm.removeEventListener("submit",X(this,Ce))}end(){this.submitTime||(this.submitTime=Date.now())}getFieldName(e,t=40){const r=e.getAttribute("data-group-label"),o=e.getAttribute("name")||e.getAttribute("aria-label");return((r?r+": ":"")+o).slice(0,t)}isMobile(){const e="userAgentData"in navigator&&navigator.userAgentData?navigator.userAgentData:{};return"mobile"in e?e.mobile===!0:/Mobi/i.test(window.navigator.userAgent)}isInput(e){return["INPUT","SELECT","TEXTAREA"].includes(e.tagName)}onFormFieldChange(e){const t=this.getFieldName(e);t&&this.trackFieldChange(t)}onFormChange(e){const t=e.target;t&&this.isInput(t)&&this.onFormFieldChange(t)}onFormFocus(e){const t=e.target;if(this.startTime||this.start(),t&&this.isInput(t)){const r=this.getFieldName(t);r&&Ot(this,_e,r)}}onFormSubmit(){this.end()}onUnload(){this.loadTime<=Date.now()-this.viewTimeThresholdMs&&!this.submitTime&&this.sendBeacon()}async sendBeacon(){if(this.beaconUrl&&"sendBeacon"in navigator)try{navigator.sendBeacon(new URL(this.beaconUrl,location.origin),JSON.stringify(this.data()))}catch{}}start(){this.startTime=Date.now()}trackError(e){this.error=e===null?null:String(e)}trackFieldChange(e){X(this,ye)[e]=(X(this,ye)[e]||0)+1}}ye=new WeakMap,_e=new WeakMap,pe=new WeakMap,ke=new WeakMap,Ce=new WeakMap,Ae=new WeakMap;var b=(n=>(n.ERROR="error",n.VERIFIED="verified",n.VERIFYING="verifying",n.UNVERIFIED="unverified",n.EXPIRED="expired",n))(b||{});function lt(n){let e,t,r;return{c(){e=ne("svg"),t=ne("path"),r=ne("path"),a(t,"d","M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"),a(t,"fill","currentColor"),a(t,"opacity",".25"),a(r,"d","M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"),a(r,"fill","currentColor"),a(r,"class","altcha-spinner"),a(e,"width","24"),a(e,"height","24"),a(e,"viewBox","0 0 24 24"),a(e,"xmlns","http://www.w3.org/2000/svg")},m(o,s){V(o,e,s),T(e,t),T(e,r)},d(o){o&&D(e)}}}function En(n){let e,t=n[13].label+"",r;return{c(){e=M("label"),a(e,"for",r=n[4]+"_checkbox")},m(o,s){V(o,e,s),e.innerHTML=t},p(o,s){s[0]&8192&&t!==(t=o[13].label+"")&&(e.innerHTML=t),s[0]&16&&r!==(r=o[4]+"_checkbox")&&a(e,"for",r)},d(o){o&&D(e)}}}function vn(n){let e,t=n[13].verifying+"";return{c(){e=M("span")},m(r,o){V(r,e,o),e.innerHTML=t},p(r,o){o[0]&8192&&t!==(t=r[13].verifying+"")&&(e.innerHTML=t)},d(r){r&&D(e)}}}function pn(n){let e,t=n[13].verified+"",r,o,s,l,c=n[11]&&ct(n);return{c(){e=M("span"),r=Q(),o=M("input"),s=Q(),c&&c.c(),l=Jt(),a(o,"type","hidden"),a(o,"name",n[4]),o.value=n[6]},m(f,h){V(f,e,h),e.innerHTML=t,V(f,r,h),V(f,o,h),V(f,s,h),c&&c.m(f,h),V(f,l,h)},p(f,h){h[0]&8192&&t!==(t=f[13].verified+"")&&(e.innerHTML=t),h[0]&16&&a(o,"name",f[4]),h[0]&64&&(o.value=f[6]),f[11]?c?c.p(f,h):(c=ct(f),c.c(),c.m(l.parentNode,l)):c&&(c.d(1),c=null)},d(f){f&&(D(e),D(r),D(o),D(s),D(l)),c&&c.d(f)}}}function ct(n){let e;return{c(){e=M("input"),a(e,"type","hidden"),a(e,"name","__session"),e.value=n[12]},m(t,r){V(t,e,r)},p(t,r){r[0]&4096&&(e.value=t[12])},d(t){t&&D(e)}}}function ft(n){let e,t,r,o,s,l,c;return{c(){e=M("div"),t=M("a"),r=ne("svg"),o=ne("path"),s=ne("path"),l=ne("path"),a(o,"d","M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"),a(o,"fill","currentColor"),a(s,"d","M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"),a(s,"fill","currentColor"),a(l,"d","M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"),a(l,"fill","currentColor"),a(r,"width","22"),a(r,"height","22"),a(r,"viewBox","0 0 20 20"),a(r,"fill","none"),a(r,"xmlns","http://www.w3.org/2000/svg"),a(t,"href",mt),a(t,"target","_blank"),a(t,"class","altcha-logo"),a(t,"aria-label",c=n[13].ariaLinkLabel)},m(f,h){V(f,e,h),T(e,t),T(t,r),T(r,o),T(r,s),T(r,l)},p(f,h){h[0]&8192&&c!==(c=f[13].ariaLinkLabel)&&a(t,"aria-label",c)},d(f){f&&D(e)}}}function at(n){let e,t,r,o;function s(f,h){return f[7]===b.EXPIRED?Cn:kn}let l=s(n),c=l(n);return{c(){e=M("div"),t=ne("svg"),r=ne("path"),o=Q(),c.c(),a(r,"stroke-linecap","round"),a(r,"stroke-linejoin","round"),a(r,"d","M6 18L18 6M6 6l12 12"),a(t,"width","14"),a(t,"height","14"),a(t,"xmlns","http://www.w3.org/2000/svg"),a(t,"fill","none"),a(t,"viewBox","0 0 24 24"),a(t,"stroke-width","1.5"),a(t,"stroke","currentColor"),a(e,"class","altcha-error")},m(f,h){V(f,e,h),T(e,t),T(t,r),T(e,o),c.m(e,null)},p(f,h){l===(l=s(f))&&c?c.p(f,h):(c.d(1),c=l(f),c&&(c.c(),c.m(e,null)))},d(f){f&&D(e),c.d()}}}function kn(n){let e,t=n[13].error+"";return{c(){e=M("div"),a(e,"title",n[5])},m(r,o){V(r,e,o),e.innerHTML=t},p(r,o){o[0]&8192&&t!==(t=r[13].error+"")&&(e.innerHTML=t),o[0]&32&&a(e,"title",r[5])},d(r){r&&D(e)}}}function Cn(n){let e,t=n[13].expired+"";return{c(){e=M("div"),a(e,"title",n[5])},m(r,o){V(r,e,o),e.innerHTML=t},p(r,o){o[0]&8192&&t!==(t=r[13].expired+"")&&(e.innerHTML=t),o[0]&32&&a(e,"title",r[5])},d(r){r&&D(e)}}}function ut(n){let e,t,r=n[13].footer+"";return{c(){e=M("div"),t=M("div"),a(e,"class","altcha-footer")},m(o,s){V(o,e,s),T(e,t),t.innerHTML=r},p(o,s){s[0]&8192&&r!==(r=o[13].footer+"")&&(t.innerHTML=r)},d(o){o&&D(e)}}}function ht(n){let e;return{c(){e=M("div"),a(e,"class","altcha-anchor-arrow")},m(t,r){V(t,e,r),n[46](e)},p:F,d(t){t&&D(e),n[46](null)}}}function An(n){let e,t,r,o,s,l,c,f,h,_,I,ie,C,z,G,re,oe;const N=n[44].default,Z=qt(N,n,n[43],null);let P=n[7]===b.VERIFYING&&lt();function ce(d,L){return d[7]===b.VERIFIED?pn:d[7]===b.VERIFYING?vn:En}let se=ce(n),J=se(n),R=(n[3]!==!0||n[14])&&ft(n),j=(n[5]||n[7]===b.EXPIRED)&&at(n),A=n[13].footer&&(n[2]!==!0||n[14])&&ut(n),U=n[1]&&ht(n);return{c(){Z&&Z.c(),e=Q(),t=M("div"),r=M("div"),P&&P.c(),o=Q(),s=M("div"),l=M("input"),h=Q(),_=M("div"),J.c(),I=Q(),R&&R.c(),ie=Q(),j&&j.c(),C=Q(),A&&A.c(),z=Q(),U&&U.c(),a(l,"type","checkbox"),a(l,"id",c=n[4]+"_checkbox"),l.required=f=n[0]!=="onsubmit",a(s,"class","altcha-checkbox"),Qe(s,"altcha-hidden",n[7]===b.VERIFYING),a(_,"class","altcha-label"),a(r,"class","altcha-main"),a(t,"class","altcha"),a(t,"data-state",n[7]),a(t,"data-floating",n[1])},m(d,L){Z&&Z.m(d,L),V(d,e,L),V(d,t,L),T(t,r),P&&P.m(r,null),T(r,o),T(r,s),T(s,l),l.checked=n[8],T(r,h),T(r,_),J.m(_,null),T(r,I),R&&R.m(r,null),T(t,ie),j&&j.m(t,null),T(t,C),A&&A.m(t,null),T(t,z),U&&U.m(t,null),n[47](t),G=!0,re||(oe=[Pe(l,"change",n[45]),Pe(l,"change",n[15]),Pe(l,"invalid",n[16])],re=!0)},p(d,L){Z&&Z.p&&(!G||L[1]&4096)&&Gt(Z,N,d,d[43],G?Zt(N,d[43],L,null):Yt(d[43]),null),d[7]===b.VERIFYING?P||(P=lt(),P.c(),P.m(r,o)):P&&(P.d(1),P=null),(!G||L[0]&16&&c!==(c=d[4]+"_checkbox"))&&a(l,"id",c),(!G||L[0]&1&&f!==(f=d[0]!=="onsubmit"))&&(l.required=f),L[0]&256&&(l.checked=d[8]),(!G||L[0]&128)&&Qe(s,"altcha-hidden",d[7]===b.VERIFYING),se===(se=ce(d))&&J?J.p(d,L):(J.d(1),J=se(d),J&&(J.c(),J.m(_,null))),d[3]!==!0||d[14]?R?R.p(d,L):(R=ft(d),R.c(),R.m(r,null)):R&&(R.d(1),R=null),d[5]||d[7]===b.EXPIRED?j?j.p(d,L):(j=at(d),j.c(),j.m(t,C)):j&&(j.d(1),j=null),d[13].footer&&(d[2]!==!0||d[14])?A?A.p(d,L):(A=ut(d),A.c(),A.m(t,z)):A&&(A.d(1),A=null),d[1]?U?U.p(d,L):(U=ht(d),U.c(),U.m(t,null)):U&&(U.d(1),U=null),(!G||L[0]&128)&&a(t,"data-state",d[7]),(!G||L[0]&2)&&a(t,"data-floating",d[1])},i(d){G||(nt(Z,d),G=!0)},o(d){on(Z,d),G=!1},d(d){d&&(D(e),D(t)),Z&&Z.d(d),P&&P.d(),J.d(),R&&R.d(),j&&j.d(),A&&A.d(),U&&U.d(),n[47](null),re=!1,we(oe)}}}const dt="Visit Altcha.org",mt="https://altcha.org/";function gt(n){return JSON.parse(n)}function Ln(n,e,t){var Nt,jt;let r,o,s,l,{$$slots:c={},$$scope:f}=e,{analytics:h=!1}=e,{auto:_=void 0}=e,{beaconurl:I=void 0}=e,{blockspam:ie=void 0}=e,{challengeurl:C=void 0}=e,{challengejson:z=void 0}=e,{debug:G=!1}=e,{delay:re=0}=e,{expire:oe=void 0}=e,{floating:N=void 0}=e,{floatinganchor:Z=void 0}=e,{floatingoffset:P=void 0}=e,{hidefooter:ce=!1}=e,{hidelogo:se=!1}=e,{name:J="altcha"}=e,{maxnumber:R=1e6}=e,{mockerror:j=!1}=e,{obfuscated:A=void 0}=e,{refetchonexpire:U=!0}=e,{spamfilter:d=!1}=e,{strings:L=void 0}=e,{test:K=!1}=e,{verifyurl:fe=void 0}=e,{workers:Le=Math.min(16,navigator.hardwareConcurrency||8)}=e,{workerurl:je=void 0}=e;const Ze=$t(),yt=["SHA-256","SHA-384","SHA-512"],_t=(jt=(Nt=document.documentElement.lang)==null?void 0:Nt.split("-"))==null?void 0:jt[0];let $=!1,ee=null,k,ae=null,Ue=null,y=null,le=null,xe=null,te=null,ue=null,Y=null,wt=null,S=b.UNVERIFIED;Qt(()=>{y&&(y.removeEventListener("submit",pt),y.removeEventListener("reset",kt),y.removeEventListener("focusin",vt),y=null),le&&k.removeEventListener("click",Et),Y&&Y.destroy(),te&&(clearTimeout(te),te=null),document.removeEventListener("click",Tt),document.removeEventListener("scroll",Rt),window.removeEventListener("resize",St)}),Kt(()=>{var i,u;x("mounted","0.8.0"),x("workers",Le),K&&x("using test mode"),oe&&Ve(oe),_!==void 0&&x("auto",_),N!==void 0&&Dt(N),y=k.closest("form"),y&&(y.addEventListener("submit",pt,{capture:!0}),y.addEventListener("reset",kt),_==="onfocus"&&y.addEventListener("focusin",vt)),le=((i=k.parentElement)==null?void 0:i.querySelector("[data-clarify-button]"))||((u=k.parentElement)==null?void 0:u.querySelector("button, a")),le&&le.addEventListener("click",Et),h&&Lt(),_==="onload"&&(A?Te():he()),r&&(ce||se)&&x("Attributes hidefooter and hidelogo ignored because usage with free API Keys require attribution.")});function x(...i){(G||i.some(u=>u instanceof Error))&&console[i[0]instanceof Error?"error":"log"]("ALTCHA",...i)}function Et(i){i.preventDefault(),S===b.UNVERIFIED&&Te()}function vt(i){S===b.UNVERIFIED&&he()}function pt(i){y&&Y&&S===b.VERIFIED&&(Y.end(),t(12,wt=Y.dataAsBase64())),y&&_==="onsubmit"&&(S===b.UNVERIFIED?(i.preventDefault(),i.stopPropagation(),he().then(()=>{y==null||y.requestSubmit()})):S!==b.VERIFIED&&(i.preventDefault(),i.stopPropagation(),S===b.VERIFYING&&Ft()))}function kt(){Ie()}function Ct(i,u){return btoa(JSON.stringify({algorithm:i.algorithm,challenge:i.challenge,number:u.number,salt:i.salt,signature:i.signature,test:K?!0:void 0,took:u.took}))}function At(i){if(!i.algorithm)throw new Error("Invalid challenge. Property algorithm is missing.");if(i.signature===void 0)throw new Error("Invalid challenge. Property signature is missing.");if(!yt.includes(i.algorithm.toUpperCase()))throw new Error(`Unknown algorithm value. Allowed values: ${yt.join(", ")}`);if(!i.challenge||i.challenge.length<40)throw new Error("Challenge is too short. Min. 40 chars.");if(!i.salt||i.salt.length<10)throw new Error("Salt is too short. Min. 10 chars.")}async function xn(){var i;if(j)throw x("mocking error"),new Error("Mocked error.");if(o)return x("using provided json data"),o;if(K)return x("generating test challenge",{test:K}),mn(typeof K!="boolean"?+K:void 0);{if(!C&&y){const p=y.getAttribute("action");p!=null&&p.includes("/form/")&&t(17,C=p+"/altcha")}if(!C)throw new Error("Attribute challengeurl not set.");x("fetching challenge from",C);const u=await fetch(C,{headers:d?{"x-altcha-spam-filter":"1"}:{}});if(u.status!==200)throw new Error(`Server responded with ${u.status}.`);const m=u.headers.get("Expires"),g=u.headers.get("X-Altcha-Config"),O=await u.json(),B=new URLSearchParams((i=O.salt.split("?"))==null?void 0:i[1]),H=B.get("expires")||B.get("expire");if(H){const p=new Date(+H*1e3),W=isNaN(p.getTime())?0:p.getTime()-Date.now();W>0&&Ve(W)}if(g)try{const p=JSON.parse(g);p&&typeof p=="object"&&(p.verifyurl&&(p.verifyurl=new URL(p.verifyurl,new URL(C)).toString()),Mt(p))}catch(p){x("unable to configure from X-Altcha-Config",p)}if(!oe&&(m!=null&&m.length)){const p=Date.parse(m);if(p){const W=p-Date.now();W>0&&Ve(W)}}return O}}function Lt(){if(!Y)if(y){if(x("analytics enabled"),t(11,Y=new wn(y)),I===void 0){const i=y.getAttribute("action");i&&t(19,I=i+"/beacon")}t(11,Y.beaconUrl=I||null,Y)}else x("analytics cannot be enabled - form element not found")}function xt(){C&&U&&S===b.VERIFIED?he():Ie(b.EXPIRED,l.expired)}async function It(i){let u=null;if("Worker"in window){try{u=await In(i,i.maxnumber)}catch(m){x(m)}if((u==null?void 0:u.number)!==void 0||"obfuscated"in i)return{data:i,solution:u}}if("obfuscated"in i){const m=await _n(i.obfuscated,i.key,i.maxnumber);return{data:i,solution:await m.promise}}return{data:i,solution:await gn(i.challenge,i.salt,i.algorithm,i.maxnumber||R).promise}}async function In(i,u=typeof K=="number"?K:R,m=Math.ceil(Le)){const g=[];m=Math.min(16,Math.max(1,m));for(let H=0;H<m;H++)g.push(createAltchaWorker(je));const O=Math.ceil(u/m),B=await Promise.all(g.map((H,p)=>{const W=p*O;return new Promise(Ye=>{H.addEventListener("message",Re=>{if(Re.data)for(const Fe of g)Fe!==H&&Fe.postMessage({type:"abort"});Ye(Re.data)}),H.postMessage({payload:i,max:W+O,start:W,type:"work"})})}));for(const H of g)H.terminate();return B.find(H=>!!H)||null}function Tn(){[b.UNVERIFIED,b.ERROR,b.EXPIRED].includes(S)?d&&(y==null?void 0:y.reportValidity())===!1?t(8,$=!1):A?Te():he():t(8,$=!0)}function Tt(i){const u=i.target;N&&u&&!k.contains(u)&&S===b.VERIFIED&&t(9,k.style.display="none",k)}function Rt(){N&&Ge()}function Ft(){S===b.VERIFYING&&l.waitAlert&&alert(l.waitAlert)}function Rn(i){var u;if(ee){const m=ee.match(/^(mailto|tel|sms|https?):/);let g;if(m){const[O]=ee.slice(ee.indexOf(":")+1).replace(/^\/\//,"").split("?");g=document.createElement("a"),g.href=ee,g.innerHTML=O}else g=document.createTextNode(ee);le&&g&&(le.after(g),(u=le.parentElement)==null||u.removeChild(le))}}function Fn(i){Y&&Y.trackError(xe)}function Sn(i){N&&S!==b.UNVERIFIED&&requestAnimationFrame(()=>{Ge()})}function St(){N&&Ge()}function Ve(i){x("expire",i),te&&(clearTimeout(te),te=null),i<1?xt():te=setTimeout(xt,i)}function Dt(i){x("floating",i),N!==i&&(t(9,k.style.left="",k),t(9,k.style.top="",k)),t(1,N=i===!0||i===""?"auto":i===!1||i==="false"?void 0:N),N?(_||t(0,_="onsubmit"),document.addEventListener("scroll",Rt),document.addEventListener("click",Tt),window.addEventListener("resize",St)):_==="onsubmit"&&t(0,_=void 0)}function Dn(i){var m;const u=y==null?void 0:y.querySelector(typeof i=="string"?`input[name="${i}"]`:'input[type="email"]:not([data-no-spamfilter])');return((m=u==null?void 0:u.value)==null?void 0:m.slice(u.value.indexOf("@")))||void 0}function Mn(i){return[...(y==null?void 0:y.querySelectorAll(i!=null&&i.length?i.map(m=>`input[name="${m}"]`).join(", "):'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])'))||[]].reduce((m,g)=>{const O=g.name,B=g.value;return O&&B&&(m[O]=/\n/.test(B)?B.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):B),m},{})}async function Nn(i){if(!fe)throw new Error("Attribute verifyurl not set.");x("requesting server verification from",fe);const u={payload:i};if(d){const{blockedCountries:O,classifier:B,disableRules:H,email:p,expectedLanguages:W,expectedCountries:Ye,fields:Re,ipAddress:Fe,text:On,timeZone:Ut}=jn();u.blockedCountries=O,u.classifier=B,u.disableRules=H,u.email=p===!1?void 0:Dn(p),u.expectedCountries=Ye,u.expectedLanguages=W||(_t?[_t]:void 0),u.fields=Re===!1?void 0:Mn(Re),u.ipAddress=Fe===!1?void 0:Fe||"auto",u.text=On,u.timeZone=Ut===!1?void 0:Ut||st()}const m=await fetch(fe,{body:JSON.stringify(u),headers:{"content-type":"application/json"},method:"POST"});if(m.status!==200)throw new Error(`Server responded with ${m.status}.`);const g=await m.json();if(g!=null&&g.payload&&t(6,ue=g.payload),Ze("serververification",g),ie&&g.classification==="BAD")throw new Error("SpamFilter returned negative classification.")}function jn(){return d==="ipAddress"?{blockedCountries:void 0,classifier:void 0,disableRules:void 0,email:!1,expectedCountries:void 0,expectedLanguages:void 0,fields:!1,ipAddress:void 0,text:void 0,timeZone:void 0}:typeof d=="object"?d:{blockedCountries:void 0,classifier:void 0,disableRules:void 0,email:void 0,expectedCountries:void 0,expectedLanguages:void 0,fields:void 0,ipAddress:void 0,text:void 0,timeZone:void 0}}function Ge(i=20){if(k)if(Ue||(Ue=(Z?document.querySelector(Z):y==null?void 0:y.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])'))||y||le),Ue){const u=parseInt(P,10)||12,m=Ue.getBoundingClientRect(),g=k.getBoundingClientRect(),O=document.documentElement.clientHeight,B=document.documentElement.clientWidth,H=N==="auto"?m.bottom+g.height+u+i>O:N==="top",p=Math.max(i,Math.min(B-i-g.width,m.left+m.width/2-g.width/2));if(H?t(9,k.style.top=`${m.top-(g.height+u)}px`,k):t(9,k.style.top=`${m.bottom+u}px`,k),t(9,k.style.left=`${p}px`,k),k.setAttribute("data-floating",H?"top":"bottom"),ae){const W=ae.getBoundingClientRect();t(10,ae.style.left=m.left-p+m.width/2-W.width/2+"px",ae)}}else x("unable to find floating anchor element")}function Mt(i){i.analytics&&(t(18,h=i.analytics),Lt()),i.obfuscated!==void 0&&t(27,A=i.obfuscated),i.auto!==void 0&&(t(0,_=i.auto),_==="onload"&&(A?Te():he())),i.beaconurl&&(t(19,I=i.beaconurl),Y&&t(11,Y.beaconUrl=I,Y)),i.floatinganchor!==void 0&&t(23,Z=i.floatinganchor),i.delay!==void 0&&t(21,re=i.delay),i.floatingoffset!==void 0&&t(24,P=i.floatingoffset),i.floating!==void 0&&Dt(i.floating),i.expire!==void 0&&(Ve(i.expire),t(22,oe=i.expire)),i.challenge&&(At(i.challenge),o=i.challenge),i.challengeurl!==void 0&&t(17,C=i.challengeurl),i.debug!==void 0&&t(20,G=!!i.debug),i.hidefooter!==void 0&&t(2,ce=!!i.hidefooter),i.hidelogo!==void 0&&t(3,se=!!i.hidelogo),i.maxnumber!==void 0&&t(25,R=+i.maxnumber),i.mockerror!==void 0&&t(26,j=!!i.mockerror),i.name!==void 0&&t(4,J=i.name),i.refetchonexpire!==void 0&&t(28,U=!!i.refetchonexpire),i.spamfilter!==void 0&&t(29,d=typeof i.spamfilter=="object"?i.spamfilter:!!i.spamfilter),i.strings&&t(42,s=i.strings),i.test!==void 0&&t(30,K=typeof i.test=="number"?i.test:!!i.test),i.verifyurl!==void 0&&t(31,fe=i.verifyurl),i.workers!==void 0&&t(32,Le=+i.workers),i.workerurl!==void 0&&t(33,je=i.workerurl)}function Ie(i=b.UNVERIFIED,u=null){te&&(clearTimeout(te),te=null),t(8,$=!1),t(5,xe=u),t(6,ue=null),t(7,S=i)}async function he(){return Ie(b.VERIFYING),await new Promise(i=>setTimeout(i,re||0)),xn().then(i=>(At(i),x("challenge",i),It(i))).then(({data:i,solution:u})=>{if(x("solution",u),"challenge"in i&&u&&!("clearText"in u))if((u==null?void 0:u.number)!==void 0){if(fe)return Nn(Ct(i,u));t(6,ue=Ct(i,u)),x("payload",ue)}else throw x("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."),new Error("Unexpected result returned.")}).then(()=>{en().then(()=>{t(7,S=b.VERIFIED),t(8,$=!0),x("verified"),Ze("verified",{payload:ue})})}).catch(i=>{x(i),t(7,S=b.ERROR),t(8,$=!1),t(5,xe=i.message)})}async function Te(){if(!A){t(7,S=b.ERROR);return}Ie(b.VERIFYING),await new Promise(B=>setTimeout(B,re||0));const[i,u]=A.split("?");let g=new URLSearchParams(u||"").get("key")||void 0;if(g){const B=g.match(/^\(prompt:?(.*)\)$/);B&&(g=prompt(B[1]||"Enter Key:")||void 0)}const{solution:O}=await It({obfuscated:i,key:g,maxnumber:R});O&&"clearText"in O?(t(41,ee=O.clearText),t(7,S=b.VERIFIED),t(8,$=!0),N&&k&&t(9,k.style.display="none",k)):(t(7,S=b.ERROR),t(8,$=!1),t(5,xe="Unable to decrypt data."))}function Un(){$=this.checked,t(8,$)}function Vn(i){De[i?"unshift":"push"](()=>{ae=i,t(10,ae)})}function Pn(i){De[i?"unshift":"push"](()=>{k=i,t(9,k)})}return n.$$set=i=>{"analytics"in i&&t(18,h=i.analytics),"auto"in i&&t(0,_=i.auto),"beaconurl"in i&&t(19,I=i.beaconurl),"blockspam"in i&&t(34,ie=i.blockspam),"challengeurl"in i&&t(17,C=i.challengeurl),"challengejson"in i&&t(35,z=i.challengejson),"debug"in i&&t(20,G=i.debug),"delay"in i&&t(21,re=i.delay),"expire"in i&&t(22,oe=i.expire),"floating"in i&&t(1,N=i.floating),"floatinganchor"in i&&t(23,Z=i.floatinganchor),"floatingoffset"in i&&t(24,P=i.floatingoffset),"hidefooter"in i&&t(2,ce=i.hidefooter),"hidelogo"in i&&t(3,se=i.hidelogo),"name"in i&&t(4,J=i.name),"maxnumber"in i&&t(25,R=i.maxnumber),"mockerror"in i&&t(26,j=i.mockerror),"obfuscated"in i&&t(27,A=i.obfuscated),"refetchonexpire"in i&&t(28,U=i.refetchonexpire),"spamfilter"in i&&t(29,d=i.spamfilter),"strings"in i&&t(36,L=i.strings),"test"in i&&t(30,K=i.test),"verifyurl"in i&&t(31,fe=i.verifyurl),"workers"in i&&t(32,Le=i.workers),"workerurl"in i&&t(33,je=i.workerurl),"$$scope"in i&&t(43,f=i.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&131072&&t(14,r=!!(C!=null&&C.includes(".altcha.org"))&&!!(C!=null&&C.includes("apiKey=ckey_"))),n.$$.dirty[1]&16&&(o=z?gt(z):void 0),n.$$.dirty[1]&32&&t(42,s=L?gt(L):{}),n.$$.dirty[1]&2048&&t(13,l={ariaLinkLabel:dt,error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:`Protected by <a href="${mt}" target="_blank" aria-label="${s.ariaLinkLabel||dt}">ALTCHA</a>`,label:"I'm not a robot",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait.",...s}),n.$$.dirty[0]&192|n.$$.dirty[1]&1024&&Ze("statechange",ee?{clarifiedData:ee,state:S}:{payload:ue,state:S}),n.$$.dirty[0]&32&&Fn(),n.$$.dirty[0]&128&&Sn(),n.$$.dirty[1]&1024&&Rn()},[_,N,ce,se,J,xe,ue,S,$,k,ae,Y,wt,l,r,Tn,Ft,C,h,I,G,re,oe,Z,P,R,j,A,U,d,K,fe,Le,je,ie,z,L,Mt,Ie,he,Te,ee,s,f,c,Un,Vn,Pn]}class bt extends un{constructor(e){super(),fn(this,e,Ln,An,Bt,{analytics:18,auto:0,beaconurl:19,blockspam:34,challengeurl:17,challengejson:35,debug:20,delay:21,expire:22,floating:1,floatinganchor:23,floatingoffset:24,hidefooter:2,hidelogo:3,name:4,maxnumber:25,mockerror:26,obfuscated:27,refetchonexpire:28,spamfilter:29,strings:36,test:30,verifyurl:31,workers:32,workerurl:33,configure:37,reset:38,verify:39,clarify:40},null,[-1,-1,-1])}get analytics(){return this.$$.ctx[18]}set analytics(e){this.$$set({analytics:e}),v()}get auto(){return this.$$.ctx[0]}set auto(e){this.$$set({auto:e}),v()}get beaconurl(){return this.$$.ctx[19]}set beaconurl(e){this.$$set({beaconurl:e}),v()}get blockspam(){return this.$$.ctx[34]}set blockspam(e){this.$$set({blockspam:e}),v()}get challengeurl(){return this.$$.ctx[17]}set challengeurl(e){this.$$set({challengeurl:e}),v()}get challengejson(){return this.$$.ctx[35]}set challengejson(e){this.$$set({challengejson:e}),v()}get debug(){return this.$$.ctx[20]}set debug(e){this.$$set({debug:e}),v()}get delay(){return this.$$.ctx[21]}set delay(e){this.$$set({delay:e}),v()}get expire(){return this.$$.ctx[22]}set expire(e){this.$$set({expire:e}),v()}get floating(){return this.$$.ctx[1]}set floating(e){this.$$set({floating:e}),v()}get floatinganchor(){return this.$$.ctx[23]}set floatinganchor(e){this.$$set({floatinganchor:e}),v()}get floatingoffset(){return this.$$.ctx[24]}set floatingoffset(e){this.$$set({floatingoffset:e}),v()}get hidefooter(){return this.$$.ctx[2]}set hidefooter(e){this.$$set({hidefooter:e}),v()}get hidelogo(){return this.$$.ctx[3]}set hidelogo(e){this.$$set({hidelogo:e}),v()}get name(){return this.$$.ctx[4]}set name(e){this.$$set({name:e}),v()}get maxnumber(){return this.$$.ctx[25]}set maxnumber(e){this.$$set({maxnumber:e}),v()}get mockerror(){return this.$$.ctx[26]}set mockerror(e){this.$$set({mockerror:e}),v()}get obfuscated(){return this.$$.ctx[27]}set obfuscated(e){this.$$set({obfuscated:e}),v()}get refetchonexpire(){return this.$$.ctx[28]}set refetchonexpire(e){this.$$set({refetchonexpire:e}),v()}get spamfilter(){return this.$$.ctx[29]}set spamfilter(e){this.$$set({spamfilter:e}),v()}get strings(){return this.$$.ctx[36]}set strings(e){this.$$set({strings:e}),v()}get test(){return this.$$.ctx[30]}set test(e){this.$$set({test:e}),v()}get verifyurl(){return this.$$.ctx[31]}set verifyurl(e){this.$$set({verifyurl:e}),v()}get workers(){return this.$$.ctx[32]}set workers(e){this.$$set({workers:e}),v()}get workerurl(){return this.$$.ctx[33]}set workerurl(e){this.$$set({workerurl:e}),v()}get configure(){return this.$$.ctx[37]}get reset(){return this.$$.ctx[38]}get verify(){return this.$$.ctx[39]}get clarify(){return this.$$.ctx[40]}}customElements.define("altcha-widget",an(bt,{analytics:{type:"Boolean"},auto:{},beaconurl:{},blockspam:{},challengeurl:{},challengejson:{},debug:{type:"Boolean"},delay:{},expire:{},floating:{},floatinganchor:{},floatingoffset:{},hidefooter:{type:"Boolean"},hidelogo:{type:"Boolean"},name:{},maxnumber:{},mockerror:{type:"Boolean"},obfuscated:{},refetchonexpire:{type:"Boolean"},spamfilter:{type:"Boolean"},strings:{},test:{type:"Boolean"},verifyurl:{},workers:{},workerurl:{}},["default"],["configure","reset","verify","clarify"],!1)),globalThis.createAltchaWorker=n=>new Worker(new URL(n||"./worker.js",typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:E&&E.src||new URL("altcha.umd.cjs",document.baseURI).href)),w.Altcha=bt,Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});
