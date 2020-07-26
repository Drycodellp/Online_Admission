var __awaiter=this&&this.__awaiter||function(t,n,e,a){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,r){function o(t){try{c(a.next(t))}catch(n){r(n)}}function s(t){try{c(a["throw"](t))}catch(n){r(n)}}function c(t){t.done?e(t.value):i(t.value).then(o,s)}c((a=a.apply(t,n||[])).next())}))};var __generator=this&&this.__generator||function(t,n){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},a,i,r,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(n){return c([t,n])}}function c(o){if(a)throw new TypeError("Generator is already executing.");while(e)try{if(a=1,i&&(r=o[0]&2?i["return"]:o[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;if(i=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:e.label++;return{value:o[1],done:false};case 5:e.label++;i=o[1];o=[0];continue;case 7:o=e.ops.pop();e.trys.pop();continue;default:if(!(r=e.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){e.label=o[1];break}if(o[0]===6&&e.label<r[1]){e.label=r[1];r=o;break}if(r&&e.label<r[2]){e.label=r[2];e.ops.push(o);break}if(r[2])e.ops.pop();e.trys.pop();continue}o=n.call(t,e)}catch(s){o=[6,s];i=0}finally{a=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-4572adfe.system.js","./p-38dab039.system.js"],(function(t){"use strict";var n,e,a,i,r,o,s;return{setters:[function(t){n=t.r;e=t.j;a=t.f;i=t.h;r=t.c;o=t.H},function(t){s=t.g}],execute:function(){var c=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}";var f=t("ion_ripple_effect",function(){function t(t){n(this,t);this.type="bounded"}t.prototype.addRipple=function(t,n){return __awaiter(this,void 0,void 0,(function(){var i=this;return __generator(this,(function(r){return[2,new Promise((function(r){e((function(){var e=i.el.getBoundingClientRect();var o=e.width;var s=e.height;var c=Math.sqrt(o*o+s*s);var f=Math.max(s,o);var p=i.unbounded?f:c+u;var d=Math.floor(f*m);var b=p/d;var v=t-e.left;var y=n-e.top;if(i.unbounded){v=o*.5;y=s*.5}var h=v-d*.5;var w=y-d*.5;var g=o*.5-v;var k=s*.5-y;a((function(){var t=document.createElement("div");t.classList.add("ripple-effect");var n=t.style;n.top=w+"px";n.left=h+"px";n.width=n.height=d+"px";n.setProperty("--final-scale",""+b);n.setProperty("--translate-end",g+"px, "+k+"px");var e=i.el.shadowRoot||i.el;e.appendChild(t);setTimeout((function(){r((function(){l(t)}))}),225+100)}))}))}))]}))}))};Object.defineProperty(t.prototype,"unbounded",{get:function(){return this.type==="unbounded"},enumerable:false,configurable:true});t.prototype.render=function(){var t;var n=s(this);return i(o,{role:"presentation",class:(t={},t[n]=true,t["unbounded"]=this.unbounded,t)})};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());var l=function(t){t.classList.add("fade-out");setTimeout((function(){t.remove()}),200)};var u=10;var m=.5;f.style=c}}}));