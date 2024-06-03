var altcha=function(O){"use strict";var Ft=Object.defineProperty;var Ht=(O,z,P)=>z in O?Ft(O,z,{enumerable:!0,configurable:!0,writable:!0,value:P}):O[z]=P;var M=(O,z,P)=>(Ht(O,typeof z!="symbol"?z+"":z,P),P);function z(){}function P(r){return r()}function ye(){return Object.create(null)}function re(r){r.forEach(P)}function ve(r){return typeof r=="function"}function We(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function Be(r){return Object.keys(r).length===0}function v(r,e){r.appendChild(e)}function Ke(r,e,t){const i=Je(r);if(!i.getElementById(e)){const o=C("style");o.id=e,o.textContent=t,Qe(i,o)}}function Je(r){if(!r)return document;const e=r.getRootNode?r.getRootNode():r.ownerDocument;return e&&e.host?e:r.ownerDocument}function Qe(r,e){return v(r.head||r,e),e.sheet}function j(r,e,t){r.insertBefore(e,t||null)}function N(r){r.parentNode&&r.parentNode.removeChild(r)}function C(r){return document.createElement(r)}function X(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function qe(r){return document.createTextNode(r)}function W(){return qe(" ")}function fe(r,e,t,i){return r.addEventListener(e,t,i),()=>r.removeEventListener(e,t,i)}function c(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function et(r){return Array.from(r.childNodes)}function we(r,e,t){r.classList.toggle(e,!!t)}function tt(r,e,{bubbles:t=!1,cancelable:i=!1}={}){return new CustomEvent(r,{detail:e,bubbles:t,cancelable:i})}function rt(r){const e={};return r.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}let ne;function ie(r){ne=r}function ue(){if(!ne)throw new Error("Function called outside component initialization");return ne}function nt(r){ue().$$.on_mount.push(r)}function it(r){ue().$$.on_destroy.push(r)}function ot(){const r=ue();return(e,t,{cancelable:i=!1}={})=>{const o=r.$$.callbacks[e];if(o){const l=tt(e,t,{cancelable:i});return o.slice().forEach(s=>{s.call(r,l)}),!l.defaultPrevented}return!0}}const q=[],he=[];let ee=[];const pe=[],_e=Promise.resolve();let de=!1;function ke(){de||(de=!0,_e.then(p))}function lt(){return ke(),_e}function me(r){ee.push(r)}const ge=new Set;let te=0;function p(){if(te!==0)return;const r=ne;do{try{for(;te<q.length;){const e=q[te];te++,ie(e),st(e.$$)}}catch(e){throw q.length=0,te=0,e}for(ie(null),q.length=0,te=0;he.length;)he.pop()();for(let e=0;e<ee.length;e+=1){const t=ee[e];ge.has(t)||(ge.add(t),t())}ee.length=0}while(q.length);for(;pe.length;)pe.pop()();de=!1,ge.clear(),ie(r)}function st(r){if(r.fragment!==null){r.update(),re(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(me)}}function ct(r){const e=[],t=[];ee.forEach(i=>r.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),ee=e}const at=new Set;function ft(r,e){r&&r.i&&(at.delete(r),r.i(e))}function ut(r,e,t){const{fragment:i,after_update:o}=r.$$;i&&i.m(e,t),me(()=>{const l=r.$$.on_mount.map(P).filter(ve);r.$$.on_destroy?r.$$.on_destroy.push(...l):re(l),r.$$.on_mount=[]}),o.forEach(me)}function ht(r,e){const t=r.$$;t.fragment!==null&&(ct(t.after_update),re(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function dt(r,e){r.$$.dirty[0]===-1&&(q.push(r),ke(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function mt(r,e,t,i,o,l,s=null,f=[-1]){const a=ne;ie(r);const h=r.$$={fragment:null,ctx:[],props:l,update:z,not_equal:o,bound:ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:ye(),dirty:f,skip_bound:!1,root:e.target||a.$$.root};s&&s(h.root);let A=!1;if(h.ctx=t?t(r,e.props||{},(L,V,...U)=>{const F=U.length?U[0]:V;return h.ctx&&o(h.ctx[L],h.ctx[L]=F)&&(!h.skip_bound&&h.bound[L]&&h.bound[L](F),A&&dt(r,L)),V}):[],h.update(),A=!0,re(h.before_update),h.fragment=i?i(h.ctx):!1,e.target){if(e.hydrate){const L=et(e.target);h.fragment&&h.fragment.l(L),L.forEach(N)}else h.fragment&&h.fragment.c();e.intro&&ft(r.$$.fragment),ut(r,e.target,e.anchor),p()}ie(a)}let xe;typeof HTMLElement=="function"&&(xe=class extends HTMLElement{constructor(e,t,i){super();M(this,"$$ctor");M(this,"$$s");M(this,"$$c");M(this,"$$cn",!1);M(this,"$$d",{});M(this,"$$r",!1);M(this,"$$p_d",{});M(this,"$$l",{});M(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=t,i&&this.attachShadow({mode:"open"})}addEventListener(e,t,i){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const o=this.$$c.$on(e,t);this.$$l_u.set(t,o)}super.addEventListener(e,t,i)}removeEventListener(e,t,i){if(super.removeEventListener(e,t,i),this.$$c){const o=this.$$l_u.get(t);o&&(o(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(l){return()=>{let s;return{c:function(){s=C("slot"),l!=="default"&&c(s,"name",l)},m:function(h,A){j(h,s,A)},d:function(h){h&&N(s)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},i=rt(this);for(const l of this.$$s)l in i&&(t[l]=[e(l)]);for(const l of this.attributes){const s=this.$$g_p(l.name);s in this.$$d||(this.$$d[s]=oe(s,l.value,this.$$p_d,"toProp"))}for(const l in this.$$p_d)!(l in this.$$d)&&this[l]!==void 0&&(this.$$d[l]=this[l],delete this[l]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});const o=()=>{this.$$r=!0;for(const l in this.$$p_d)if(this.$$d[l]=this.$$c.$$.ctx[this.$$c.$$.props[l]],this.$$p_d[l].reflect){const s=oe(l,this.$$d[l],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[l].attribute||l):this.setAttribute(this.$$p_d[l].attribute||l,s)}this.$$r=!1};this.$$c.$$.after_update.push(o),o();for(const l in this.$$l)for(const s of this.$$l[l]){const f=this.$$c.$on(l,s);this.$$l_u.set(s,f)}this.$$l={}}}attributeChangedCallback(e,t,i){var o;this.$$r||(e=this.$$g_p(e),this.$$d[e]=oe(e,i,this.$$p_d,"toProp"),(o=this.$$c)==null||o.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function oe(r,e,t,i){var l;const o=(l=t[r])==null?void 0:l.type;if(e=o==="Boolean"&&typeof e!="boolean"?e!=null:e,!i||!t[r])return e;if(i==="toAttribute")switch(o){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function gt(r,e,t,i,o,l){let s=class extends xe{constructor(){super(r,t,o),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(f=>(e[f].attribute||f).toLowerCase())}};return Object.keys(e).forEach(f=>{Object.defineProperty(s.prototype,f,{get(){return this.$$c&&f in this.$$c?this.$$c[f]:this.$$d[f]},set(a){var h;a=oe(f,a,e),this.$$d[f]=a,(h=this.$$c)==null||h.$set({[f]:a})}})}),i.forEach(f=>{Object.defineProperty(s.prototype,f,{get(){var a;return(a=this.$$c)==null?void 0:a[f]}})}),l&&(s=l(s)),r.element=s,s}class bt{constructor(){M(this,"$$");M(this,"$$set")}$destroy(){ht(this,1),this.$destroy=z}$on(e,t){if(!ve(t))return z;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!Be(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const yt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(yt);const Ee="KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGQoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBwKGUsdCxvKXtyZXR1cm4gZChhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChvLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUoZSt0KSkpfWZ1bmN0aW9uIGcoZSx0LG89IlNIQS0yNTYiLGw9MWU2LGM9MCl7Y29uc3QgYT1uZXcgQWJvcnRDb250cm9sbGVyLGk9RGF0ZS5ub3coKTtyZXR1cm57cHJvbWlzZTooYXN5bmMoKT0+e2ZvcihsZXQgbj1jO248PWw7bis9MSl7aWYoYS5zaWduYWwuYWJvcnRlZClyZXR1cm4gbnVsbDtpZihhd2FpdCBwKHQsbixvKT09PWUpcmV0dXJue251bWJlcjpuLHRvb2s6RGF0ZS5ub3coKS1pfX1yZXR1cm4gbnVsbH0pKCksY29udHJvbGxlcjphfX1sZXQgcjtvbm1lc3NhZ2U9YXN5bmMgZT0+e2NvbnN0e3R5cGU6dCxwYXlsb2FkOm99PWUuZGF0YTtpZih0PT09ImFib3J0IilyPT1udWxsfHxyLmFib3J0KCkscj12b2lkIDA7ZWxzZSBpZih0PT09IndvcmsiKXtjb25zdHthbGc6bCxjaGFsbGVuZ2U6YyxtYXg6YSxzYWx0Omksc3RhcnQ6dX09b3x8e30sbj1nKGMsaSxsLGEsdSk7cj1uLmNvbnRyb2xsZXIsbi5wcm9taXNlLnRoZW4ocz0+e3NlbGYucG9zdE1lc3NhZ2UocyYmey4uLnMsd29ya2VyOiEwfSl9KX19fSkoKTsK",vt=r=>Uint8Array.from(atob(r),e=>e.charCodeAt(0)),$e=typeof window<"u"&&window.Blob&&new Blob([vt(Ee)],{type:"text/javascript;charset=utf-8"});function wt(r){let e;try{if(e=$e&&(window.URL||window.webkitURL).createObjectURL($e),!e)throw"";const t=new Worker(e,{name:r==null?void 0:r.name});return t.addEventListener("error",()=>{(window.URL||window.webkitURL).revokeObjectURL(e)}),t}catch{return new Worker("data:text/javascript;base64,"+Ee,{name:r==null?void 0:r.name})}finally{e&&(window.URL||window.webkitURL).revokeObjectURL(e)}}const pt=new TextEncoder;function _t(r){return[...new Uint8Array(r)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function kt(r,e="SHA-256",t=1e5){const i=Date.now().toString(16);r||(r=Math.round(Math.random()*t));const o=await Ce(i,r,e);return{algorithm:e,challenge:o,salt:i,signature:""}}async function Ce(r,e,t){return _t(await crypto.subtle.digest(t.toUpperCase(),pt.encode(r+e)))}function xt(r,e,t="SHA-256",i=1e6,o=0){const l=new AbortController,s=Date.now();return{promise:(async()=>{for(let a=o;a<=i;a+=1){if(l.signal.aborted)return null;if(await Ce(e,a,t)===r)return{number:a,took:Date.now()-s}}return null})(),controller:l}}var g=(r=>(r.ERROR="error",r.VERIFIED="verified",r.VERIFYING="verifying",r.UNVERIFIED="unverified",r.EXPIRED="expired",r))(g||{});function Et(r){Ke(r,"svelte-15co9zy",".altcha.svelte-15co9zy.svelte-15co9zy{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);overflow:hidden;position:relative;text-align:left}.altcha.svelte-15co9zy.svelte-15co9zy:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-15co9zy.svelte-15co9zy{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-15co9zy.svelte-15co9zy{flex-grow:1}.altcha-label.svelte-15co9zy label.svelte-15co9zy{cursor:pointer}.altcha-logo.svelte-15co9zy.svelte-15co9zy{color:currentColor;opacity:0.3}.altcha-logo.svelte-15co9zy.svelte-15co9zy:hover{opacity:1}.altcha-error.svelte-15co9zy.svelte-15co9zy{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-15co9zy.svelte-15co9zy{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-15co9zy.svelte-15co9zy:hover{opacity:1}.altcha-footer.svelte-15co9zy>.svelte-15co9zy:first-child{flex-grow:1}.altcha-footer.svelte-15co9zy a{color:currentColor}.altcha-checkbox.svelte-15co9zy.svelte-15co9zy{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-15co9zy input.svelte-15co9zy{width:18px;height:18px;margin:0}.altcha-hidden.svelte-15co9zy.svelte-15co9zy{display:none}.altcha-spinner.svelte-15co9zy.svelte-15co9zy{animation:svelte-15co9zy-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-15co9zy-altcha-spinner{100%{transform:rotate(360deg)}}")}function Le(r){let e,t,i;return{c(){e=X("svg"),t=X("path"),i=X("path"),c(t,"d","M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"),c(t,"fill","currentColor"),c(t,"opacity",".25"),c(i,"d","M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"),c(i,"fill","currentColor"),c(i,"class","altcha-spinner svelte-15co9zy"),c(e,"width","24"),c(e,"height","24"),c(e,"viewBox","0 0 24 24"),c(e,"xmlns","http://www.w3.org/2000/svg")},m(o,l){j(o,e,l),v(e,t),v(e,i)},d(o){o&&N(e)}}}function $t(r){let e,t=r[9].label+"",i;return{c(){e=C("label"),c(e,"for",i=r[3]+"_checkbox"),c(e,"class","svelte-15co9zy")},m(o,l){j(o,e,l),e.innerHTML=t},p(o,l){l[0]&512&&t!==(t=o[9].label+"")&&(e.innerHTML=t),l[0]&8&&i!==(i=o[3]+"_checkbox")&&c(e,"for",i)},d(o){o&&N(e)}}}function Ct(r){let e,t=r[9].verifying+"";return{c(){e=C("span")},m(i,o){j(i,e,o),e.innerHTML=t},p(i,o){o[0]&512&&t!==(t=i[9].verifying+"")&&(e.innerHTML=t)},d(i){i&&N(e)}}}function Lt(r){let e,t=r[9].verified+"",i,o;return{c(){e=C("span"),i=W(),o=C("input"),c(o,"type","hidden"),c(o,"name",r[3]),o.value=r[4]},m(l,s){j(l,e,s),e.innerHTML=t,j(l,i,s),j(l,o,s)},p(l,s){s[0]&512&&t!==(t=l[9].verified+"")&&(e.innerHTML=t),s[0]&8&&c(o,"name",l[3]),s[0]&16&&(o.value=l[4])},d(l){l&&(N(e),N(i),N(o))}}}function Re(r){let e,t,i,o,l,s;return{c(){e=C("div"),t=C("a"),i=X("svg"),o=X("path"),l=X("path"),s=X("path"),c(o,"d","M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"),c(o,"fill","currentColor"),c(l,"d","M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"),c(l,"fill","currentColor"),c(s,"d","M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"),c(s,"fill","currentColor"),c(i,"width","22"),c(i,"height","22"),c(i,"viewBox","0 0 20 20"),c(i,"fill","none"),c(i,"xmlns","http://www.w3.org/2000/svg"),c(t,"href",Ne),c(t,"target","_blank"),c(t,"class","altcha-logo svelte-15co9zy")},m(f,a){j(f,e,a),v(e,t),v(t,i),v(i,o),v(i,l),v(i,s)},p:z,d(f){f&&N(e)}}}function Ie(r){let e,t,i,o;function l(a,h){return a[5]===g.EXPIRED?It:Rt}let s=l(r),f=s(r);return{c(){e=C("div"),t=X("svg"),i=X("path"),o=W(),f.c(),c(i,"stroke-linecap","round"),c(i,"stroke-linejoin","round"),c(i,"d","M6 18L18 6M6 6l12 12"),c(t,"width","14"),c(t,"height","14"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"fill","none"),c(t,"viewBox","0 0 24 24"),c(t,"stroke-width","1.5"),c(t,"stroke","currentColor"),c(e,"class","altcha-error svelte-15co9zy")},m(a,h){j(a,e,h),v(e,t),v(t,i),v(e,o),f.m(e,null)},p(a,h){s===(s=l(a))&&f?f.p(a,h):(f.d(1),f=s(a),f&&(f.c(),f.m(e,null)))},d(a){a&&N(e),f.d()}}}function Rt(r){let e,t=r[9].error+"";return{c(){e=C("div"),c(e,"title",r[8])},m(i,o){j(i,e,o),e.innerHTML=t},p(i,o){o[0]&512&&t!==(t=i[9].error+"")&&(e.innerHTML=t),o[0]&256&&c(e,"title",i[8])},d(i){i&&N(e)}}}function It(r){let e,t=r[9].expired+"";return{c(){e=C("div"),c(e,"title",r[8])},m(i,o){j(i,e,o),e.innerHTML=t},p(i,o){o[0]&512&&t!==(t=i[9].expired+"")&&(e.innerHTML=t),o[0]&256&&c(e,"title",i[8])},d(i){i&&N(e)}}}function ze(r){let e,t,i=r[9].footer+"";return{c(){e=C("div"),t=C("div"),c(t,"class","svelte-15co9zy"),c(e,"class","altcha-footer svelte-15co9zy")},m(o,l){j(o,e,l),v(e,t),t.innerHTML=i},p(o,l){l[0]&512&&i!==(i=o[9].footer+"")&&(t.innerHTML=i)},d(o){o&&N(e)}}}function zt(r){let e,t,i,o,l,s,f,a,h,A,L,V,U,F,_=r[5]===g.VERIFYING&&Le();function B(d,I){return d[5]===g.VERIFIED?Lt:d[5]===g.VERIFYING?Ct:$t}let H=B(r),k=H(r),x=r[2]!==!0&&Re(),m=(r[8]||r[5]===g.EXPIRED)&&Ie(r),y=r[9].footer&&r[1]!==!0&&ze(r);return{c(){e=C("div"),t=C("div"),_&&_.c(),i=W(),o=C("div"),l=C("input"),a=W(),h=C("div"),k.c(),A=W(),x&&x.c(),L=W(),m&&m.c(),V=W(),y&&y.c(),c(l,"type","checkbox"),c(l,"id",s=r[3]+"_checkbox"),l.required=f=r[0]!=="onsubmit",c(l,"class","svelte-15co9zy"),c(o,"class","altcha-checkbox svelte-15co9zy"),we(o,"altcha-hidden",r[5]===g.VERIFYING),c(h,"class","altcha-label svelte-15co9zy"),c(t,"class","altcha-main svelte-15co9zy"),c(e,"class","altcha svelte-15co9zy"),c(e,"data-state",r[5])},m(d,I){j(d,e,I),v(e,t),_&&_.m(t,null),v(t,i),v(t,o),v(o,l),l.checked=r[6],v(t,a),v(t,h),k.m(h,null),v(t,A),x&&x.m(t,null),v(e,L),m&&m.m(e,null),v(e,V),y&&y.m(e,null),r[30](e),U||(F=[fe(l,"change",r[29]),fe(l,"change",r[10]),fe(l,"invalid",r[11])],U=!0)},p(d,I){d[5]===g.VERIFYING?_||(_=Le(),_.c(),_.m(t,i)):_&&(_.d(1),_=null),I[0]&8&&s!==(s=d[3]+"_checkbox")&&c(l,"id",s),I[0]&1&&f!==(f=d[0]!=="onsubmit")&&(l.required=f),I[0]&64&&(l.checked=d[6]),I[0]&32&&we(o,"altcha-hidden",d[5]===g.VERIFYING),H===(H=B(d))&&k?k.p(d,I):(k.d(1),k=H(d),k&&(k.c(),k.m(h,null))),d[2]!==!0?x?x.p(d,I):(x=Re(),x.c(),x.m(t,null)):x&&(x.d(1),x=null),d[8]||d[5]===g.EXPIRED?m?m.p(d,I):(m=Ie(d),m.c(),m.m(e,V)):m&&(m.d(1),m=null),d[9].footer&&d[1]!==!0?y?y.p(d,I):(y=ze(d),y.c(),y.m(e,null)):y&&(y.d(1),y=null),I[0]&32&&c(e,"data-state",d[5])},i:z,o:z,d(d){d&&N(e),_&&_.d(),k.d(),x&&x.d(),m&&m.d(),y&&y.d(),r[30](null),U=!1,re(F)}}}const Ne="https://altcha.org/";function Se(r){return JSON.parse(r)}function Nt(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function St(r,e,t){var Xe,Fe;let i,o,l,{auto:s=void 0}=e,{blockspam:f=void 0}=e,{challengeurl:a=void 0}=e,{challengejson:h=void 0}=e,{debug:A=!1}=e,{expire:L=void 0}=e,{hidefooter:V=!1}=e,{hidelogo:U=!1}=e,{name:F="altcha"}=e,{maxnumber:_=1e6}=e,{mockerror:B=!1}=e,{refetchonexpire:H=!0}=e,{spamfilter:k=!1}=e,{strings:x=void 0}=e,{test:m=!1}=e,{verifyurl:y=void 0}=e,{workers:d=Math.min(16,navigator.hardwareConcurrency||8)}=e;const I=ot(),Ze=["SHA-256","SHA-384","SHA-512"],Ae=(Fe=(Xe=document.documentElement.lang)==null?void 0:Xe.split("-"))==null?void 0:Fe[0];let Y=!1,le,b=null,be=null,K=null,G=g.UNVERIFIED,D=null;it(()=>{b&&(b.removeEventListener("submit",Me),b.removeEventListener("reset",Ve),b.removeEventListener("focusin",Te),b=null),D&&(clearTimeout(D),D=null)}),nt(()=>{R("mounted","0.4.3"),R("workers",d),m&&R("using test mode"),L&&se(L),s!==void 0&&R("auto",s),b=le.closest("form"),b&&(b.addEventListener("submit",Me),b.addEventListener("reset",Ve),s==="onfocus"&&b.addEventListener("focusin",Te)),s==="onload"&&J()});function R(...n){(A||n.some(u=>u instanceof Error))&&console[n[0]instanceof Error?"error":"log"]("ALTCHA",...n)}function Te(n){G===g.UNVERIFIED&&J()}function Me(n){b&&s==="onsubmit"&&G===g.UNVERIFIED&&(n.preventDefault(),n.stopPropagation(),J().then(()=>{b==null||b.requestSubmit()}))}function Ve(){ce()}function Ue(n,u){return btoa(JSON.stringify({algorithm:n.algorithm,challenge:n.challenge,number:u.number,salt:n.salt,signature:n.signature,test:m?!0:void 0,took:u.took}))}function Ge(n){if(!n.algorithm)throw new Error("Invalid challenge. Property algorithm is missing.");if(n.signature===void 0)throw new Error("Invalid challenge. Property signature is missing.");if(!Ze.includes(n.algorithm.toUpperCase()))throw new Error(`Unknown algorithm value. Allowed values: ${Ze.join(", ")}`);if(!n.challenge||n.challenge.length<40)throw new Error("Challenge is too short. Min. 40 chars.");if(!n.salt||n.salt.length<10)throw new Error("Salt is too short. Min. 10 chars.")}async function jt(){var n;if(B)throw R("mocking error"),new Error("Mocked error.");if(i)return R("using provided json data"),i;if(m)return R("generating test challenge",{test:m}),kt(typeof m!="boolean"?+m:void 0);{if(!a)throw new Error("Attribute challengeurl not set.");R("fetching challenge from",a);const u=await fetch(a,{headers:{"x-altcha-spam-filter":k?"1":"0"}});if(u.status!==200)throw new Error(`Server responded with ${u.status}.`);const w=u.headers.get("Expires"),S=u.headers.get("X-Altcha-Config"),Z=await u.json(),T=new URLSearchParams((n=Z.salt.split("?"))==null?void 0:n[1]),Q=T.get("expires")||T.get("expire");if(Q){const E=new Date(+Q*1e3),$=isNaN(E.getTime())?0:E.getTime()-Date.now();$>0&&se($)}if(S)try{const E=JSON.parse(S);E&&typeof E=="object"&&(E.verifyurl&&(E.verifyurl=new URL(E.verifyurl,new URL(a)).toString()),Oe(E))}catch(E){R("unable to configure from X-Altcha-Config",E)}if(!L&&(w!=null&&w.length)){const E=Date.parse(w);if(E){const $=E-Date.now();$>0&&se($)}}return Z}}function De(){a&&H&&G===g.VERIFIED?J():ce(g.EXPIRED,l.expired)}async function Zt(n){let u=null;if("Worker"in window){try{u=await At(n.challenge,n.salt,n.algorithm,n.maxnumber)}catch(w){R(w)}if((u==null?void 0:u.number)!==void 0)return{data:n,solution:u}}return{data:n,solution:await xt(n.challenge,n.salt,n.algorithm,n.maxnumber||_).promise}}async function At(n,u,w,S=typeof m=="number"?m:_,Z=Math.ceil(d)){const T=[];if(Z<1)throw new Error("Wrong number of workers configured.");if(Z>16)throw new Error("Too many workers. Max. 16 allowed workers.");for(let $=0;$<Z;$++)T.push(new wt);const Q=Math.ceil(S/Z),E=await Promise.all(T.map(($,ae)=>{const He=ae*Q;return new Promise(Xt=>{$.addEventListener("message",Pe=>{if(Pe.data)for(const Ye of T)Ye!==$&&Ye.postMessage({type:"abort"});Xt(Pe.data)}),$.postMessage({payload:{alg:w,challenge:n,max:He+Q,salt:u,start:He},type:"work"})})}));for(const $ of T)$.terminate();return E.find($=>!!$)||null}function Tt(){[g.UNVERIFIED,g.ERROR,g.EXPIRED].includes(G)?k&&(b==null?void 0:b.reportValidity())===!1?t(6,Y=!1):J():t(6,Y=!0)}function Mt(){G===g.VERIFYING&&alert(l.waitAlert)}function se(n){R("expire",n),D&&(clearTimeout(D),D=null),n<1?De():D=setTimeout(De,n)}function Vt(n){var w;const u=b==null?void 0:b.querySelector(typeof n=="string"?`input[name="${n}"]`:'input[type="email"]:not([data-no-spamfilter])');return((w=u==null?void 0:u.value)==null?void 0:w.slice(u.value.indexOf("@")))||void 0}function Ut(n){return[...(b==null?void 0:b.querySelectorAll(n!=null&&n.length?n.map(w=>`input[name="${w}"]`).join(", "):'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])'))||[]].reduce((w,S)=>{const Z=S.name,T=S.value.trim();return Z&&T&&(w[Z]=T),w},{})}async function Gt(n){if(!y)throw new Error("Attribute verifyurl not set.");R("requesting server verification from",y);const u={payload:n};if(k){const{email:Z,expectedLanguages:T,expectedCountries:Q,fields:E,ipAddress:$,timeZone:ae}=typeof k=="object"?k:{email:void 0,expectedCountries:void 0,expectedLanguages:void 0,fields:void 0,ipAddress:void 0,timeZone:void 0};u.ipAddress=$===!1?void 0:$||"auto",u.email=Z===!1?void 0:Vt(Z),u.fields=E===!1?void 0:Ut(E),u.timeZone=ae===!1?void 0:ae||Nt(),u.expectedCountries=Q,u.expectedLanguages=T||(Ae?[Ae]:void 0)}const w=await fetch(y,{body:JSON.stringify(u),headers:{"content-type":"application/json"},method:"POST"});if(w.status!==200)throw new Error(`Server responded with ${w.status}.`);const S=await w.json();if(S!=null&&S.payload&&t(4,K=S.payload),I("serververification",S),f&&S.classification==="BAD")throw new Error("SpamFilter returned negative classification.")}function Oe(n){n.auto!==void 0&&(t(0,s=n.auto),s==="onload"&&J()),n.expire!==void 0&&(se(n.expire),t(14,L=n.expire)),n.challenge&&(Ge(n.challenge),i=n.challenge),n.challengeurl!==void 0&&t(12,a=n.challengeurl),n.debug!==void 0&&t(13,A=!!n.debug),n.hidefooter!==void 0&&t(1,V=!!n.hidefooter),n.hidelogo!==void 0&&t(2,U=!!n.hidelogo),n.maxnumber!==void 0&&t(15,_=+n.maxnumber),n.mockerror!==void 0&&t(16,B=!!n.mockerror),n.name!==void 0&&t(3,F=n.name),n.refetchonexpire!==void 0&&t(17,H=!!n.refetchonexpire),n.spamfilter!==void 0&&t(18,k=typeof n.spamfilter=="object"?n.spamfilter:!!n.spamfilter),n.strings&&t(28,o=n.strings),n.test!==void 0&&t(19,m=typeof n.test=="number"?n.test:!!n.test),n.verifyurl!==void 0&&t(20,y=n.verifyurl),n.workers!==void 0&&t(21,d=+n.workers)}function ce(n=g.UNVERIFIED,u=null){D&&(clearTimeout(D),D=null),t(6,Y=!1),t(8,be=u),t(4,K=null),t(5,G=n)}async function J(){return ce(g.VERIFYING),jt().then(n=>(Ge(n),R("challenge",n),Zt(n))).then(({data:n,solution:u})=>{if(R("solution",u),(u==null?void 0:u.number)!==void 0){if(y)return Gt(Ue(n,u));t(4,K=Ue(n,u)),R("payload",K)}else throw R("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."),new Error("Unexpected result returned.")}).then(()=>{lt().then(()=>{t(5,G=g.VERIFIED),t(6,Y=!0),R("verified"),I("verified",{payload:K})})}).catch(n=>{R(n),t(5,G=g.ERROR),t(6,Y=!1),t(8,be=n.message)})}function Dt(){Y=this.checked,t(6,Y)}function Ot(n){he[n?"unshift":"push"](()=>{le=n,t(7,le)})}return r.$$set=n=>{"auto"in n&&t(0,s=n.auto),"blockspam"in n&&t(22,f=n.blockspam),"challengeurl"in n&&t(12,a=n.challengeurl),"challengejson"in n&&t(23,h=n.challengejson),"debug"in n&&t(13,A=n.debug),"expire"in n&&t(14,L=n.expire),"hidefooter"in n&&t(1,V=n.hidefooter),"hidelogo"in n&&t(2,U=n.hidelogo),"name"in n&&t(3,F=n.name),"maxnumber"in n&&t(15,_=n.maxnumber),"mockerror"in n&&t(16,B=n.mockerror),"refetchonexpire"in n&&t(17,H=n.refetchonexpire),"spamfilter"in n&&t(18,k=n.spamfilter),"strings"in n&&t(24,x=n.strings),"test"in n&&t(19,m=n.test),"verifyurl"in n&&t(20,y=n.verifyurl),"workers"in n&&t(21,d=n.workers)},r.$$.update=()=>{r.$$.dirty[0]&8388608&&(i=h?Se(h):void 0),r.$$.dirty[0]&16777216&&t(28,o=x?Se(x):{}),r.$$.dirty[0]&268435456&&t(9,l={error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:`Protected by <a href="${Ne}" target="_blank">ALTCHA</a>`,label:"I'm not a robot",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait.",...o}),r.$$.dirty[0]&48&&I("statechange",{payload:K,state:G})},[s,V,U,F,K,G,Y,le,be,l,Tt,Mt,a,A,L,_,B,H,k,m,y,d,f,h,x,Oe,ce,J,o,Dt,Ot]}class je extends bt{constructor(e){super(),mt(this,e,St,zt,We,{auto:0,blockspam:22,challengeurl:12,challengejson:23,debug:13,expire:14,hidefooter:1,hidelogo:2,name:3,maxnumber:15,mockerror:16,refetchonexpire:17,spamfilter:18,strings:24,test:19,verifyurl:20,workers:21,configure:25,reset:26,verify:27},Et,[-1,-1])}get auto(){return this.$$.ctx[0]}set auto(e){this.$$set({auto:e}),p()}get blockspam(){return this.$$.ctx[22]}set blockspam(e){this.$$set({blockspam:e}),p()}get challengeurl(){return this.$$.ctx[12]}set challengeurl(e){this.$$set({challengeurl:e}),p()}get challengejson(){return this.$$.ctx[23]}set challengejson(e){this.$$set({challengejson:e}),p()}get debug(){return this.$$.ctx[13]}set debug(e){this.$$set({debug:e}),p()}get expire(){return this.$$.ctx[14]}set expire(e){this.$$set({expire:e}),p()}get hidefooter(){return this.$$.ctx[1]}set hidefooter(e){this.$$set({hidefooter:e}),p()}get hidelogo(){return this.$$.ctx[2]}set hidelogo(e){this.$$set({hidelogo:e}),p()}get name(){return this.$$.ctx[3]}set name(e){this.$$set({name:e}),p()}get maxnumber(){return this.$$.ctx[15]}set maxnumber(e){this.$$set({maxnumber:e}),p()}get mockerror(){return this.$$.ctx[16]}set mockerror(e){this.$$set({mockerror:e}),p()}get refetchonexpire(){return this.$$.ctx[17]}set refetchonexpire(e){this.$$set({refetchonexpire:e}),p()}get spamfilter(){return this.$$.ctx[18]}set spamfilter(e){this.$$set({spamfilter:e}),p()}get strings(){return this.$$.ctx[24]}set strings(e){this.$$set({strings:e}),p()}get test(){return this.$$.ctx[19]}set test(e){this.$$set({test:e}),p()}get verifyurl(){return this.$$.ctx[20]}set verifyurl(e){this.$$set({verifyurl:e}),p()}get workers(){return this.$$.ctx[21]}set workers(e){this.$$set({workers:e}),p()}get configure(){return this.$$.ctx[25]}get reset(){return this.$$.ctx[26]}get verify(){return this.$$.ctx[27]}}return customElements.define("altcha-widget",gt(je,{auto:{},blockspam:{},challengeurl:{},challengejson:{},debug:{type:"Boolean"},expire:{},hidefooter:{type:"Boolean"},hidelogo:{type:"Boolean"},name:{},maxnumber:{},mockerror:{type:"Boolean"},refetchonexpire:{type:"Boolean"},spamfilter:{type:"Boolean"},strings:{},test:{type:"Boolean"},verifyurl:{},workers:{}},[],["configure","reset","verify"],!1)),O.Altcha=je,Object.defineProperty(O,Symbol.toStringTag,{value:"Module"}),O}({});
