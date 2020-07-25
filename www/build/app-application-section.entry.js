import { r as registerInstance, h } from './index-1837c15a.js';
import './ionic-global-3c553627.js';
import './utils-4b19976c.js';
import './index-711d40f2.js';
import './helpers-2774d300.js';
import './animation-b7b16b67.js';
import './index-448cee6c.js';
import './ios.transition-fcc76cee.js';
import './md.transition-046d9b23.js';
import './cubic-bezier-89113939.js';
import './index-66808674.js';
import './hardware-back-button-24485eb0.js';
import './index-6abadc7c.js';
import { t as toastController } from './overlays-d2e4bc4c.js';

const appApplicationSectionCss = "#middle_gap{width:45%}ion-img{width:100%}#science,#commerce,#arts{display:none}.select_stream div{display:inline-flex;margin-right:16px}.select_stream div ion-checkbox{margin:0;margin-right:3px}";

const AppApplicationSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.streams = [];
    }
    async componentWillLoad() {
        this.id = new URL(window.location.href).searchParams.get("id");
        //console.log(this.id)
        let res = await fetch("http://localhost:1337/teachers/" + this.id);
        this.schoolDetails = await res.json();
        this.resValue = this.schoolDetails.school_available_subject;
        console.log(this.resValue);
        let data = window.localStorage.getItem('user_details');
        let parseData = JSON.parse(data);
        this.student_name = parseData[0].s_name;
        this.logo = parseData[0].s_image;
    }
    selSub(sec, val) {
        //console.log(sec, val);
        switch (sec) {
            case "firstLang": {
                this.firstLang = val;
                break;
            }
            case "secLang": {
                this.secLang = val;
                break;
            }
            case "science1": {
                this.set1row1 = val;
                break;
            }
            case "science2": {
                this.set1row2 = val;
                break;
            }
            case "science3": {
                this.set1row3 = val;
                break;
            }
            case "science4": {
                this.set1row4 = val;
                break;
            }
            case "science5": {
                this.set1row5 = val;
                break;
            }
            case "science6": {
                this.set1row6 = val;
                break;
            }
            case "commerce1": {
                this.set2row1 = val;
                break;
            }
            case "commerce2": {
                this.set2row2 = val;
                break;
            }
            case "commerce3": {
                this.set2row3 = val;
                break;
            }
            case "commerce4": {
                this.set2row4 = val;
                break;
            }
            case "commerce5": {
                this.set2row5 = val;
                break;
            }
            case "commerce6": {
                this.set2row6 = val;
                break;
            }
            case "arts1": {
                this.set3row1 = val;
                break;
            }
            case "arts2": {
                this.set3row2 = val;
                break;
            }
            case "arts3": {
                this.set3row3 = val;
                break;
            }
            case "arts4": {
                this.set3row4 = val;
                break;
            }
            case "arts5": {
                this.set3row5 = val;
                break;
            }
            case "arts6": {
                this.set3row6 = val;
                break;
            }
            case "arts7": {
                this.set3row7 = val;
                break;
            }
        }
    }
    selStream(val, e) {
        console.log(val, e.target.checked);
        if (!e.target.checked) {
            this.streams.push(val);
            document.getElementById(val).style.display = 'block';
        }
        else {
            if (this.streams.length > 0) {
                for (var i = 0; i < this.streams.length; i++) {
                    let ele = this.streams[i];
                    if (ele == val) {
                        this.streams.splice(this.streams.indexOf(ele), 1);
                        document.getElementById(val).style.display = 'none';
                    }
                }
            }
        }
    }
    applyForTheSchool() {
        let data = window.localStorage.getItem('user_details');
        let parseData = JSON.parse(data);
        let s_id = parseData[0].id;
        let s_name = parseData[0].s_name;
        let s_school = parseData[0].s_sch_name;
        let s_total = Number(parseData[0].s_first_lang_no) + Number(parseData[0].s_sec_lang_no) + Number(parseData[0].s_math_no) + Number(parseData[0].s_phy_sc_no) + Number(parseData[0].s_life_sc_no) + Number(parseData[0].s_history_no) + Number(parseData[0].s_geography_no);
        let s_persent = (s_total / 7).toFixed(3);
        /* let subjects = {
          "first_language": this.firstLang,
          "second_language": this.secLang,
          "set1": {
            "row1":this.set1row1,
            "row2":this.set1row2,
            "row3":this.set1row3,
            "row4":this.set1row4,
            "row5":this.set1row5,
            "row6":this.set1row6,
          },
          "set2": {
            "row1":this.set2row1,
            "row2":this.set2row2,
            "row3":this.set2row3,
            "row4":this.set2row4,
            "row5":this.set2row5,
            "row6":this.set2row6,
          },
          "set3": {
            "row1":this.set3row1,
            "row2":this.set3row2,
            "row3":this.set3row3,
            "row4":this.set3row4,
            "row5":this.set3row5,
            "row6":this.set3row6,
            "row7":this.set3row7,
          }
        } */
        if (this.id && s_id && this.streams.length > 0) {
            for (var i = 0; i < this.streams.length; i++) {
                let stream = this.streams[i];
                if (stream == 'science') {
                    let subject = {
                        "first_language": this.firstLang,
                        "second_language": this.secLang,
                        "others": (" " + this.set1row1 + " " + this.set1row2 + " " + this.set1row3 + " " + this.set1row4 + " " + this.set1row5 + " " + this.set1row6).replace(/ undefined/gi, '')
                    };
                    this.sendRequest(subject, s_id, s_name, s_school, s_total, s_persent, stream);
                }
                else if (stream == 'commerce') {
                    let subject = {
                        "first_language": this.firstLang,
                        "second_language": this.secLang,
                        "others": (" " + this.set2row1 + " " + this.set2row2 + " " + this.set2row3 + " " + this.set2row4 + " " + this.set2row5 + " " + this.set2row6).replace(/ undefined/gi, '')
                    };
                    this.sendRequest(subject, s_id, s_name, s_school, s_total, s_persent, stream);
                }
                else if (stream == 'arts') {
                    let subject = {
                        "first_language": this.firstLang,
                        "second_language": this.secLang,
                        "others": (" " + this.set3row1 + " " + this.set3row2 + " " + this.set3row3 + " " + this.set3row4 + " " + this.set3row5 + " " + this.set3row6 + " " + this.set3row7).replace(/ undefined/gi, '')
                    };
                    this.sendRequest(subject, s_id, s_name, s_school, s_total, s_persent, stream);
                }
            }
        }
        else {
            this.presentToast("Sorry can't process your request");
        }
    }
    async sendRequest(sub, id, name, sch, tot, per, stm) {
        let postData = {
            "student_id": id.toString(),
            "student_name": name,
            "student_school": sch,
            "student_total": tot,
            "student_percent": per,
            "school_id": this.id.toString(),
            "stream": stm,
            "subjects": sub
        };
        let checkingResponse = await fetch("http://localhost:1337/applicants", {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let jsonRes = await checkingResponse.json();
        console.log(jsonRes);
        if (jsonRes && jsonRes.id) {
            this.presentToast('You application successfully received');
        }
        else {
            this.presentToast('There is some error');
        }
    }
    async presentToast(msg) {
        const toast = await toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }
    logout() {
        window.localStorage.removeItem('user_details');
        window.location.href = "/";
    }
    render() {
        return [
            h("ion-content", null, h("div", { class: "header_sec" }, h("ion-img", { src: "assets/icon/logo.png" }), h("h1", null, this.student_name), h("ion-button", { class: "log_out", onClick: () => this.logout(), color: "secondary" }, "Log Out"), h("img", { class: "sch_logo", src: this.logo }), h("div", { class: "search_sec" }, h("ion-searchbar", { placeholder: "Search by school or student name" }), h("h2", null, "No pressure of form fillup. Hassle free admission"))), h("ion-card", { class: "main_body" }, h("ion-grid", { class: "sub_sel" }, h("h3", null, "Select Subjects"), h("ion-row", null, h("ion-col", { size: "3" }, h("h4", null, "First Language")), h("ion-col", { size: "9", class: "lang_col" }, h("ion-radio-group", null, this.resValue.first_language.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('firstLang', val) }), h("ion-label", null, val)))))), h("ion-row", null, h("ion-col", { size: "3" }, h("h4", null, "Second Language")), h("ion-col", { size: "9", class: "lang_col" }, h("ion-radio-group", null, this.resValue.second_language.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('secLang', val) }), h("ion-label", null, val)))))), h("ion-row", null, h("ion-list", { class: "select_stream" }, h("h4", null, "Select Stream(select one or more)"), h("div", null, h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selStream('science', ev) }), h("ion-label", null, "Science")), h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selStream('commerce', ev) }), h("ion-label", null, "Commerce")), h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selStream('arts', ev) }), h("ion-label", null, "Arts"))))), h("ion-row", { id: "science" }, h("ion-col", { size: "3" }, h("h4", null, "Science")), h("ion-col", { size: "9" }, h("ion-row", null, h("ion-radio-group", null, this.resValue.set1.row1.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('science1', val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-radio-group", null, this.resValue.set1.row2.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('science2', val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-radio-group", null, this.resValue.set1.row3.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('science3', val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-radio-group", null, this.resValue.set1.row4.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('science4', val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-radio-group", null, this.resValue.set1.row5.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('science5', val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-radio-group", null, this.resValue.set1.row6.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('science6', val) }), h("ion-label", null, val))))))), h("ion-row", { id: "commerce" }, h("ion-col", { size: "3" }, h("h4", null, "Commerce")), h("ion-col", { size: "9" }, h("ion-row", null, h("ion-radio-group", null, this.resValue.set2.row1.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('commerce1', val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-radio-group", null, this.resValue.set2.row2.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('commerce2', val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-radio-group", null, this.resValue.set2.row3.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('commerce3', val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-radio-group", null, this.resValue.set2.row4.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('commerce4', val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-radio-group", null, this.resValue.set2.row5.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('commerce5', val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-radio-group", null, this.resValue.set2.row6.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('commerce6', val) }), h("ion-label", null, val))))))), h("ion-row", { id: "arts" }, h("ion-col", { size: "3" }, h("h4", null, "Arts")), h("ion-col", { size: "9" }, h("ion-row", null, h("ion-radio-group", null, this.resValue.set3.row1.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('arts1', val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-radio-group", null, this.resValue.set3.row2.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('arts2', val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-radio-group", null, this.resValue.set3.row3.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('arts3', val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-radio-group", null, this.resValue.set3.row4.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('arts4', val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-radio-group", null, this.resValue.set3.row5.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('arts5', val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-radio-group", null, this.resValue.set3.row6.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('arts6', val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-radio-group", null, this.resValue.set3.row7.map((val) => h("div", null, h("ion-radio", { slot: "start", onClick: () => this.selSub('arts7', val) }), h("ion-label", null, val)))))))), h("ion-button", { expand: "full", onClick: () => this.applyForTheSchool() }, "Send Application")))
        ];
    }
};
AppApplicationSection.style = appApplicationSectionCss;

export { AppApplicationSection as app_application_section };
