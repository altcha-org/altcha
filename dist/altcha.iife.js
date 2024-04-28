var altcha=function(V){"use strict";var Wt=Object.defineProperty;var Bt=(V,S,W)=>S in V?Wt(V,S,{enumerable:!0,configurable:!0,writable:!0,value:W}):V[S]=W;var Z=(V,S,W)=>(Bt(V,typeof S!="symbol"?S+"":S,W),W);function S(){}function W(n){return n()}function pe(){return Object.create(null)}function q(n){n.forEach(W)}function ye(n){return typeof n=="function"}function Xe(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Ke(n){return Object.keys(n).length===0}function w(n,e){n.appendChild(e)}function Je(n,e,t){const i=ze(n);if(!i.getElementById(e)){const l=$("style");l.id=e,l.textContent=t,Qe(i,l)}}function ze(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Qe(n,e){return w(n.head||n,e),e.sheet}function T(n,e,t){n.insertBefore(e,t||null)}function N(n){n.parentNode&&n.parentNode.removeChild(n)}function $(n){return document.createElement(n)}function O(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function qe(n){return document.createTextNode(n)}function U(){return qe(" ")}function ce(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function c(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function et(n){return Array.from(n.childNodes)}function ve(n,e,t){n.classList.toggle(e,!!t)}function tt(n,e,{bubbles:t=!1,cancelable:i=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:i})}function nt(n){const e={};return n.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}let ee;function te(n){ee=n}function ae(){if(!ee)throw new Error("Function called outside component initialization");return ee}function rt(n){ae().$$.on_mount.push(n)}function it(n){ae().$$.on_destroy.push(n)}function lt(){const n=ae();return(e,t,{cancelable:i=!1}={})=>{const l=n.$$.callbacks[e];if(l){const o=tt(e,t,{cancelable:i});return l.slice().forEach(s=>{s.call(n,o)}),!o.defaultPrevented}return!0}}const J=[],fe=[];let z=[];const we=[],_e=Promise.resolve();let ue=!1;function ke(){ue||(ue=!0,_e.then(_))}function ot(){return ke(),_e}function he(n){z.push(n)}const de=new Set;let Q=0;function _(){if(Q!==0)return;const n=ee;do{try{for(;Q<J.length;){const e=J[Q];Q++,te(e),st(e.$$)}}catch(e){throw J.length=0,Q=0,e}for(te(null),J.length=0,Q=0;fe.length;)fe.pop()();for(let e=0;e<z.length;e+=1){const t=z[e];de.has(t)||(de.add(t),t())}z.length=0}while(J.length);for(;we.length;)we.pop()();ue=!1,de.clear(),te(n)}function st(n){if(n.fragment!==null){n.update(),q(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(he)}}function ct(n){const e=[],t=[];z.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),z=e}const at=new Set;function ft(n,e){n&&n.i&&(at.delete(n),n.i(e))}function ut(n,e,t){const{fragment:i,after_update:l}=n.$$;i&&i.m(e,t),he(()=>{const o=n.$$.on_mount.map(W).filter(ye);n.$$.on_destroy?n.$$.on_destroy.push(...o):q(o),n.$$.on_mount=[]}),l.forEach(he)}function ht(n,e){const t=n.$$;t.fragment!==null&&(ct(t.after_update),q(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function dt(n,e){n.$$.dirty[0]===-1&&(J.push(n),ke(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function gt(n,e,t,i,l,o,s=null,a=[-1]){const u=ee;te(n);const f=n.$$={fragment:null,ctx:[],props:o,update:S,not_equal:l,bound:pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:pe(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};s&&s(f.root);let R=!1;if(f.ctx=t?t(n,e.props||{},(g,M,...G)=>{const H=G.length?G[0]:M;return f.ctx&&l(f.ctx[g],f.ctx[g]=H)&&(!f.skip_bound&&f.bound[g]&&f.bound[g](H),R&&dt(n,g)),M}):[],f.update(),R=!0,q(f.before_update),f.fragment=i?i(f.ctx):!1,e.target){if(e.hydrate){const g=et(e.target);f.fragment&&f.fragment.l(g),g.forEach(N)}else f.fragment&&f.fragment.c();e.intro&&ft(n.$$.fragment),ut(n,e.target,e.anchor),_()}te(u)}let xe;typeof HTMLElement=="function"&&(xe=class extends HTMLElement{constructor(e,t,i){super();Z(this,"$$ctor");Z(this,"$$s");Z(this,"$$c");Z(this,"$$cn",!1);Z(this,"$$d",{});Z(this,"$$r",!1);Z(this,"$$p_d",{});Z(this,"$$l",{});Z(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=t,i&&this.attachShadow({mode:"open"})}addEventListener(e,t,i){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const l=this.$$c.$on(e,t);this.$$l_u.set(t,l)}super.addEventListener(e,t,i)}removeEventListener(e,t,i){if(super.removeEventListener(e,t,i),this.$$c){const l=this.$$l_u.get(t);l&&(l(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(o){return()=>{let s;return{c:function(){s=$("slot"),o!=="default"&&c(s,"name",o)},m:function(f,R){T(f,s,R)},d:function(f){f&&N(s)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},i=nt(this);for(const o of this.$$s)o in i&&(t[o]=[e(o)]);for(const o of this.attributes){const s=this.$$g_p(o.name);s in this.$$d||(this.$$d[s]=ne(s,o.value,this.$$p_d,"toProp"))}for(const o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});const l=()=>{this.$$r=!0;for(const o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){const s=ne(o,this.$$d[o],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,s)}this.$$r=!1};this.$$c.$$.after_update.push(l),l();for(const o in this.$$l)for(const s of this.$$l[o]){const a=this.$$c.$on(o,s);this.$$l_u.set(s,a)}this.$$l={}}}attributeChangedCallback(e,t,i){var l;this.$$r||(e=this.$$g_p(e),this.$$d[e]=ne(e,i,this.$$p_d,"toProp"),(l=this.$$c)==null||l.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function ne(n,e,t,i){var o;const l=(o=t[n])==null?void 0:o.type;if(e=l==="Boolean"&&typeof e!="boolean"?e!=null:e,!i||!t[n])return e;if(i==="toAttribute")switch(l){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(l){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function mt(n,e,t,i,l,o){let s=class extends xe{constructor(){super(n,t,l),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Object.keys(e).forEach(a=>{Object.defineProperty(s.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(u){var f;u=ne(a,u,e),this.$$d[a]=u,(f=this.$$c)==null||f.$set({[a]:u})}})}),i.forEach(a=>{Object.defineProperty(s.prototype,a,{get(){var u;return(u=this.$$c)==null?void 0:u[a]}})}),o&&(s=o(s)),n.element=s,s}class bt{constructor(){Z(this,"$$");Z(this,"$$set")}$destroy(){ht(this,1),this.$destroy=S}$on(e,t){if(!ye(t))return S;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const l=i.indexOf(t);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!Ke(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const pt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(pt);const Ee="KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGcodCl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KHQpXS5tYXAoZT0+ZS50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBoKHQsZSxvKXtyZXR1cm4gZyhhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChvLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUodCtlKSkpfWZ1bmN0aW9uIG0odCxlLG89IlNIQS0yNTYiLGk9MWU2LHA9MCl7Y29uc3QgYT1uZXcgQWJvcnRDb250cm9sbGVyO3JldHVybntwcm9taXNlOm5ldyBQcm9taXNlKChzLGMpPT57Y29uc3Qgcj1EYXRlLm5vdygpLGQ9bD0+e2Euc2lnbmFsLmFib3J0ZWR8fGw+aT9zKG51bGwpOmgoZSxsLG8pLnRoZW4odz0+e3c9PT10P3Moe251bWJlcjpsLHRvb2s6RGF0ZS5ub3coKS1yfSk6ZChsKzEpfSkuY2F0Y2goYyl9O2QocCl9KSxjb250cm9sbGVyOmF9fWxldCBuO29ubWVzc2FnZT1hc3luYyB0PT57Y29uc3R7dHlwZTplLHBheWxvYWQ6b309dC5kYXRhO2lmKGU9PT0iYWJvcnQiKW49PW51bGx8fG4uYWJvcnQoKSxuPXZvaWQgMDtlbHNlIGlmKGU9PT0id29yayIpe2NvbnN0e2FsZzppLGNoYWxsZW5nZTpwLG1heDphLHNhbHQ6dSxzdGFydDpzfT1vfHx7fSxjPW0ocCx1LGksYSxzKTtuPWMuY29udHJvbGxlcixjLnByb21pc2UudGhlbihyPT57c2VsZi5wb3N0TWVzc2FnZShyJiZ7Li4ucix3b3JrZXI6ITB9KX0pfX19KSgpOwo=",yt=n=>Uint8Array.from(atob(n),e=>e.charCodeAt(0)),$e=typeof window<"u"&&window.Blob&&new Blob([yt(Ee)],{type:"text/javascript;charset=utf-8"});function vt(n){let e;try{if(e=$e&&(window.URL||window.webkitURL).createObjectURL($e),!e)throw"";const t=new Worker(e,{name:n==null?void 0:n.name});return t.addEventListener("error",()=>{(window.URL||window.webkitURL).revokeObjectURL(e)}),t}catch{return new Worker("data:text/javascript;base64,"+Ee,{name:n==null?void 0:n.name})}finally{e&&(window.URL||window.webkitURL).revokeObjectURL(e)}}const wt=new TextEncoder;function _t(n){return[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function kt(n,e="SHA-256",t=1e5){const i=Date.now().toString(16);n||(n=Math.round(Math.random()*t));const l=await Ce(i,n,e);return{algorithm:e,challenge:l,salt:i,signature:""}}async function Ce(n,e,t){return _t(await crypto.subtle.digest(t.toUpperCase(),wt.encode(n+e)))}function xt(n,e,t="SHA-256",i=1e6,l=0){const o=new AbortController;return{promise:new Promise((a,u)=>{const f=Date.now(),R=g=>{o.signal.aborted||g>i?a(null):Ce(e,g,t).then(M=>{M===n?a({number:g,took:Date.now()-f}):R(g+1)}).catch(u)};R(l)}),controller:o}}var y=(n=>(n.ERROR="error",n.VERIFIED="verified",n.VERIFYING="verifying",n.UNVERIFIED="unverified",n.EXPIRED="expired",n))(y||{});function Et(n){Je(n,"svelte-14ngypa",`.altcha.svelte-14ngypa.svelte-14ngypa{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid
      var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);overflow:hidden;position:relative;text-align:left}.altcha.svelte-14ngypa.svelte-14ngypa:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-14ngypa.svelte-14ngypa{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-14ngypa.svelte-14ngypa{flex-grow:1}.altcha-label.svelte-14ngypa label.svelte-14ngypa{cursor:pointer}.altcha-logo.svelte-14ngypa.svelte-14ngypa{color:currentColor;opacity:0.3}.altcha-logo.svelte-14ngypa.svelte-14ngypa:hover{opacity:1}.altcha-error.svelte-14ngypa.svelte-14ngypa{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-14ngypa.svelte-14ngypa{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-14ngypa.svelte-14ngypa:hover{opacity:1}.altcha-footer.svelte-14ngypa>.svelte-14ngypa:first-child{flex-grow:1}.altcha-footer.svelte-14ngypa a{color:currentColor}.altcha-checkbox.svelte-14ngypa.svelte-14ngypa{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-14ngypa input.svelte-14ngypa{width:18px;height:18px;margin:0}.altcha-hidden.svelte-14ngypa.svelte-14ngypa{display:none}.altcha-spinner.svelte-14ngypa.svelte-14ngypa{animation:svelte-14ngypa-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-14ngypa-altcha-spinner{100%{transform:rotate(360deg)}}`)}function Le(n){let e,t,i;return{c(){e=O("svg"),t=O("path"),i=O("path"),c(t,"d","M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"),c(t,"fill","currentColor"),c(t,"opacity",".25"),c(i,"d","M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"),c(i,"fill","currentColor"),c(i,"class","altcha-spinner svelte-14ngypa"),c(e,"width","24"),c(e,"height","24"),c(e,"viewBox","0 0 24 24"),c(e,"xmlns","http://www.w3.org/2000/svg")},m(l,o){T(l,e,o),w(e,t),w(e,i)},d(l){l&&N(e)}}}function $t(n){let e,t=n[9].label+"",i;return{c(){e=$("label"),c(e,"for",i=n[3]+"_checkbox"),c(e,"class","svelte-14ngypa")},m(l,o){T(l,e,o),e.innerHTML=t},p(l,o){o[0]&512&&t!==(t=l[9].label+"")&&(e.innerHTML=t),o[0]&8&&i!==(i=l[3]+"_checkbox")&&c(e,"for",i)},d(l){l&&N(e)}}}function Ct(n){let e,t=n[9].verifying+"";return{c(){e=$("span")},m(i,l){T(i,e,l),e.innerHTML=t},p(i,l){l[0]&512&&t!==(t=i[9].verifying+"")&&(e.innerHTML=t)},d(i){i&&N(e)}}}function Lt(n){let e,t=n[9].verified+"",i,l;return{c(){e=$("span"),i=U(),l=$("input"),c(l,"type","hidden"),c(l,"name",n[3]),l.value=n[4]},m(o,s){T(o,e,s),e.innerHTML=t,T(o,i,s),T(o,l,s)},p(o,s){s[0]&512&&t!==(t=o[9].verified+"")&&(e.innerHTML=t),s[0]&8&&c(l,"name",o[3]),s[0]&16&&(l.value=o[4])},d(o){o&&(N(e),N(i),N(l))}}}function Ie(n){let e,t,i,l,o,s;return{c(){e=$("div"),t=$("a"),i=O("svg"),l=O("path"),o=O("path"),s=O("path"),c(l,"d","M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"),c(l,"fill","currentColor"),c(o,"d","M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"),c(o,"fill","currentColor"),c(s,"d","M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"),c(s,"fill","currentColor"),c(i,"width","22"),c(i,"height","22"),c(i,"viewBox","0 0 20 20"),c(i,"fill","none"),c(i,"xmlns","http://www.w3.org/2000/svg"),c(t,"href",Ne),c(t,"target","_blank"),c(t,"class","altcha-logo svelte-14ngypa")},m(a,u){T(a,e,u),w(e,t),w(t,i),w(i,l),w(i,o),w(i,s)},p:S,d(a){a&&N(e)}}}function Re(n){let e,t,i,l;function o(u,f){return u[5]===y.EXPIRED?Rt:It}let s=o(n),a=s(n);return{c(){e=$("div"),t=O("svg"),i=O("path"),l=U(),a.c(),c(i,"stroke-linecap","round"),c(i,"stroke-linejoin","round"),c(i,"d","M6 18L18 6M6 6l12 12"),c(t,"width","14"),c(t,"height","14"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"fill","none"),c(t,"viewBox","0 0 24 24"),c(t,"stroke-width","1.5"),c(t,"stroke","currentColor"),c(e,"class","altcha-error svelte-14ngypa")},m(u,f){T(u,e,f),w(e,t),w(t,i),w(e,l),a.m(e,null)},p(u,f){s===(s=o(u))&&a?a.p(u,f):(a.d(1),a=s(u),a&&(a.c(),a.m(e,null)))},d(u){u&&N(e),a.d()}}}function It(n){let e,t=n[9].error+"";return{c(){e=$("div"),c(e,"title",n[8])},m(i,l){T(i,e,l),e.innerHTML=t},p(i,l){l[0]&512&&t!==(t=i[9].error+"")&&(e.innerHTML=t),l[0]&256&&c(e,"title",i[8])},d(i){i&&N(e)}}}function Rt(n){let e,t=n[9].expired+"";return{c(){e=$("div"),c(e,"title",n[8])},m(i,l){T(i,e,l),e.innerHTML=t},p(i,l){l[0]&512&&t!==(t=i[9].expired+"")&&(e.innerHTML=t),l[0]&256&&c(e,"title",i[8])},d(i){i&&N(e)}}}function Se(n){let e,t,i=n[9].footer+"";return{c(){e=$("div"),t=$("div"),c(t,"class","svelte-14ngypa"),c(e,"class","altcha-footer svelte-14ngypa")},m(l,o){T(l,e,o),w(e,t),t.innerHTML=i},p(l,o){o[0]&512&&i!==(i=l[9].footer+"")&&(t.innerHTML=i)},d(l){l&&N(e)}}}function St(n){let e,t,i,l,o,s,a,u,f,R,g,M,G,H,k=n[5]===y.VERIFYING&&Le();function Y(d,I){return d[5]===y.VERIFIED?Lt:d[5]===y.VERIFYING?Ct:$t}let P=Y(n),x=P(n),E=n[2]!==!0&&Ie(),m=(n[8]||n[5]===y.EXPIRED)&&Re(n),v=n[9].footer&&n[1]!==!0&&Se(n);return{c(){e=$("div"),t=$("div"),k&&k.c(),i=U(),l=$("div"),o=$("input"),u=U(),f=$("div"),x.c(),R=U(),E&&E.c(),g=U(),m&&m.c(),M=U(),v&&v.c(),c(o,"type","checkbox"),c(o,"id",s=n[3]+"_checkbox"),o.required=a=n[0]!=="onsubmit",c(o,"class","svelte-14ngypa"),c(l,"class","altcha-checkbox svelte-14ngypa"),ve(l,"altcha-hidden",n[5]===y.VERIFYING),c(f,"class","altcha-label svelte-14ngypa"),c(t,"class","altcha-main svelte-14ngypa"),c(e,"class","altcha svelte-14ngypa"),c(e,"data-state",n[5])},m(d,I){T(d,e,I),w(e,t),k&&k.m(t,null),w(t,i),w(t,l),w(l,o),o.checked=n[6],w(t,u),w(t,f),x.m(f,null),w(t,R),E&&E.m(t,null),w(e,g),m&&m.m(e,null),w(e,M),v&&v.m(e,null),n[30](e),G||(H=[ce(o,"change",n[29]),ce(o,"change",n[10]),ce(o,"invalid",n[11])],G=!0)},p(d,I){d[5]===y.VERIFYING?k||(k=Le(),k.c(),k.m(t,i)):k&&(k.d(1),k=null),I[0]&8&&s!==(s=d[3]+"_checkbox")&&c(o,"id",s),I[0]&1&&a!==(a=d[0]!=="onsubmit")&&(o.required=a),I[0]&64&&(o.checked=d[6]),I[0]&32&&ve(l,"altcha-hidden",d[5]===y.VERIFYING),P===(P=Y(d))&&x?x.p(d,I):(x.d(1),x=P(d),x&&(x.c(),x.m(f,null))),d[2]!==!0?E?E.p(d,I):(E=Ie(),E.c(),E.m(t,null)):E&&(E.d(1),E=null),d[8]||d[5]===y.EXPIRED?m?m.p(d,I):(m=Re(d),m.c(),m.m(e,M)):m&&(m.d(1),m=null),d[9].footer&&d[1]!==!0?v?v.p(d,I):(v=Se(d),v.c(),v.m(e,null)):v&&(v.d(1),v=null),I[0]&32&&c(e,"data-state",d[5])},i:S,o:S,d(d){d&&N(e),k&&k.d(),x.d(),E&&E.d(),m&&m.d(),v&&v.d(),n[30](null),G=!1,q(H)}}}const Ne="https://altcha.org/";function Te(n){return JSON.parse(n)}function Nt(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function Tt(n,e,t){var Fe,We;let i,l,o,{auto:s=void 0}=e,{blockspam:a=void 0}=e,{challengeurl:u=void 0}=e,{challengejson:f=void 0}=e,{debug:R=!1}=e,{expire:g=void 0}=e,{hidefooter:M=!1}=e,{hidelogo:G=!1}=e,{name:H="altcha"}=e,{maxnumber:k=1e6}=e,{mockerror:Y=!1}=e,{refetchonexpire:P=!0}=e,{spamfilter:x=!1}=e,{strings:E=void 0}=e,{test:m=!1}=e,{verifyurl:v=void 0}=e,{workers:d=navigator.hardwareConcurrency||8}=e;const I=lt(),je=["SHA-256","SHA-384","SHA-512"],Me=(We=(Fe=document.documentElement.lang)==null?void 0:Fe.split("-"))==null?void 0:We[0];let B=!1,re,b=null,ge=null,X=null,D=y.UNVERIFIED,me;it(()=>{b&&(b.removeEventListener("submit",Ge),b.removeEventListener("reset",Ve),b.removeEventListener("focusin",Ze),b=null)}),rt(()=>{C("mounted","0.2.3"),C("workers",d),m&&C("using test mode"),g&&be(g),s!==void 0&&C("auto",s),b=re.closest("form"),b&&(b.addEventListener("submit",Ge),b.addEventListener("reset",Ve),s==="onfocus"&&b.addEventListener("focusin",Ze)),s==="onload"&&K()});function C(...r){(R||r.some(h=>h instanceof Error))&&console[r[0]instanceof Error?"error":"log"]("ALTCHA",...r)}function Ze(r){K()}function Ge(r){b&&s==="onsubmit"&&D===y.UNVERIFIED&&(r.preventDefault(),r.stopPropagation(),K().then(()=>{b==null||b.requestSubmit()}))}function Ve(){ie()}function Oe(r,h){return btoa(JSON.stringify({algorithm:r.algorithm,challenge:r.challenge,number:h.number,salt:r.salt,signature:r.signature,test:m?!0:void 0,took:h.took}))}function He(r){if(!r.algorithm)throw new Error("Invalid challenge. Property algorithm is missing.");if(r.signature===void 0)throw new Error("Invalid challenge. Property signature is missing.");if(!je.includes(r.algorithm.toUpperCase()))throw new Error(`Unknown algorithm value. Allowed values: ${je.join(", ")}`);if(!r.challenge||r.challenge.length<40)throw new Error("Challenge is too short. Min. 40 chars.");if(!r.salt||r.salt.length<10)throw new Error("Salt is too short. Min. 10 chars.")}async function At(){if(Y)throw C("mocking error"),new Error("Mocked error.");if(i)return C("using provided json data"),i;if(m)return C("generating test challenge"),kt(typeof m!="boolean"?+m:void 0);{if(!u)throw new Error("Attribute challengeurl not set.");C("fetching challenge from",u);const r=await fetch(u,{headers:{"x-altcha-spam-filter":x?"1":"0"}});if(r.status!==200)throw new Error(`Server responded with ${r.status}.`);const h=r.headers.get("Expires"),L=r.headers.get("X-Altcha-Config");if(L)try{const p=JSON.parse(L);p&&typeof p=="object"&&(p.verifyurl&&(p.verifyurl=new URL(p.verifyurl,new URL(u)).toString()),De(p))}catch(p){C("unable to configure from X-Altcha-Config",p)}if(!g&&(h!=null&&h.length)){const p=Date.parse(h);if(p){const A=p-Date.now();A>0&&be(A)}}return r.json()}}function Pe(){u&&P&&D===y.VERIFIED?K():ie(y.EXPIRED,o.expired)}async function jt(r){let h=null;if("Worker"in window){try{h=await Mt(r.challenge,r.salt,r.algorithm,r.maxnumber)}catch(L){C(L)}if((h==null?void 0:h.number)!==void 0)return{data:r,solution:h}}return{data:r,solution:await xt(r.challenge,r.salt,r.algorithm,r.maxnumber||k).promise}}async function Mt(r,h,L,p=k,A=Math.ceil(d)){const F=[];if(A<1)throw new Error("Wrong number of workers configured.");if(A>16)throw new Error("Too many workers. Max. 16 allowed workers.");for(let j=0;j<A;j++)F.push(new vt);const le=Math.ceil(p/A),oe=await Promise.all(F.map((j,se)=>{const Be=se*le;return new Promise(Ft=>{j.addEventListener("message",Ue=>{if(Ue.data)for(const Ye of F)Ye!==j&&Ye.postMessage({type:"abort"});Ft(Ue.data)}),j.postMessage({payload:{alg:L,challenge:r,max:Be+le,salt:h,start:Be},type:"work"})})}));for(const j of F)j.terminate();return oe.find(j=>!!j)||null}function Zt(){[y.UNVERIFIED,y.ERROR,y.EXPIRED].includes(D)?x&&(b==null?void 0:b.reportValidity())===!1?t(6,B=!1):K():t(6,B=!0)}function Gt(){D===y.VERIFYING&&alert(o.waitAlert)}function be(r){C("expire",r),clearTimeout(me),r<1?Pe():me=setTimeout(Pe,r)}function Vt(r){var L;const h=b==null?void 0:b.querySelector(typeof r=="string"?`input[name="${r}"]`:'input[type="email"]:not([data-no-spamfilter])');return((L=h==null?void 0:h.value)==null?void 0:L.slice(h.value.indexOf("@")))||void 0}function Ot(r){return[...(b==null?void 0:b.querySelectorAll(r!=null&&r.length?r.map(L=>`input[name="${L}"]`).join(", "):'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])'))||[]].reduce((L,p)=>{const A=p.name,F=p.value.trim();return A&&F&&(L[A]=F),L},{})}async function Ht(r){if(!v)throw new Error("Attribute verifyurl not set.");C("requesting server verification from",v);const h={payload:r};if(x){const{email:A,expectedLanguages:F,expectedCountries:le,fields:oe,ipAddress:j,timeZone:se}=typeof x=="object"?x:{email:void 0,expectedCountries:void 0,expectedLanguages:void 0,fields:void 0,ipAddress:void 0,timeZone:void 0};h.ipAddress=j===!1?void 0:j||"auto",h.email=A===!1?void 0:Vt(A),h.fields=oe===!1?void 0:Ot(oe),h.timeZone=se===!1?void 0:se||Nt(),h.expectedCountries=le,h.expectedLanguages=F||(Me?[Me]:void 0)}const L=await fetch(v,{body:JSON.stringify(h),headers:{"content-type":"application/json"},method:"POST"});if(L.status!==200)throw new Error(`Server responded with ${L.status}.`);const p=await L.json();if(p!=null&&p.payload&&t(4,X=p.payload),I("serververification",p),a&&p.classification==="BAD")throw new Error("SpamFilter returned negative classification.")}function De(r){r.auto!==void 0&&(t(0,s=r.auto),s==="onload"&&K()),r.expire!==void 0&&(be(r.expire),t(13,g=r.expire)),r.challenge&&(He(r.challenge),i=r.challenge),r.debug!==void 0&&t(12,R=!!r.debug),r.hidefooter!==void 0&&t(1,M=!!r.hidefooter),r.hidelogo!==void 0&&t(2,G=!!r.hidelogo),r.maxnumber!==void 0&&t(14,k=+r.maxnumber),r.mockerror!==void 0&&t(15,Y=!!r.mockerror),r.name!==void 0&&t(3,H=r.name),r.refetchonexpire!==void 0&&t(16,P=!!r.refetchonexpire),r.spamfilter!==void 0&&t(17,x=r.spamfilter),r.strings&&t(28,l=r.strings),r.test!==void 0&&t(18,m=!!r.test),r.verifyurl!==void 0&&t(19,v=r.verifyurl),r.workers!==void 0&&t(20,d=+r.workers)}function ie(r=y.UNVERIFIED,h=null){clearTimeout(me),t(6,B=!1),t(8,ge=h),t(4,X=null),t(5,D=r)}async function K(){return ie(y.VERIFYING),At().then(r=>(He(r),C("challenge",r),jt(r))).then(({data:r,solution:h})=>{if(C("solution",h),(h==null?void 0:h.number)!==void 0){if(v)return Ht(Oe(r,h));t(4,X=Oe(r,h)),C("payload",X)}else throw C("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."),new Error("Unexpected result returned.")}).then(()=>{ot().then(()=>{t(5,D=y.VERIFIED),t(6,B=!0),C("verified"),I("verified",{payload:X})})}).catch(r=>{C(r),t(5,D=y.ERROR),t(6,B=!1),t(8,ge=r.message)})}function Pt(){B=this.checked,t(6,B)}function Dt(r){fe[r?"unshift":"push"](()=>{re=r,t(7,re)})}return n.$$set=r=>{"auto"in r&&t(0,s=r.auto),"blockspam"in r&&t(21,a=r.blockspam),"challengeurl"in r&&t(22,u=r.challengeurl),"challengejson"in r&&t(23,f=r.challengejson),"debug"in r&&t(12,R=r.debug),"expire"in r&&t(13,g=r.expire),"hidefooter"in r&&t(1,M=r.hidefooter),"hidelogo"in r&&t(2,G=r.hidelogo),"name"in r&&t(3,H=r.name),"maxnumber"in r&&t(14,k=r.maxnumber),"mockerror"in r&&t(15,Y=r.mockerror),"refetchonexpire"in r&&t(16,P=r.refetchonexpire),"spamfilter"in r&&t(17,x=r.spamfilter),"strings"in r&&t(24,E=r.strings),"test"in r&&t(18,m=r.test),"verifyurl"in r&&t(19,v=r.verifyurl),"workers"in r&&t(20,d=r.workers)},n.$$.update=()=>{n.$$.dirty[0]&8388608&&(i=f?Te(f):void 0),n.$$.dirty[0]&16777216&&t(28,l=E?Te(E):{}),n.$$.dirty[0]&268435456&&t(9,o={error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:`Protected by <a href="${Ne}" target="_blank">ALTCHA</a>`,label:"I'm not a robot",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait.",...l}),n.$$.dirty[0]&48&&I("statechange",{payload:X,state:D})},[s,M,G,H,X,D,B,re,ge,o,Zt,Gt,R,g,k,Y,P,x,m,v,d,a,u,f,E,De,ie,K,l,Pt,Dt]}class Ae extends bt{constructor(e){super(),gt(this,e,Tt,St,Xe,{auto:0,blockspam:21,challengeurl:22,challengejson:23,debug:12,expire:13,hidefooter:1,hidelogo:2,name:3,maxnumber:14,mockerror:15,refetchonexpire:16,spamfilter:17,strings:24,test:18,verifyurl:19,workers:20,configure:25,reset:26,verify:27},Et,[-1,-1])}get auto(){return this.$$.ctx[0]}set auto(e){this.$$set({auto:e}),_()}get blockspam(){return this.$$.ctx[21]}set blockspam(e){this.$$set({blockspam:e}),_()}get challengeurl(){return this.$$.ctx[22]}set challengeurl(e){this.$$set({challengeurl:e}),_()}get challengejson(){return this.$$.ctx[23]}set challengejson(e){this.$$set({challengejson:e}),_()}get debug(){return this.$$.ctx[12]}set debug(e){this.$$set({debug:e}),_()}get expire(){return this.$$.ctx[13]}set expire(e){this.$$set({expire:e}),_()}get hidefooter(){return this.$$.ctx[1]}set hidefooter(e){this.$$set({hidefooter:e}),_()}get hidelogo(){return this.$$.ctx[2]}set hidelogo(e){this.$$set({hidelogo:e}),_()}get name(){return this.$$.ctx[3]}set name(e){this.$$set({name:e}),_()}get maxnumber(){return this.$$.ctx[14]}set maxnumber(e){this.$$set({maxnumber:e}),_()}get mockerror(){return this.$$.ctx[15]}set mockerror(e){this.$$set({mockerror:e}),_()}get refetchonexpire(){return this.$$.ctx[16]}set refetchonexpire(e){this.$$set({refetchonexpire:e}),_()}get spamfilter(){return this.$$.ctx[17]}set spamfilter(e){this.$$set({spamfilter:e}),_()}get strings(){return this.$$.ctx[24]}set strings(e){this.$$set({strings:e}),_()}get test(){return this.$$.ctx[18]}set test(e){this.$$set({test:e}),_()}get verifyurl(){return this.$$.ctx[19]}set verifyurl(e){this.$$set({verifyurl:e}),_()}get workers(){return this.$$.ctx[20]}set workers(e){this.$$set({workers:e}),_()}get configure(){return this.$$.ctx[25]}get reset(){return this.$$.ctx[26]}get verify(){return this.$$.ctx[27]}}return customElements.define("altcha-widget",mt(Ae,{auto:{},blockspam:{},challengeurl:{},challengejson:{},debug:{type:"Boolean"},expire:{},hidefooter:{type:"Boolean"},hidelogo:{type:"Boolean"},name:{},maxnumber:{},mockerror:{type:"Boolean"},refetchonexpire:{type:"Boolean"},spamfilter:{type:"Boolean"},strings:{},test:{type:"Boolean"},verifyurl:{},workers:{}},[],["configure","reset","verify"],!1)),V.Altcha=Ae,Object.defineProperty(V,Symbol.toStringTag,{value:"Module"}),V}({});
