(function(O,D){typeof exports=="object"&&typeof module<"u"?D(exports):typeof define=="function"&&define.amd?define(["exports"],D):(O=typeof globalThis<"u"?globalThis:O||self,D(O.altcha={}))})(this,function(O){"use strict";var Qt=Object.defineProperty;var en=(O,D,Z)=>D in O?Qt(O,D,{enumerable:!0,configurable:!0,writable:!0,value:Z}):O[D]=Z;var q=(O,D,Z)=>en(O,typeof D!="symbol"?D+"":D,Z);var D=typeof document<"u"?document.currentScript:null;function Z(){}function Re(n){return n()}function $e(){return Object.create(null)}function le(n){n.forEach(Re)}function Te(n){return typeof n=="function"}function ct(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function ut(n){return Object.keys(n).length===0}function v(n,e){n.appendChild(e)}function N(n,e,t){n.insertBefore(e,t||null)}function j(n){n.parentNode&&n.parentNode.removeChild(n)}function $(n){return document.createElement(n)}function W(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function at(n){return document.createTextNode(n)}function X(){return at(" ")}function ye(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function f(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function ht(n){return Array.from(n.childNodes)}function Se(n,e,t){n.classList.toggle(e,!!t)}function dt(n,e,{bubbles:t=!1,cancelable:i=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:i})}function gt(n){const e={};return n.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}let se;function fe(n){se=n}function ke(){if(!se)throw new Error("Function called outside component initialization");return se}function mt(n){ke().$$.on_mount.push(n)}function bt(n){ke().$$.on_destroy.push(n)}function wt(){const n=ke();return(e,t,{cancelable:i=!1}={})=>{const l=n.$$.callbacks[e];if(l){const o=dt(e,t,{cancelable:i});return l.slice().forEach(s=>{s.call(n,o)}),!o.defaultPrevented}return!0}}const ne=[],he=[];let re=[];const Me=[],je=Promise.resolve();let ve=!1;function De(){ve||(ve=!0,je.then(w))}function _t(){return De(),je}function Ee(n){re.push(n)}const pe=new Set;let ie=0;function w(){if(ie!==0)return;const n=se;do{try{for(;ie<ne.length;){const e=ne[ie];ie++,fe(e),yt(e.$$)}}catch(e){throw ne.length=0,ie=0,e}for(fe(null),ne.length=0,ie=0;he.length;)he.pop()();for(let e=0;e<re.length;e+=1){const t=re[e];pe.has(t)||(pe.add(t),t())}re.length=0}while(ne.length);for(;Me.length;)Me.pop()();ve=!1,pe.clear(),fe(n)}function yt(n){if(n.fragment!==null){n.update(),le(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ee)}}function kt(n){const e=[],t=[];re.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),re=e}const vt=new Set;function Et(n,e){n&&n.i&&(vt.delete(n),n.i(e))}function pt(n,e,t){const{fragment:i,after_update:l}=n.$$;i&&i.m(e,t),Ee(()=>{const o=n.$$.on_mount.map(Re).filter(Te);n.$$.on_destroy?n.$$.on_destroy.push(...o):le(o),n.$$.on_mount=[]}),l.forEach(Ee)}function xt(n,e){const t=n.$$;t.fragment!==null&&(kt(t.after_update),le(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ct(n,e){n.$$.dirty[0]===-1&&(ne.push(n),De(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Lt(n,e,t,i,l,o,s=null,a=[-1]){const u=se;fe(n);const h=n.$$={fragment:null,ctx:[],props:o,update:Z,not_equal:l,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:$e(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};s&&s(h.root);let B=!1;if(h.ctx=t?t(n,e.props||{},(S,H,...E)=>{const U=E.length?E[0]:H;return h.ctx&&l(h.ctx[S],h.ctx[S]=U)&&(!h.skip_bound&&h.bound[S]&&h.bound[S](U),B&&Ct(n,S)),H}):[],h.update(),B=!0,le(h.before_update),h.fragment=i?i(h.ctx):!1,e.target){if(e.hydrate){const S=ht(e.target);h.fragment&&h.fragment.l(S),S.forEach(j)}else h.fragment&&h.fragment.c();e.intro&&Et(n.$$.fragment),pt(n,e.target,e.anchor),w()}fe(u)}let Ne;typeof HTMLElement=="function"&&(Ne=class extends HTMLElement{constructor(e,t,i){super();q(this,"$$ctor");q(this,"$$s");q(this,"$$c");q(this,"$$cn",!1);q(this,"$$d",{});q(this,"$$r",!1);q(this,"$$p_d",{});q(this,"$$l",{});q(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=t,i&&this.attachShadow({mode:"open"})}addEventListener(e,t,i){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const l=this.$$c.$on(e,t);this.$$l_u.set(t,l)}super.addEventListener(e,t,i)}removeEventListener(e,t,i){if(super.removeEventListener(e,t,i),this.$$c){const l=this.$$l_u.get(t);l&&(l(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(o){return()=>{let s;return{c:function(){s=$("slot"),o!=="default"&&f(s,"name",o)},m:function(h,B){N(h,s,B)},d:function(h){h&&j(s)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},i=gt(this);for(const o of this.$$s)o in i&&(t[o]=[e(o)]);for(const o of this.attributes){const s=this.$$g_p(o.name);s in this.$$d||(this.$$d[s]=de(s,o.value,this.$$p_d,"toProp"))}for(const o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});const l=()=>{this.$$r=!0;for(const o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){const s=de(o,this.$$d[o],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,s)}this.$$r=!1};this.$$c.$$.after_update.push(l),l();for(const o in this.$$l)for(const s of this.$$l[o]){const a=this.$$c.$on(o,s);this.$$l_u.set(s,a)}this.$$l={}}}attributeChangedCallback(e,t,i){var l;this.$$r||(e=this.$$g_p(e),this.$$d[e]=de(e,i,this.$$p_d,"toProp"),(l=this.$$c)==null||l.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function de(n,e,t,i){var o;const l=(o=t[n])==null?void 0:o.type;if(e=l==="Boolean"&&typeof e!="boolean"?e!=null:e,!i||!t[n])return e;if(i==="toAttribute")switch(l){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(l){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function It(n,e,t,i,l,o){let s=class extends Ne{constructor(){super(n,t,l),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Object.keys(e).forEach(a=>{Object.defineProperty(s.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(u){var h;u=de(a,u,e),this.$$d[a]=u,(h=this.$$c)==null||h.$set({[a]:u})}})}),i.forEach(a=>{Object.defineProperty(s.prototype,a,{get(){var u;return(u=this.$$c)==null?void 0:u[a]}})}),o&&(s=o(s)),n.element=s,s}class At{constructor(){q(this,"$$");q(this,"$$set")}$destroy(){xt(this,1),this.$destroy=Z}$on(e,t){if(!Te(t))return Z;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const l=i.indexOf(t);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Rt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Rt);const $t=new TextEncoder;function Tt(n){return[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function St(n,e="SHA-256",t=1e5){const i=Date.now().toString(16);n||(n=Math.round(Math.random()*t));const l=await Ve(i,n,e);return{algorithm:e,challenge:l,salt:i,signature:""}}async function Ve(n,e,t){return Tt(await crypto.subtle.digest(t.toUpperCase(),$t.encode(n+e)))}function Mt(n,e,t="SHA-256",i=1e6,l=0){const o=new AbortController,s=Date.now();return{promise:(async()=>{for(let u=l;u<=i;u+=1){if(o.signal.aborted)return null;if(await Ve(e,u,t)===n)return{number:u,took:Date.now()-s}}return null})(),controller:o}}var m=(n=>(n.ERROR="error",n.VERIFIED="verified",n.VERIFYING="verifying",n.UNVERIFIED="unverified",n.EXPIRED="expired",n))(m||{});function Pe(n){let e,t,i;return{c(){e=W("svg"),t=W("path"),i=W("path"),f(t,"d","M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"),f(t,"fill","currentColor"),f(t,"opacity",".25"),f(i,"d","M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"),f(i,"fill","currentColor"),f(i,"class","altcha-spinner"),f(e,"width","24"),f(e,"height","24"),f(e,"viewBox","0 0 24 24"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(l,o){N(l,e,o),v(e,t),v(e,i)},d(l){l&&j(e)}}}function jt(n){let e,t=n[11].label+"",i;return{c(){e=$("label"),f(e,"for",i=n[4]+"_checkbox")},m(l,o){N(l,e,o),e.innerHTML=t},p(l,o){o[0]&2048&&t!==(t=l[11].label+"")&&(e.innerHTML=t),o[0]&16&&i!==(i=l[4]+"_checkbox")&&f(e,"for",i)},d(l){l&&j(e)}}}function Dt(n){let e,t=n[11].verifying+"";return{c(){e=$("span")},m(i,l){N(i,e,l),e.innerHTML=t},p(i,l){l[0]&2048&&t!==(t=i[11].verifying+"")&&(e.innerHTML=t)},d(i){i&&j(e)}}}function Nt(n){let e,t=n[11].verified+"",i,l;return{c(){e=$("span"),i=X(),l=$("input"),f(l,"type","hidden"),f(l,"name",n[4]),l.value=n[5]},m(o,s){N(o,e,s),e.innerHTML=t,N(o,i,s),N(o,l,s)},p(o,s){s[0]&2048&&t!==(t=o[11].verified+"")&&(e.innerHTML=t),s[0]&16&&f(l,"name",o[4]),s[0]&32&&(l.value=o[5])},d(o){o&&(j(e),j(i),j(l))}}}function Fe(n){let e,t,i,l,o,s,a;return{c(){e=$("div"),t=$("a"),i=W("svg"),l=W("path"),o=W("path"),s=W("path"),f(l,"d","M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"),f(l,"fill","currentColor"),f(o,"d","M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"),f(o,"fill","currentColor"),f(s,"d","M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"),f(s,"fill","currentColor"),f(i,"width","22"),f(i,"height","22"),f(i,"viewBox","0 0 20 20"),f(i,"fill","none"),f(i,"xmlns","http://www.w3.org/2000/svg"),f(t,"href",qe),f(t,"target","_blank"),f(t,"class","altcha-logo"),f(t,"aria-label",a=n[11].ariaLinkLabel)},m(u,h){N(u,e,h),v(e,t),v(t,i),v(i,l),v(i,o),v(i,s)},p(u,h){h[0]&2048&&a!==(a=u[11].ariaLinkLabel)&&f(t,"aria-label",a)},d(u){u&&j(e)}}}function He(n){let e,t,i,l;function o(u,h){return u[6]===m.EXPIRED?Pt:Vt}let s=o(n),a=s(n);return{c(){e=$("div"),t=W("svg"),i=W("path"),l=X(),a.c(),f(i,"stroke-linecap","round"),f(i,"stroke-linejoin","round"),f(i,"d","M6 18L18 6M6 6l12 12"),f(t,"width","14"),f(t,"height","14"),f(t,"xmlns","http://www.w3.org/2000/svg"),f(t,"fill","none"),f(t,"viewBox","0 0 24 24"),f(t,"stroke-width","1.5"),f(t,"stroke","currentColor"),f(e,"class","altcha-error")},m(u,h){N(u,e,h),v(e,t),v(t,i),v(e,l),a.m(e,null)},p(u,h){s===(s=o(u))&&a?a.p(u,h):(a.d(1),a=s(u),a&&(a.c(),a.m(e,null)))},d(u){u&&j(e),a.d()}}}function Vt(n){let e,t=n[11].error+"";return{c(){e=$("div"),f(e,"title",n[10])},m(i,l){N(i,e,l),e.innerHTML=t},p(i,l){l[0]&2048&&t!==(t=i[11].error+"")&&(e.innerHTML=t),l[0]&1024&&f(e,"title",i[10])},d(i){i&&j(e)}}}function Pt(n){let e,t=n[11].expired+"";return{c(){e=$("div"),f(e,"title",n[10])},m(i,l){N(i,e,l),e.innerHTML=t},p(i,l){l[0]&2048&&t!==(t=i[11].expired+"")&&(e.innerHTML=t),l[0]&1024&&f(e,"title",i[10])},d(i){i&&j(e)}}}function Oe(n){let e,t,i=n[11].footer+"";return{c(){e=$("div"),t=$("div"),f(e,"class","altcha-footer")},m(l,o){N(l,e,o),v(e,t),t.innerHTML=i},p(l,o){o[0]&2048&&i!==(i=l[11].footer+"")&&(t.innerHTML=i)},d(l){l&&j(e)}}}function Be(n){let e;return{c(){e=$("div"),f(e,"class","altcha-anchor-arrow")},m(t,i){N(t,e,i),n[36](e)},p:Z,d(t){t&&j(e),n[36](null)}}}function Ft(n){let e,t,i,l,o,s,a,u,h,B,S,H,E,U,K,T=n[6]===m.VERIFYING&&Pe();function oe(d,y){return d[6]===m.VERIFIED?Nt:d[6]===m.VERIFYING?Dt:jt}let J=oe(n),M=J(n),L=n[3]!==!0&&Fe(n),I=(n[10]||n[6]===m.EXPIRED)&&He(n),_=n[11].footer&&n[2]!==!0&&Oe(n),A=n[1]&&Be(n);return{c(){e=$("div"),t=$("div"),T&&T.c(),i=X(),l=$("div"),o=$("input"),u=X(),h=$("div"),M.c(),B=X(),L&&L.c(),S=X(),I&&I.c(),H=X(),_&&_.c(),E=X(),A&&A.c(),f(o,"type","checkbox"),f(o,"id",s=n[4]+"_checkbox"),o.required=a=n[0]!=="onsubmit",f(l,"class","altcha-checkbox"),Se(l,"altcha-hidden",n[6]===m.VERIFYING),f(h,"class","altcha-label"),f(t,"class","altcha-main"),f(e,"class","altcha"),f(e,"data-state",n[6]),f(e,"data-floating",n[1])},m(d,y){N(d,e,y),v(e,t),T&&T.m(t,null),v(t,i),v(t,l),v(l,o),o.checked=n[7],v(t,u),v(t,h),M.m(h,null),v(t,B),L&&L.m(t,null),v(e,S),I&&I.m(e,null),v(e,H),_&&_.m(e,null),v(e,E),A&&A.m(e,null),n[37](e),U||(K=[ye(o,"change",n[35]),ye(o,"change",n[12]),ye(o,"invalid",n[13])],U=!0)},p(d,y){d[6]===m.VERIFYING?T||(T=Pe(),T.c(),T.m(t,i)):T&&(T.d(1),T=null),y[0]&16&&s!==(s=d[4]+"_checkbox")&&f(o,"id",s),y[0]&1&&a!==(a=d[0]!=="onsubmit")&&(o.required=a),y[0]&128&&(o.checked=d[7]),y[0]&64&&Se(l,"altcha-hidden",d[6]===m.VERIFYING),J===(J=oe(d))&&M?M.p(d,y):(M.d(1),M=J(d),M&&(M.c(),M.m(h,null))),d[3]!==!0?L?L.p(d,y):(L=Fe(d),L.c(),L.m(t,null)):L&&(L.d(1),L=null),d[10]||d[6]===m.EXPIRED?I?I.p(d,y):(I=He(d),I.c(),I.m(e,H)):I&&(I.d(1),I=null),d[11].footer&&d[2]!==!0?_?_.p(d,y):(_=Oe(d),_.c(),_.m(e,E)):_&&(_.d(1),_=null),d[1]?A?A.p(d,y):(A=Be(d),A.c(),A.m(e,null)):A&&(A.d(1),A=null),y[0]&64&&f(e,"data-state",d[6]),y[0]&2&&f(e,"data-floating",d[1])},i:Z,o:Z,d(d){d&&j(e),T&&T.d(),M.d(),L&&L.d(),I&&I.d(),_&&_.d(),A&&A.d(),n[37](null),U=!1,le(K)}}}const Ue="Visit Altcha.org",qe="https://altcha.org/";function Ze(n){return JSON.parse(n)}function Ht(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function Ot(n,e,t){var st,ft;let i,l,o,{auto:s=void 0}=e,{blockspam:a=void 0}=e,{challengeurl:u=void 0}=e,{challengejson:h=void 0}=e,{debug:B=!1}=e,{delay:S=0}=e,{expire:H=void 0}=e,{floating:E=void 0}=e,{floatinganchor:U=void 0}=e,{floatingoffset:K=void 0}=e,{hidefooter:T=!1}=e,{hidelogo:oe=!1}=e,{name:J="altcha"}=e,{maxnumber:M=1e6}=e,{mockerror:L=!1}=e,{refetchonexpire:I=!0}=e,{spamfilter:_=!1}=e,{strings:A=void 0}=e,{test:d=!1}=e,{verifyurl:y=void 0}=e,{workers:ce=Math.min(16,navigator.hardwareConcurrency||8)}=e,{workerurl:xe=void 0}=e;const Ce=wt(),Ge=["SHA-256","SHA-384","SHA-512"],We=(ft=(st=document.documentElement.lang)==null?void 0:st.split("-"))==null?void 0:ft[0];let z=!1,p,Q=null,ge=null,b=null,Le=null,ee=null,V=m.UNVERIFIED,Y=null;bt(()=>{b&&(b.removeEventListener("submit",Je),b.removeEventListener("reset",ze),b.removeEventListener("focusin",Xe),b=null),Y&&(clearTimeout(Y),Y=null),document.removeEventListener("click",tt),document.removeEventListener("scroll",nt),window.removeEventListener("resize",it)}),mt(()=>{x("mounted","0.6.1"),x("workers",ce),d&&x("using test mode"),H&&me(H),s!==void 0&&x("auto",s),E!==void 0&&ot(E),b=p.closest("form"),b&&(b.addEventListener("submit",Je,{capture:!0}),b.addEventListener("reset",ze),s==="onfocus"&&b.addEventListener("focusin",Xe)),s==="onload"&&te()});function x(...r){(B||r.some(c=>c instanceof Error))&&console[r[0]instanceof Error?"error":"log"]("ALTCHA",...r)}function Xe(r){V===m.UNVERIFIED&&te()}function Je(r){b&&s==="onsubmit"&&(V===m.UNVERIFIED?(r.preventDefault(),r.stopPropagation(),te().then(()=>{b==null||b.requestSubmit()})):V!==m.VERIFIED&&(r.preventDefault(),r.stopPropagation(),V===m.VERIFYING&&rt()))}function ze(){be()}function Ke(r,c){return btoa(JSON.stringify({algorithm:r.algorithm,challenge:r.challenge,number:c.number,salt:r.salt,signature:r.signature,test:d?!0:void 0,took:c.took}))}function Qe(r){if(!r.algorithm)throw new Error("Invalid challenge. Property algorithm is missing.");if(r.signature===void 0)throw new Error("Invalid challenge. Property signature is missing.");if(!Ge.includes(r.algorithm.toUpperCase()))throw new Error(`Unknown algorithm value. Allowed values: ${Ge.join(", ")}`);if(!r.challenge||r.challenge.length<40)throw new Error("Challenge is too short. Min. 40 chars.");if(!r.salt||r.salt.length<10)throw new Error("Salt is too short. Min. 10 chars.")}async function Bt(){var r;if(L)throw x("mocking error"),new Error("Mocked error.");if(i)return x("using provided json data"),i;if(d)return x("generating test challenge",{test:d}),St(typeof d!="boolean"?+d:void 0);{if(!u)throw new Error("Attribute challengeurl not set.");x("fetching challenge from",u);const c=await fetch(u,{headers:{"x-altcha-spam-filter":_?"1":"0"}});if(c.status!==200)throw new Error(`Server responded with ${c.status}.`);const g=c.headers.get("Expires"),R=c.headers.get("X-Altcha-Config"),P=await c.json(),F=new URLSearchParams((r=P.salt.split("?"))==null?void 0:r[1]),G=F.get("expires")||F.get("expire");if(G){const k=new Date(+G*1e3),C=isNaN(k.getTime())?0:k.getTime()-Date.now();C>0&&me(C)}if(R)try{const k=JSON.parse(R);k&&typeof k=="object"&&(k.verifyurl&&(k.verifyurl=new URL(k.verifyurl,new URL(u)).toString()),lt(k))}catch(k){x("unable to configure from X-Altcha-Config",k)}if(!H&&(g!=null&&g.length)){const k=Date.parse(g);if(k){const C=k-Date.now();C>0&&me(C)}}return P}}function et(){u&&I&&V===m.VERIFIED?te():be(m.EXPIRED,o.expired)}async function Ut(r){let c=null;if("Worker"in window){try{c=await qt(r.challenge,r.salt,r.algorithm,r.maxnumber)}catch(g){x(g)}if((c==null?void 0:c.number)!==void 0)return{data:r,solution:c}}return{data:r,solution:await Mt(r.challenge,r.salt,r.algorithm,r.maxnumber||M).promise}}async function qt(r,c,g,R=typeof d=="number"?d:M,P=Math.ceil(ce)){const F=[];if(P<1)throw new Error("Wrong number of workers configured.");if(P>16)throw new Error("Too many workers. Max. 16 allowed workers.");for(let C=0;C<P;C++)F.push(createAltchaWorker(xe));const G=Math.ceil(R/P),k=await Promise.all(F.map((C,Ae)=>{const ue=Ae*G;return new Promise(we=>{C.addEventListener("message",_e=>{if(_e.data)for(const ae of F)ae!==C&&ae.postMessage({type:"abort"});we(_e.data)}),C.postMessage({payload:{alg:g,challenge:r,max:ue+G,salt:c,start:ue},type:"work"})})}));for(const C of F)C.terminate();return k.find(C=>!!C)||null}function Zt(){[m.UNVERIFIED,m.ERROR,m.EXPIRED].includes(V)?_&&(b==null?void 0:b.reportValidity())===!1?t(7,z=!1):te():t(7,z=!0)}function tt(r){const c=r.target;E&&c&&!p.contains(c)&&V===m.VERIFIED&&t(8,p.style.display="none",p)}function nt(){E&&Ie()}function rt(){V===m.VERIFYING&&o.waitAlert&&alert(o.waitAlert)}function Yt(r){E&&V!==m.UNVERIFIED&&requestAnimationFrame(()=>{Ie()})}function it(){E&&Ie()}function me(r){x("expire",r),Y&&(clearTimeout(Y),Y=null),r<1?et():Y=setTimeout(et,r)}function ot(r){x("floating",r),E!==r&&(t(8,p.style.left="",p),t(8,p.style.top="",p)),t(1,E=r===!0||r===""?"auto":r===!1||r==="false"?void 0:E),E?(s||t(0,s="onsubmit"),document.addEventListener("scroll",nt),document.addEventListener("click",tt),window.addEventListener("resize",it)):s==="onsubmit"&&t(0,s=void 0)}function Gt(r){var g;const c=b==null?void 0:b.querySelector(typeof r=="string"?`input[name="${r}"]`:'input[type="email"]:not([data-no-spamfilter])');return((g=c==null?void 0:c.value)==null?void 0:g.slice(c.value.indexOf("@")))||void 0}function Wt(r){return[...(b==null?void 0:b.querySelectorAll(r!=null&&r.length?r.map(g=>`input[name="${g}"]`).join(", "):'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])'))||[]].reduce((g,R)=>{const P=R.name,F=R.value.trim();return P&&F&&(g[P]=F),g},{})}async function Xt(r){if(!y)throw new Error("Attribute verifyurl not set.");x("requesting server verification from",y);const c={payload:r};if(_){const{blockedCountries:P,classifier:F,disableRules:G,email:k,expectedLanguages:C,expectedCountries:Ae,fields:ue,ipAddress:we,text:_e,timeZone:ae}=typeof _=="object"?_:{blockedCountries:void 0,classifier:void 0,disableRules:void 0,email:void 0,expectedCountries:void 0,expectedLanguages:void 0,fields:void 0,ipAddress:void 0,text:void 0,timeZone:void 0};c.blockedCountries=P,c.classifier=F,c.disableRules=G,c.email=k===!1?void 0:Gt(k),c.expectedCountries=Ae,c.expectedLanguages=C||(We?[We]:void 0),c.fields=ue===!1?void 0:Wt(ue),c.ipAddress=we===!1?void 0:we||"auto",c.text=_e,c.timeZone=ae===!1?void 0:ae||Ht()}const g=await fetch(y,{body:JSON.stringify(c),headers:{"content-type":"application/json"},method:"POST"});if(g.status!==200)throw new Error(`Server responded with ${g.status}.`);const R=await g.json();if(R!=null&&R.payload&&t(5,ee=R.payload),Ce("serververification",R),a&&R.classification==="BAD")throw new Error("SpamFilter returned negative classification.")}function Ie(r=20){if(p)if(ge||(ge=(U?document.querySelector(U):b==null?void 0:b.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])'))||b),ge){const c=parseInt(K,10)||12,g=ge.getBoundingClientRect(),R=p.getBoundingClientRect(),P=document.documentElement.clientHeight,F=document.documentElement.clientWidth,G=E==="auto"?g.bottom+R.height+c+r>P:E==="top",k=Math.max(r,Math.min(F-r-R.width,g.left+g.width/2-R.width/2));if(G?t(8,p.style.top=`${g.top-(R.height+c)}px`,p):t(8,p.style.top=`${g.bottom+c}px`,p),t(8,p.style.left=`${k}px`,p),p.setAttribute("data-floating",G?"top":"bottom"),Q){const C=Q.getBoundingClientRect();t(9,Q.style.left=g.left-k+g.width/2-C.width/2+"px",Q)}}else x("unable to find floating anchor element")}function lt(r){r.auto!==void 0&&(t(0,s=r.auto),s==="onload"&&te()),r.floatinganchor!==void 0&&t(18,U=r.floatinganchor),r.delay!==void 0&&t(16,S=r.delay),r.floatingoffset!==void 0&&t(19,K=r.floatingoffset),r.floating!==void 0&&ot(r.floating),r.expire!==void 0&&(me(r.expire),t(17,H=r.expire)),r.challenge&&(Qe(r.challenge),i=r.challenge),r.challengeurl!==void 0&&t(14,u=r.challengeurl),r.debug!==void 0&&t(15,B=!!r.debug),r.hidefooter!==void 0&&t(2,T=!!r.hidefooter),r.hidelogo!==void 0&&t(3,oe=!!r.hidelogo),r.maxnumber!==void 0&&t(20,M=+r.maxnumber),r.mockerror!==void 0&&t(21,L=!!r.mockerror),r.name!==void 0&&t(4,J=r.name),r.refetchonexpire!==void 0&&t(22,I=!!r.refetchonexpire),r.spamfilter!==void 0&&t(23,_=typeof r.spamfilter=="object"?r.spamfilter:!!r.spamfilter),r.strings&&t(34,l=r.strings),r.test!==void 0&&t(24,d=typeof r.test=="number"?r.test:!!r.test),r.verifyurl!==void 0&&t(25,y=r.verifyurl),r.workers!==void 0&&t(26,ce=+r.workers)}function be(r=m.UNVERIFIED,c=null){Y&&(clearTimeout(Y),Y=null),t(7,z=!1),t(10,Le=c),t(5,ee=null),t(6,V=r)}async function te(){return be(m.VERIFYING),await new Promise(r=>setTimeout(r,S||0)),Bt().then(r=>(Qe(r),x("challenge",r),Ut(r))).then(({data:r,solution:c})=>{if(x("solution",c),(c==null?void 0:c.number)!==void 0){if(y)return Xt(Ke(r,c));t(5,ee=Ke(r,c)),x("payload",ee)}else throw x("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."),new Error("Unexpected result returned.")}).then(()=>{_t().then(()=>{t(6,V=m.VERIFIED),t(7,z=!0),x("verified"),Ce("verified",{payload:ee})})}).catch(r=>{x(r),t(6,V=m.ERROR),t(7,z=!1),t(10,Le=r.message)})}function Jt(){z=this.checked,t(7,z)}function zt(r){he[r?"unshift":"push"](()=>{Q=r,t(9,Q)})}function Kt(r){he[r?"unshift":"push"](()=>{p=r,t(8,p)})}return n.$$set=r=>{"auto"in r&&t(0,s=r.auto),"blockspam"in r&&t(27,a=r.blockspam),"challengeurl"in r&&t(14,u=r.challengeurl),"challengejson"in r&&t(28,h=r.challengejson),"debug"in r&&t(15,B=r.debug),"delay"in r&&t(16,S=r.delay),"expire"in r&&t(17,H=r.expire),"floating"in r&&t(1,E=r.floating),"floatinganchor"in r&&t(18,U=r.floatinganchor),"floatingoffset"in r&&t(19,K=r.floatingoffset),"hidefooter"in r&&t(2,T=r.hidefooter),"hidelogo"in r&&t(3,oe=r.hidelogo),"name"in r&&t(4,J=r.name),"maxnumber"in r&&t(20,M=r.maxnumber),"mockerror"in r&&t(21,L=r.mockerror),"refetchonexpire"in r&&t(22,I=r.refetchonexpire),"spamfilter"in r&&t(23,_=r.spamfilter),"strings"in r&&t(29,A=r.strings),"test"in r&&t(24,d=r.test),"verifyurl"in r&&t(25,y=r.verifyurl),"workers"in r&&t(26,ce=r.workers),"workerurl"in r&&t(30,xe=r.workerurl)},n.$$.update=()=>{n.$$.dirty[0]&268435456&&(i=h?Ze(h):void 0),n.$$.dirty[0]&536870912&&t(34,l=A?Ze(A):{}),n.$$.dirty[1]&8&&t(11,o={ariaLinkLabel:Ue,error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:`Protected by <a href="${qe}" target="_blank" aria-label="${l.ariaLinkLabel||Ue}">ALTCHA</a>`,label:"I'm not a robot",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait.",...l}),n.$$.dirty[0]&96&&Ce("statechange",{payload:ee,state:V}),n.$$.dirty[0]&64&&Yt()},[s,E,T,oe,J,ee,V,z,p,Q,Le,o,Zt,rt,u,B,S,H,U,K,M,L,I,_,d,y,ce,a,h,A,xe,lt,be,te,l,Jt,zt,Kt]}class Ye extends At{constructor(e){super(),Lt(this,e,Ot,Ft,ct,{auto:0,blockspam:27,challengeurl:14,challengejson:28,debug:15,delay:16,expire:17,floating:1,floatinganchor:18,floatingoffset:19,hidefooter:2,hidelogo:3,name:4,maxnumber:20,mockerror:21,refetchonexpire:22,spamfilter:23,strings:29,test:24,verifyurl:25,workers:26,workerurl:30,configure:31,reset:32,verify:33},null,[-1,-1,-1])}get auto(){return this.$$.ctx[0]}set auto(e){this.$$set({auto:e}),w()}get blockspam(){return this.$$.ctx[27]}set blockspam(e){this.$$set({blockspam:e}),w()}get challengeurl(){return this.$$.ctx[14]}set challengeurl(e){this.$$set({challengeurl:e}),w()}get challengejson(){return this.$$.ctx[28]}set challengejson(e){this.$$set({challengejson:e}),w()}get debug(){return this.$$.ctx[15]}set debug(e){this.$$set({debug:e}),w()}get delay(){return this.$$.ctx[16]}set delay(e){this.$$set({delay:e}),w()}get expire(){return this.$$.ctx[17]}set expire(e){this.$$set({expire:e}),w()}get floating(){return this.$$.ctx[1]}set floating(e){this.$$set({floating:e}),w()}get floatinganchor(){return this.$$.ctx[18]}set floatinganchor(e){this.$$set({floatinganchor:e}),w()}get floatingoffset(){return this.$$.ctx[19]}set floatingoffset(e){this.$$set({floatingoffset:e}),w()}get hidefooter(){return this.$$.ctx[2]}set hidefooter(e){this.$$set({hidefooter:e}),w()}get hidelogo(){return this.$$.ctx[3]}set hidelogo(e){this.$$set({hidelogo:e}),w()}get name(){return this.$$.ctx[4]}set name(e){this.$$set({name:e}),w()}get maxnumber(){return this.$$.ctx[20]}set maxnumber(e){this.$$set({maxnumber:e}),w()}get mockerror(){return this.$$.ctx[21]}set mockerror(e){this.$$set({mockerror:e}),w()}get refetchonexpire(){return this.$$.ctx[22]}set refetchonexpire(e){this.$$set({refetchonexpire:e}),w()}get spamfilter(){return this.$$.ctx[23]}set spamfilter(e){this.$$set({spamfilter:e}),w()}get strings(){return this.$$.ctx[29]}set strings(e){this.$$set({strings:e}),w()}get test(){return this.$$.ctx[24]}set test(e){this.$$set({test:e}),w()}get verifyurl(){return this.$$.ctx[25]}set verifyurl(e){this.$$set({verifyurl:e}),w()}get workers(){return this.$$.ctx[26]}set workers(e){this.$$set({workers:e}),w()}get workerurl(){return this.$$.ctx[30]}set workerurl(e){this.$$set({workerurl:e}),w()}get configure(){return this.$$.ctx[31]}get reset(){return this.$$.ctx[32]}get verify(){return this.$$.ctx[33]}}customElements.define("altcha-widget",It(Ye,{auto:{},blockspam:{},challengeurl:{},challengejson:{},debug:{type:"Boolean"},delay:{},expire:{},floating:{},floatinganchor:{},floatingoffset:{},hidefooter:{type:"Boolean"},hidelogo:{type:"Boolean"},name:{},maxnumber:{},mockerror:{type:"Boolean"},refetchonexpire:{type:"Boolean"},spamfilter:{type:"Boolean"},strings:{},test:{type:"Boolean"},verifyurl:{},workers:{},workerurl:{}},[],["configure","reset","verify"],!1)),globalThis.createAltchaWorker=n=>new Worker(new URL(n||"./worker.js",typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:D&&D.src||new URL("altcha.umd.cjs",document.baseURI).href)),O.Altcha=Ye,Object.defineProperty(O,Symbol.toStringTag,{value:"Module"})});