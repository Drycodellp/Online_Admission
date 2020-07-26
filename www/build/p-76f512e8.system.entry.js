var __awaiter=this&&this.__awaiter||function(t,n,e,o){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,r){function a(t){try{s(o.next(t))}catch(n){r(n)}}function l(t){try{s(o["throw"](t))}catch(n){r(n)}}function s(t){t.done?e(t.value):i(t.value).then(a,l)}s((o=o.apply(t,n||[])).next())}))};var __generator=this&&this.__generator||function(t,n){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,i,r,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(t){return function(n){return s([t,n])}}function s(a){if(o)throw new TypeError("Generator is already executing.");while(e)try{if(o=1,i&&(r=a[0]&2?i["return"]:a[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;if(i=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:e.label++;return{value:a[1],done:false};case 5:e.label++;i=a[1];a=[0];continue;case 7:a=e.ops.pop();e.trys.pop();continue;default:if(!(r=e.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){e=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){e.label=a[1];break}if(a[0]===6&&e.label<r[1]){e.label=r[1];r=a;break}if(r&&e.label<r[2]){e.label=r[2];e.ops.push(a);break}if(r[2])e.ops.pop();e.trys.pop();continue}a=n.call(t,e)}catch(l){a=[6,l];i=0}finally{o=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-4572adfe.system.js"],(function(t){"use strict";var n,e;return{setters:[function(t){n=t.r;e=t.h}],execute:function(){var o=".main_body{padding:12px}.main_body div{text-align:center}.main_body div h1{margin:0;text-transform:uppercase;font-size:xxx-large;font-weight:900}.main_body ion-card{-webkit-box-shadow:0px 0px 10px grey;box-shadow:0px 0px 10px grey;border-radius:10px;margin:28px}.main_body ion-card ion-img{width:80px;height:80px}.padding_horizontal{padding:7px 20px}.padding_horizontal h3,.padding_horizontal h4{text-transform:capitalize}.view_applicant{position:relative;top:50%;left:50%;-ms-transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}";var i=t("app_school_dashboard",function(){function t(t){n(this,t)}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t,n,e,o,i;return __generator(this,(function(r){switch(r.label){case 0:t=window.localStorage.getItem("user_details");n=JSON.parse(t);e=n[0].id;this.school_name=n[0].school_name;this.logo=n[0].school_logo;return[4,fetch("http://104.43.21.203:1337/applicants?school_id="+e)];case 1:o=r.sent();i=this;return[4,o.json()];case 2:i.applications=r.sent();console.log(n);return[2]}}))}))};t.prototype.logout=function(){window.localStorage.removeItem("user_details");window.location.href="/"};t.prototype.viewApplicant=function(t,n){window.location.assign("/applicant-details?id="+t+"&aid="+n)};t.prototype.render=function(){var t=this;return[e("ion-content",null,e("div",{class:"header_sec"},e("ion-img",{src:"assets/icon/logo.png"}),e("h1",null,this.school_name),e("ion-button",{class:"log_out",onClick:function(){return t.logout()},color:"secondary"},"Log Out"),e("img",{class:"sch_logo",src:this.logo}),e("div",{class:"search_sec"},e("ion-searchbar",{placeholder:"Search by school or student name"}),e("h2",null,"No pressure of form fillup. Hassle free admission"))),e("ion-card",{class:"main_body"},e("div",null,e("h1",null,"Applications")),this.applications.map((function(n){return e("ion-card",null,e("ion-row",null,e("ion-col",{size:"9",class:"padding_horizontal"},e("h3",null,"Name: ",n.student_name),e("h4",null,"Shool Name: ",n.student_school),e("h4",null,"Total Marks: ",e("strong",null,n.student_total)," (",n.student_percent,"%)"),e("h4",null,"Selected Stream: ",n.stream)),e("ion-col",{size:"3"},e("ion-button",{class:"view_applicant",onClick:function(){return t.viewApplicant(n.student_id,n.id)}},"View Applicant"))))}))))]};return t}());i.style=o}}}));