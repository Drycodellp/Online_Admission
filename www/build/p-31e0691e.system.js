var __awaiter=this&&this.__awaiter||function(e,n,t,r){function i(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,a){function o(e){try{s(r.next(e))}catch(n){a(n)}}function u(e){try{s(r["throw"](e))}catch(n){a(n)}}function s(e){e.done?t(e.value):i(e.value).then(o,u)}s((r=r.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(n){return s([e,n])}}function s(o){if(r)throw new TypeError("Generator is already executing.");while(t)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:t.label++;return{value:o[1],done:false};case 5:t.label++;i=o[1];o=[0];continue;case 7:o=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){t.label=o[1];break}if(o[0]===6&&t.label<a[1]){t.label=a[1];a=o;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(o);break}if(a[2])t.ops.pop();t.trys.pop();continue}o=n.call(e,t)}catch(u){o=[6,u];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;for(var r=Array(e),i=0,n=0;n<t;n++)for(var a=arguments[n],o=0,u=a.length;o<u;o++,i++)r[i]=a[o];return r};System.register(["./p-38dab039.system.js","./p-506cc8db.system.js"],(function(e){"use strict";var n,t,r;return{setters:[function(e){n=e.g;t=e.c},function(e){r=e.OVERLAY_BACK_BUTTON_PRIORITY}],execute:function(){var i=this;var a=0;var o=e("c",new WeakMap);var u=function(e){return{create:function(n){return p(e,n)},dismiss:function(n,t,r){return m(document,n,t,e,r)},getTop:function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){return[2,_(document,e)]}))}))}}};var s=e("h",u("ion-alert"));var c=e("g",u("ion-action-sheet"));var f=e("b",u("ion-picker"));var l=e("f",u("ion-popover"));var d=e("t",u("ion-toast"));var v=e("p",(function(e){var n=document;h(n);var t=a++;e.overlayIndex=t;if(!e.hasAttribute("id")){e.id="ion-overlay-"+t}}));var p=function(e,n){return customElements.whenDefined(e).then((function(){var t=document;var r=t.createElement(e);r.classList.add("overlay-hidden");Object.assign(r,n);g(t).appendChild(r);return r.componentOnReady()}))};var h=function(e){if(a===0){a=1;e.addEventListener("focusin",(function(n){var t=_(e);if(t&&t.backdropDismiss&&!L(t,n.target)){var r=t.querySelector("input,button");if(r){r.focus()}}}));e.addEventListener("ionBackButton",(function(n){var t=_(e);if(t&&t.backdropDismiss){n.detail.register(r,(function(){return t.dismiss(undefined,P)}))}}));e.addEventListener("keyup",(function(n){if(n.key==="Escape"){var t=_(e);if(t&&t.backdropDismiss){t.dismiss(undefined,P)}}}))}};var m=function(e,n,t,r,i){var a=_(e,r,i);if(!a){return Promise.reject("overlay does not exist")}return a.dismiss(n,t)};var y=function(e,n){if(n===undefined){n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"}return Array.from(e.querySelectorAll(n)).filter((function(e){return e.overlayIndex>0}))};var _=function(e,n,t){var r=y(e,n);return t===undefined?r[r.length-1]:r.find((function(e){return e.id===t}))};var b=e("a",(function(e,r,a,o,u){return __awaiter(i,void 0,void 0,(function(){var i,s,c;return __generator(this,(function(f){switch(f.label){case 0:if(e.presented){return[2]}e.presented=true;e.willPresent.emit();i=n(e);s=e.enterAnimation?e.enterAnimation:t.get(r,i==="ios"?a:o);return[4,k(e,s,e.el,u)];case 1:c=f.sent();if(c){e.didPresent.emit()}return[2]}}))}))}));var w=e("d",(function(e,r,a,u,s,c,f){return __awaiter(i,void 0,void 0,(function(){var i,l,d;return __generator(this,(function(v){switch(v.label){case 0:if(!e.presented){return[2,false]}e.presented=false;v.label=1;case 1:v.trys.push([1,4,,5]);e.willDismiss.emit({data:r,role:a});i=n(e);l=e.leaveAnimation?e.leaveAnimation:t.get(u,i==="ios"?s:c);if(!(a!=="gesture"))return[3,3];return[4,k(e,l,e.el,f)];case 2:v.sent();v.label=3;case 3:e.didDismiss.emit({data:r,role:a});o.delete(e);return[3,5];case 4:d=v.sent();console.error(d);return[3,5];case 5:e.el.remove();return[2,true]}}))}))}));var g=function(e){return e.querySelector("ion-app")||e.body};var k=function(e,n,r,a){return __awaiter(i,void 0,void 0,(function(){var i,u,s;return __generator(this,(function(c){switch(c.label){case 0:r.classList.remove("overlay-hidden");i=r.shadowRoot||e.el;u=n(i,a);if(!e.animated||!t.getBoolean("animated",true)){u.duration(0)}if(e.keyboardClose){u.beforeAddWrite((function(){var e=r.ownerDocument.activeElement;if(e&&e.matches("input, ion-input, ion-textarea")){e.blur()}}))}s=o.get(e)||[];o.set(e,__spreadArrays(s,[u]));return[4,u.play()];case 1:c.sent();return[2,true]}}))}))};var A=e("e",(function(e,n){var t;var r=new Promise((function(e){return t=e}));E(e,n,(function(e){t(e.detail)}));return r}));var E=function(e,n,t){var r=function(i){e.removeEventListener(n,r);t(i)};e.addEventListener(n,r)};var x=e("i",(function(e){return e==="cancel"||e===P}));var L=function(e,n){while(n){if(n===e){return true}n=n.parentElement}return false};var D=function(e){return e()};var B=e("s",(function(e,n){if(typeof e==="function"){var r=t.get("_zoneGate",D);return r((function(){try{return e(n)}catch(t){console.error(t)}}))}return undefined}));var P=e("B","backdrop")}}}));