import { r as registerInstance, h } from './index-1837c15a.js';

const appHomeCss = ".main_body{padding:12px}.main_body div{text-align:center}.main_body div h1{margin:0;text-transform:uppercase;font-size:xxx-large;font-weight:900}.main_body ion-card{box-shadow:0px 0px 10px grey;border-radius:10px;margin:28px}.main_body ion-card ion-img{width:120px;height:120px}.padding_horizontal h3,.padding_horizontal h4{text-transform:capitalize}.view_applicant{position:relative;top:50%;left:50%;-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}";

const AppHome = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        let res = await fetch("http://localhost:1337/teachers");
        this.schools = await res.json();
        console.log(this.schools);
        let data = window.localStorage.getItem('user_details');
        let parseData = JSON.parse(data);
        this.student_name = parseData[0].s_name;
        this.logo = parseData[0].s_image;
    }
    logout() {
        window.localStorage.removeItem('user_details');
        window.location.href = "/";
    }
    apply(id) {
        window.location.assign('/application-section?id=' + id);
    }
    render() {
        return [
            h("ion-content", null, h("div", { class: "header_sec" }, h("ion-img", { src: "assets/icon/logo.png" }), h("h1", null, this.student_name), h("ion-button", { class: "log_out", onClick: () => this.logout(), color: "secondary" }, "Log Out"), h("img", { class: "sch_logo", src: this.logo }), h("div", { class: "search_sec" }, h("ion-searchbar", { placeholder: "Search by school or student name" }), h("h2", null, "No pressure of form fillup. Hassle free admission"))), h("ion-card", { class: "main_body" }, h("div", null, h("h1", null, "Admission Going On")), this.schools.map((ele) => h("ion-card", null, h("ion-row", null, h("ion-col", { size: "2" }, h("ion-img", { src: ele.school_logo })), h("ion-col", { size: "8", class: "padding_horizontal" }, h("h3", null, ele.school_name), h("h4", null, ele.school_address), h("h4", null, ele.school_pin)), h("ion-col", { size: "2" }, h("ion-button", { class: "view_applicant", onClick: () => this.apply(ele.id) }, "Apply")))))))
        ];
    }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
