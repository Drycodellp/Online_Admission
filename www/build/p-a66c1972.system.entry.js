var __awaiter=this&&this.__awaiter||function(n,t,i,l){function o(n){return n instanceof i?n:new i((function(t){t(n)}))}return new(i||(i=Promise))((function(i,e){function a(n){try{c(l.next(n))}catch(t){e(t)}}function s(n){try{c(l["throw"](n))}catch(t){e(t)}}function c(n){n.done?i(n.value):o(n.value).then(a,s)}c((l=l.apply(n,t||[])).next())}))};var __generator=this&&this.__generator||function(n,t){var i={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},l,o,e,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(n){return function(t){return c([n,t])}}function c(a){if(l)throw new TypeError("Generator is already executing.");while(i)try{if(l=1,o&&(e=a[0]&2?o["return"]:a[0]?o["throw"]||((e=o["return"])&&e.call(o),0):o.next)&&!(e=e.call(o,a[1])).done)return e;if(o=0,e)a=[a[0]&2,e.value];switch(a[0]){case 0:case 1:e=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;o=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(e=i.trys,e=e.length>0&&e[e.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!e||a[1]>e[0]&&a[1]<e[3])){i.label=a[1];break}if(a[0]===6&&i.label<e[1]){i.label=e[1];e=a;break}if(e&&i.label<e[2]){i.label=e[2];i.ops.push(a);break}if(e[2])i.ops.pop();i.trys.pop();continue}a=t.call(n,i)}catch(s){a=[6,s];o=0}finally{l=e=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-4572adfe.system.js"],(function(n){"use strict";var t,i;return{setters:[function(n){t=n.r;i=n.h}],execute:function(){var l="";var o=n("app_applicant_details",function(){function n(n){t(this,n)}n.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var n,t,i,l,o,e,a,s;return __generator(this,(function(c){switch(c.label){case 0:n=new URL(window.location.href).searchParams.get("id");return[4,fetch("http://104.43.21.203:1337/students?id="+n)];case 1:t=c.sent();i=this;return[4,t.json()];case 2:i.applicant=c.sent();l=new URL(window.location.href).searchParams.get("aid");return[4,fetch("http://104.43.21.203:1337/applicants?id="+l)];case 3:o=c.sent();e=this;return[4,o.json()];case 4:e.application=c.sent();a=window.localStorage.getItem("user_details");s=JSON.parse(a);this.school_name=s[0].school_name;this.logo=s[0].school_logo;return[2]}}))}))};n.prototype.logout=function(){window.localStorage.removeItem("user_details");window.location.href="/"};n.prototype.calTotal=function(){return Number(this.applicant[0].s_first_lang_no)+Number(this.applicant[0].s_sec_lang_no)+Number(this.applicant[0].s_math_no)+Number(this.applicant[0].s_phy_sc_no)+Number(this.applicant[0].s_life_sc_no)+Number(this.applicant[0].s_history_no)+Number(this.applicant[0].s_geography_no)};n.prototype.calPersentage=function(){return(this.calTotal()/7).toFixed(3)};n.prototype.render=function(){var n=this;return[i("ion-content",null,i("div",{class:"header_sec"},i("ion-img",{src:"assets/icon/logo.png"}),i("h1",null,this.school_name),i("ion-button",{class:"log_out",onClick:function(){return n.logout()},color:"secondary"},"Log Out"),i("img",{class:"sch_logo",src:this.logo}),i("div",{class:"search_sec"},i("ion-searchbar",{placeholder:"Search by school or student name"}),i("h2",null,"No pressure of form fillup. Hassle free admission"))),i("ion-card",{class:"main_body"},i("h2",null,this.applicant[0].s_name),i("h3",null,"Gurdian Name: ",this.applicant[0].s_guad_name),i("p",null,"Address: ",this.applicant[0].s_res_address),i("p",null,"Pin: ",this.applicant[0].s_res_pin),i("h3",null,"School: ",this.applicant[0].s_sch_name),i("p",null,this.applicant[0].s_sch_address),i("p",null,"Pin: ",this.applicant[0].s_sch_pin),i("p",null,"Registration No.: ",this.applicant[0].s_reg_number),i("p",null,"Cast: ",this.applicant[0].s_cast),i("ion-grid",null,i("h3",null,"Madhamik Result"),i("ion-row",null,i("ion-col",null,i("ion-item",null,i("ion-label",{position:"stacked"},"1st Language"),i("p",null,this.applicant[0].s_first_lang_no))),i("ion-col",null,i("ion-item",null,i("ion-label",{position:"stacked"},"2nd Language"),i("p",null,this.applicant[0].s_sec_lang_no))),i("ion-col",null,i("ion-item",null,i("ion-label",{position:"stacked"},"Mathametics"),i("p",null,this.applicant[0].s_math_no))),i("ion-col",null,i("ion-item",null,i("ion-label",{position:"stacked"},"Physical Science"),i("p",null,this.applicant[0].s_phy_sc_no)))),i("ion-row",null,i("ion-col",null,i("ion-item",null,i("ion-label",{position:"stacked"},"Life Science"),i("p",null,this.applicant[0].s_life_sc_no))),i("ion-col",null,i("ion-item",null,i("ion-label",{position:"stacked"},"History"),i("p",null,this.applicant[0].s_history_no))),i("ion-col",null,i("ion-item",null,i("ion-label",{position:"stacked"},"Geography"),i("p",null,this.applicant[0].s_geography_no))),i("ion-col",null,i("ion-item",null,i("ion-label",{position:"stacked"},"Physical Education(optional sub)"),i("p",null,this.applicant[0].s_op_sub_no)))),i("h3",null,"Total: ",this.calTotal()," (",this.calPersentage(),"%)")),i("h3",null,"Selected Stream: ",this.application[0].stream),i("h3",null,"Selected Subjects:"),i("h4",null,"First Language: ",this.application[0].subjects.first_language),i("h4",null,"Second Language: ",this.application[0].subjects.second_language),i("h4",null,"Main Subjects: ",this.application[0].subjects.others),i("ion-row",null,i("ion-col",null,i("ion-img",{src:this.applicant[0].s_image}),i("div",null,i("ion-button",{size:"small"},"Download"),i("ion-button",{size:"small"},"Print"))),i("ion-col",null,i("ion-img",{src:this.applicant[0].s_result_img}),i("div",null,i("ion-button",{size:"small"},"Download"),i("ion-button",{size:"small"},"Print"))),i("ion-col",null,i("ion-img",{src:this.applicant[0].s_cast_cert_img}),i("div",null,i("ion-button",{size:"small"},"Download"),i("ion-button",{size:"small"},"Print"))))))]};return n}());o.style=l}}}));