import{g as t,s as e}from"./p-a0aececd.js";const o=(t,e)=>{return"string"==typeof t&&(e=t,t=void 0),(o=t,n(o)).includes(e);var o},n=(t=window)=>{t.Ionic=t.Ionic||{};let e=t.Ionic.platforms;return null==e&&(e=t.Ionic.platforms=i(t),e.forEach(e=>t.document.documentElement.classList.add("plt-"+e))),e},i=t=>Object.keys(m).filter(e=>m[e](t)),r=t=>!!l(t,/iPad/i)||!(!l(t,/Macintosh/i)||!c(t)),s=t=>l(t,/android|sink/i),c=t=>u(t,"(any-pointer:coarse)"),a=t=>d(t)||p(t),d=t=>!!(t.cordova||t.phonegap||t.PhoneGap),p=t=>{const e=t.Capacitor;return!(!e||!e.isNative)},l=(t,e)=>e.test(t.navigator.userAgent),u=(t,e)=>t.matchMedia(e).matches,m={ipad:r,iphone:t=>l(t,/iPhone/i),ios:t=>l(t,/iPhone|iPod/i)||r(t),android:s,phablet:t=>{const e=t.innerWidth,o=t.innerHeight,n=Math.min(e,o),i=Math.max(e,o);return n>390&&n<520&&i>620&&i<800},tablet:t=>{const e=t.innerWidth,o=t.innerHeight,n=Math.min(e,o),i=Math.max(e,o);return r(t)||(t=>s(t)&&!l(t,/mobile/i))(t)||n>460&&n<820&&i>780&&i<1400},cordova:d,capacitor:p,electron:t=>l(t,/electron/i),pwa:t=>!(!t.matchMedia("(display-mode: standalone)").matches&&!t.navigator.standalone),mobile:c,mobileweb:t=>c(t)&&!a(t),desktop:t=>!c(t),hybrid:a};class h{constructor(){this.m=new Map}reset(t){this.m=new Map(Object.entries(t))}get(t,e){const o=this.m.get(t);return void 0!==o?o:e}getBoolean(t,e=!1){const o=this.m.get(t);return void 0===o?e:"string"==typeof o?"true"===o:!!o}getNumber(t,e){const o=parseFloat(this.m.get(t));return isNaN(o)?void 0!==e?e:NaN:o}set(t,e){this.m.set(t,e)}}const b=new h;let g;const f=e=>e&&t(e)||g,w=()=>{const t=document,i=window,r=i.Ionic=i.Ionic||{};n(i);const s=Object.assign(Object.assign(Object.assign(Object.assign({},(t=>{try{const e=t.sessionStorage.getItem("ionic-persist-config");return null!==e?JSON.parse(e):{}}catch(e){return{}}})(i)),{persistConfig:!1}),r.config),(t=>{const e={};return t.location.search.slice(1).split("&").map(t=>t.split("=")).map(([t,e])=>[decodeURIComponent(t),decodeURIComponent(e)]).filter(([t])=>{return t.substr(0,(e="ionic:").length)===e;var e}).map(([t,e])=>[t.slice("ionic:".length),e]).forEach(([t,o])=>{e[t]=o}),e})(i));b.reset(s),b.getBoolean("persistConfig")&&((t,e)=>{try{t.sessionStorage.setItem("ionic-persist-config",JSON.stringify(e))}catch(o){return}})(i,s),r.config=b,r.mode=g=b.get("mode",t.documentElement.getAttribute("mode")||(o(i,"ios")?"ios":"md")),b.set("mode",g),t.documentElement.setAttribute("mode",g),t.documentElement.classList.add(g),b.getBoolean("_testing")&&b.set("animated",!1);const c=t=>t.tagName&&t.tagName.startsWith("ION-"),a=t=>["ios","md"].includes(t);e(t=>{for(;t;){const e=t.mode||t.getAttribute("mode");if(e){if(a(e))return e;c(t)&&console.warn('Invalid ionic mode: "'+e+'", expected: "ios" or "md"')}t=t.parentElement}return g})};export{o as a,b as c,f as g,w as i}