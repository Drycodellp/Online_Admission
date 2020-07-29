import { r as registerInstance, h } from './index-1837c15a.js';

const appSchoolDashboardCss = ".main_body{padding:12px}.main_body div{text-align:center}.main_body div h1{margin:0;text-transform:uppercase;font-size:xxx-large;font-weight:900}.main_body ion-card{box-shadow:0px 0px 10px grey;border-radius:10px;margin:28px}.main_body ion-card ion-img{width:80px;height:80px}.padding_horizontal{padding:7px 20px}.padding_horizontal h3,.padding_horizontal h4{text-transform:capitalize}.view_applicant{position:relative;top:50%;left:50%;-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}ion-segment{background-color:gainsboro;margin-top:18px}ion-segment ion-label{font-size:20px}.merit_list_filter{border-bottom:1px solid gray}.filter_button{cursor:pointer}.merit_list_filter h4{font-weight:900}.merit_list_filter ion-icon{margin-left:8px;margin-top:8px}#merit_filter{display:none}.all_subs{display:flex;flex-wrap:wrap}.all_subs ion-checkbox{width:15px;height:15px}";

const AppSchoolDashboard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scienceApplications = [];
        this.commerceApplications = [];
        this.artsApplications = [];
        this.activeStream = 'science';
        this.filterOpen = false;
        this.aggFilter = true;
        this.subFilter = true;
        this.subSelFilter = true;
        this.subjectPref = [];
        this.subjectPrefSet1 = [];
        this.subjectPrefSet2 = [];
        this.subjectPrefSet3 = [];
    }
    async componentWillLoad() {
        let data = window.localStorage.getItem('user_details');
        let parseData = JSON.parse(data);
        let s_id = parseData[0].id;
        this.school_name = parseData[0].school_name;
        this.logo = parseData[0].school_logo;
        let res = await fetch("http://localhost:1337/applicants?school_id=" + s_id);
        let app = await res.json();
        for (var i = 0; i < app.length; i++) {
            let ele = app[i];
            if (ele.stream == 'science') {
                this.scienceApplications.push(ele);
            }
            else if (ele.stream == 'commerce') {
                this.commerceApplications.push(ele);
            }
            else if (ele.stream == 'arts') {
                this.artsApplications.push(ele);
            }
        }
        this.applications = this.scienceApplications;
        let res2 = await fetch("http://localhost:3333/assets/subjects.json");
        let subs = await res2.json();
        let set1 = Object.values(subs.set1);
        let set2 = Object.values(subs.set2);
        let set3 = Object.values(subs.set3);
        for (var i = 0; i < set1.length; i++) {
            let ele = [];
            ele.push(set1[i]);
            for (var j = 0; j < ele[0].length; j++) {
                let ele2 = ele[0][j];
                this.subjectPrefSet1.push(ele2);
            }
        }
        for (var k = 0; k < set2.length; k++) {
            let ele = [];
            ele.push(set2[k]);
            for (var l = 0; l < ele[0].length; l++) {
                let ele2 = ele[0][l];
                this.subjectPrefSet2.push(ele2);
            }
        }
        for (var m = 0; m < set3.length; m++) {
            let ele = [];
            ele.push(set3[m]);
            for (var n = 0; n < ele[0].length; n++) {
                let ele2 = ele[0][n];
                this.subjectPrefSet3.push(ele2);
            }
        }
        this.subjectPref = this.subjectPrefSet1;
    }
    logout() {
        window.localStorage.removeItem('user_details');
        window.location.href = "/";
    }
    viewApplicant(id, aid) {
        window.location.assign('/applicant-details?id=' + id + '&aid=' + aid);
    }
    streamFilter(e) {
        this.activeStream = e.target.value;
        if (e.target.value == 'science') {
            this.applications = this.scienceApplications;
            this.subjectPref = this.subjectPrefSet1;
        }
        else if (e.target.value == 'commerce') {
            this.applications = this.commerceApplications;
            this.subjectPref = this.subjectPrefSet2;
        }
        else if (e.target.value == 'arts') {
            this.applications = this.artsApplications;
            this.subjectPref = this.subjectPrefSet3;
        }
    }
    openFilter() {
        if (this.filterOpen) {
            document.getElementById('merit_filter').style.display = 'none';
            this.filterOpen = false;
        }
        else {
            document.getElementById('merit_filter').style.display = 'block';
            this.filterOpen = true;
        }
    }
    selectFilterOptions(val, e) {
        console.log(e.target.checked, val);
        if (val == 'agg_input_sec') {
            if (!e.target.checked) {
                this.aggFilter = true;
            }
            else {
                this.aggFilter = false;
            }
        }
        else if (val == 'sub_sel_sec') {
            if (!e.target.checked) {
                this.subFilter = true;
            }
            else {
                this.subFilter = false;
            }
        }
        else if (val == 'sel_sel_sub') {
            if (!e.target.checked) {
                this.subSelFilter = true;
            }
            else {
                this.subSelFilter = false;
            }
        }
    }
    changeMarks(e) {
        this.min_agg_no = e.target.value;
    }
    selSubject(e) {
        if (e.target.value) {
            this.min_agg_sub = e.target.value;
        }
        else {
            this.min_agg_sub = '';
        }
    }
    changeSubMarks(e) {
        this.min_sub_agg = e.target.value;
    }
    selectPrefSub(val, e) {
    }
    filterByAgg() {
        if (this.min_agg_no && this.aggFilter) {
            this.applications = [];
            if (this.activeStream == 'science') {
                for (var i = 0; i < this.scienceApplications.length; i++) {
                    let ele = this.scienceApplications[i];
                    if (Number(ele.student_total) >= this.min_agg_no) {
                        this.applications.push(ele);
                    }
                }
            }
            if (this.activeStream == 'commerce') {
                for (var i = 0; i < this.commerceApplications.length; i++) {
                    let ele = this.commerceApplications[i];
                    if (Number(ele.student_total) >= this.min_agg_no) {
                        this.applications.push(ele);
                    }
                }
            }
            if (this.activeStream == 'arts') {
                for (var i = 0; i < this.artsApplications.length; i++) {
                    let ele = this.artsApplications[i];
                    if (Number(ele.student_total) >= this.min_agg_no) {
                        this.applications.push(ele);
                    }
                }
            }
        }
    }
    async filterBySubAgg() {
        console.log(this.min_sub_agg, this.min_agg_sub, this.subFilter);
        if (this.min_sub_agg && this.min_agg_sub && this.subFilter) {
            this.applications = [];
            if (this.activeStream == 'science') {
                let check = await fetch('http://localhost:1337/students?' + this.min_agg_sub + '_gte=' + this.min_sub_agg);
                let res = await check.json();
                console.log(res);
                for (var i = 0; i < this.scienceApplications.length; i++) {
                    let ele = this.scienceApplications[i];
                    for (var j = 0; j < res.length; j++) {
                        let ele2 = res[j];
                        if (Number(ele.student_id) == ele2.id) {
                            this.applications.push(ele);
                        }
                    }
                }
                console.log(this.applications);
            }
            if (this.activeStream == 'commerce') {
                for (var i = 0; i < this.commerceApplications.length; i++) {
                    let ele = this.commerceApplications[i];
                    if (Number(ele.student_total) >= this.min_agg_no) {
                        this.applications.push(ele);
                    }
                }
            }
            if (this.activeStream == 'arts') {
                for (var i = 0; i < this.artsApplications.length; i++) {
                    let ele = this.artsApplications[i];
                    if (Number(ele.student_total) >= this.min_agg_no) {
                        this.applications.push(ele);
                    }
                }
            }
        }
    }
    render() {
        return [
            h("ion-content", null, h("div", { class: "header_sec" }, h("ion-img", { src: "assets/icon/logo.png" }), h("h1", null, this.school_name), h("ion-button", { class: "log_out", onClick: () => this.logout(), color: "secondary" }, "Log Out"), h("img", { class: "sch_logo", src: this.logo }), h("div", { class: "search_sec" }, h("ion-searchbar", { placeholder: "Search by school or student name" }), h("h2", null, "No pressure of form fillup. Hassle free admission"))), h("ion-card", { class: "main_body" }, h("div", null, h("h1", null, "Applications")), h("ion-segment", { onIonChange: ev => this.streamFilter(ev), value: "science" }, h("ion-segment-button", { value: "science" }, h("ion-label", null, "SCIENCE (", this.scienceApplications.length, ")")), h("ion-segment-button", { value: "commerce" }, h("ion-label", null, "COMMERCE (", this.commerceApplications.length, ")")), h("ion-segment-button", { value: "arts" }, h("ion-label", null, "ARTS (", this.artsApplications.length, ")"))), h("div", { class: "merit_list_filter" }, h("ion-item", { class: "filter_button", lines: "none", onClick: () => this.openFilter() }, h("h4", null, "Filter for Merit List"), h("ion-icon", { name: "caret-down-outline" })), h("div", { id: "merit_filter" }, h("ion-row", null, h("ion-col", null, h("ion-item", { lines: "none" }, h("ion-checkbox", { slot: "start", onClick: ev => this.selectFilterOptions('agg_input_sec', ev) }), h("p", null, "Minimum total marks")), h("ion-item", { lines: "none", id: "agg_input_sec" }, h("ion-input", { type: "number", placeholder: "Marks", maxlength: 3, onInput: ev => this.changeMarks(ev), name: "school_rp_ph" }))), h("ion-col", null, h("ion-item", { lines: "none" }, h("ion-checkbox", { slot: "start", onClick: ev => this.selectFilterOptions('sub_sel_sec', ev) }), h("p", null, "Minimum marks on a spesific subject")), h("div", { id: "sub_sel_sec" }, h("ion-item", { lines: "none" }, h("ion-label", null, "Select Subject"), h("ion-select", { onIonChange: ev => this.selSubject(ev) }, h("ion-select-option", { value: "s_first_lang_no" }, "First Language"), h("ion-select-option", { value: "s_sec_lang_no" }, "Second Language"), h("ion-select-option", { value: "s_math_no" }, "Mathametics"), h("ion-select-option", { value: "s_phy_sc_no" }, "Physical Science"), h("ion-select-option", { value: "s_life_sc_no" }, "Life Science"), h("ion-select-option", { value: "s_history_no" }, "History"), h("ion-select-option", { value: "s_geography_no" }, "Geography"), h("ion-select-option", { value: "s_op_sub_no" }, "Physical Education"))), h("ion-item", { lines: "none" }, h("ion-input", { type: "number", placeholder: "Marks", onInput: ev => this.changeSubMarks(ev), name: "school_rp_ph" })))), h("ion-col", null, h("ion-item", { lines: "none" }, h("ion-checkbox", { slot: "start", onClick: ev => this.selectFilterOptions('sel_sel_sub', ev) }), h("p", null, "Selected subject(s)")), h("div", { class: "all_subs" }, this.subjectPref.map((ele) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selectPrefSub(ele, ev) }), h("ion-label", null, ele)))))), h("ion-button", { size: "default" }, "Filter"))), this.applications.map((ele) => h("ion-card", null, h("ion-row", null, h("ion-col", { size: "9", class: "padding_horizontal" }, h("h3", null, "Name: ", ele.student_name), h("h4", null, "Shool Name: ", ele.student_school), h("h4", null, "Total Marks: ", h("strong", null, ele.student_total), " (", ele.student_percent, "%)"), h("h4", null, "Selected Stream: ", ele.stream)), h("ion-col", { size: "3" }, h("ion-button", { class: "view_applicant", onClick: () => this.viewApplicant(ele.student_id, ele.id) }, "View Applicant")))))))
        ];
    }
};
AppSchoolDashboard.style = appSchoolDashboardCss;

export { AppSchoolDashboard as app_school_dashboard };
