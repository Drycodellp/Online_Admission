import { r as registerInstance, h } from './index-1837c15a.js';

const appSchoolDashboardCss = ".main_body{padding:12px}.main_body div{text-align:center}.main_body div h1{margin:0;text-transform:uppercase;font-size:xxx-large;font-weight:900}.main_body ion-card{box-shadow:0px 0px 10px grey;border-radius:10px;margin:28px}.main_body ion-card ion-img{width:80px;height:80px}.padding_horizontal{padding:7px 20px}.padding_horizontal h3,.padding_horizontal h4{text-transform:capitalize}.view_applicant{position:relative;top:50%;left:50%;-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}";

const AppSchoolDashboard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        let data = window.localStorage.getItem('user_details');
        let parseData = JSON.parse(data);
        let s_id = parseData[0].id;
        this.school_name = parseData[0].school_name;
        this.logo = parseData[0].school_logo;
        let res = await fetch("http://localhost:1337/applicants?school_id=" + s_id);
        this.applications = await res.json();
        console.log(parseData);
    }
    logout() {
        window.localStorage.removeItem('user_details');
        window.location.href = "/";
    }
    viewApplicant(id, aid) {
        window.location.assign('/applicant-details?id=' + id + '&aid=' + aid);
    }
    render() {
        return [
            h("ion-content", null, h("div", { class: "header_sec" }, h("ion-img", { src: "assets/icon/logo.png" }), h("h1", null, this.school_name), h("ion-button", { class: "log_out", onClick: () => this.logout(), color: "secondary" }, "Log Out"), h("img", { class: "sch_logo", src: this.logo }), h("div", { class: "search_sec" }, h("ion-searchbar", { placeholder: "Search by school or student name" }), h("h2", null, "No pressure of form fillup. Hassle free admission"))), h("ion-card", { class: "main_body" }, h("div", null, h("h1", null, "Applications")), this.applications.map((ele) => h("ion-card", null, h("ion-row", null, h("ion-col", { size: "9", class: "padding_horizontal" }, h("h3", null, "Name: ", ele.student_name), h("h4", null, "Shool Name: ", ele.student_school), h("h4", null, "Total Marks: ", h("strong", null, ele.student_total), " (", ele.student_percent, "%)"), h("h4", null, "Selected Stream: ", ele.stream)), h("ion-col", { size: "3" }, h("ion-button", { class: "view_applicant", onClick: () => this.viewApplicant(ele.student_id, ele.id) }, "View Applicant")))))))
        ];
    }
};
AppSchoolDashboard.style = appSchoolDashboardCss;

export { AppSchoolDashboard as app_school_dashboard };
