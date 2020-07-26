import { r as registerInstance, h } from './index-1837c15a.js';

const appApplicantDetailsCss = "";

const AppApplicantDetails = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        let id = new URL(window.location.href).searchParams.get("id");
        let res = await fetch("http://localhost:1337/students?id=" + id);
        this.applicant = await res.json();
        let aid = new URL(window.location.href).searchParams.get("aid");
        let res2 = await fetch("http://localhost:1337/applicants?id=" + aid);
        this.application = await res2.json();
        //console.log(this.applicant, this.application[0].subjects.first_language);
        let data = window.localStorage.getItem('user_details');
        let parseData = JSON.parse(data);
        this.school_name = parseData[0].school_name;
        this.logo = parseData[0].school_logo;
    }
    logout() {
        window.localStorage.removeItem('user_details');
        window.location.href = "/";
    }
    calTotal() {
        return Number(this.applicant[0].s_first_lang_no) + Number(this.applicant[0].s_sec_lang_no) + Number(this.applicant[0].s_math_no) + Number(this.applicant[0].s_phy_sc_no) + Number(this.applicant[0].s_life_sc_no) + Number(this.applicant[0].s_history_no) + Number(this.applicant[0].s_geography_no);
    }
    calPersentage() {
        return (this.calTotal() / 7).toFixed(3);
    }
    render() {
        return [
            h("ion-content", null, h("div", { class: "header_sec" }, h("ion-img", { src: "assets/icon/logo.png" }), h("h1", null, this.school_name), h("ion-button", { class: "log_out", onClick: () => this.logout(), color: "secondary" }, "Log Out"), h("img", { class: "sch_logo", src: this.logo }), h("div", { class: "search_sec" }, h("ion-searchbar", { placeholder: "Search by school or student name" }), h("h2", null, "No pressure of form fillup. Hassle free admission"))), h("ion-card", { class: "main_body" }, h("h2", null, this.applicant[0].s_name), h("h3", null, "Gurdian Name: ", this.applicant[0].s_guad_name), h("p", null, "Address: ", this.applicant[0].s_res_address), h("p", null, "Pin: ", this.applicant[0].s_res_pin), h("h3", null, "School: ", this.applicant[0].s_sch_name), h("p", null, this.applicant[0].s_sch_address), h("p", null, "Pin: ", this.applicant[0].s_sch_pin), h("p", null, "Registration No.: ", this.applicant[0].s_reg_number), h("p", null, "Cast: ", this.applicant[0].s_cast), h("ion-grid", null, h("h3", null, "Madhamik Result"), h("ion-row", null, h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "1st Language"), h("p", null, this.applicant[0].s_first_lang_no))), h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "2nd Language"), h("p", null, this.applicant[0].s_sec_lang_no))), h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Mathametics"), h("p", null, this.applicant[0].s_math_no))), h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Physical Science"), h("p", null, this.applicant[0].s_phy_sc_no)))), h("ion-row", null, h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Life Science"), h("p", null, this.applicant[0].s_life_sc_no))), h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "History"), h("p", null, this.applicant[0].s_history_no))), h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Geography"), h("p", null, this.applicant[0].s_geography_no))), h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Physical Education(optional sub)"), h("p", null, this.applicant[0].s_op_sub_no)))), h("h3", null, "Total: ", this.calTotal(), " (", this.calPersentage(), "%)")), h("h3", null, "Selected Stream: ", this.application[0].stream), h("h3", null, "Selected Subjects:"), h("h4", null, "First Language: ", this.application[0].subjects.first_language), h("h4", null, "Second Language: ", this.application[0].subjects.second_language), h("h4", null, "Main Subjects: ", this.application[0].subjects.others), h("ion-row", null, h("ion-col", null, h("ion-img", { src: this.applicant[0].s_image }), h("div", null, h("ion-button", { size: "small" }, "Download"), h("ion-button", { size: "small" }, "Print"))), h("ion-col", null, h("ion-img", { src: this.applicant[0].s_result_img }), h("div", null, h("ion-button", { size: "small" }, "Download"), h("ion-button", { size: "small" }, "Print"))), h("ion-col", null, h("ion-img", { src: this.applicant[0].s_cast_cert_img }), h("div", null, h("ion-button", { size: "small" }, "Download"), h("ion-button", { size: "small" }, "Print"))))))
        ];
    }
};
AppApplicantDetails.style = appApplicantDetailsCss;

export { AppApplicantDetails as app_applicant_details };
