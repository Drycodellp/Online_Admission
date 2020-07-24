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

const appSchoolRegisterCss = "#result_img,#cast_cert_img,#student_img{display:none}#reg_form{display:none}ion-grid h3{margin:0}";

const AppSchoolRegister = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fileReader = new FileReader();
    }
    changeValue(e) {
        let value = e.target.value;
        switch (e.target.name) {
            case "s_id": {
                this.s_id = value;
                break;
            }
            case "s_pass": {
                this.s_pass = value;
                break;
            }
            case "s_name": {
                this.s_name = value;
                break;
            }
            case "s_guad_name": {
                this.s_guad_name = value;
                break;
            }
            case "s_res_address": {
                this.s_res_address = value;
                break;
            }
            case "s_res_pin": {
                this.s_res_pin = value;
                break;
            }
            case "s_sch_name": {
                this.s_sch_name = value;
                break;
            }
            case "s_sch_address": {
                this.s_sch_address = value;
                break;
            }
            case "s_sch_pin": {
                this.s_sch_pin = value;
                break;
            }
            case "s_reg_number": {
                this.s_reg_number = value;
                break;
            }
            case "s_cast": {
                this.s_cast = value;
                break;
            }
            case "s_ph_number": {
                this.s_ph_number = value;
                break;
            }
            case "s_alt_ph_number": {
                this.s_alt_ph_number = value;
                break;
            }
            case "s_email": {
                this.s_email = value;
                break;
            }
            case "s_password": {
                this.s_password = value;
                break;
            }
            case "s_con_password": {
                this.s_con_password = value;
                break;
            }
            case "s_first_lang_no": {
                this.s_first_lang_no = value;
                break;
            }
            case "s_sec_lang_no": {
                this.s_sec_lang_no = value;
                break;
            }
            case "s_math_no": {
                this.s_math_no = value;
                break;
            }
            case "s_phy_sc_no": {
                this.s_phy_sc_no = value;
                break;
            }
            case "s_life_sc_no": {
                this.s_life_sc_no = value;
                break;
            }
            case "s_history_no": {
                this.s_history_no = value;
                break;
            }
            case "s_geography_no": {
                this.s_geography_no = value;
                break;
            }
            case "s_op_sub_no": {
                this.s_op_sub_no = value;
                break;
            }
        }
    }
    openImgInput(id) {
        document.getElementById(id).click();
    }
    setResultImg(e) {
        if (e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'application/pdf') {
            let file = e.target.files[0];
            this.fileReader.onloadend = () => {
                this.s_result_img = this.fileReader.result;
            };
            this.fileReader.readAsDataURL(file);
        }
        else {
            this.presentToast('Please select an image file(jpg or pdf)');
        }
    }
    setCastImg(e) {
        if (e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'application/pdf') {
            let file = e.target.files[0];
            this.fileReader.onloadend = () => {
                this.s_cast_cert_img = this.fileReader.result;
            };
            this.fileReader.readAsDataURL(file);
        }
        else {
            this.presentToast('Please select an image file(jpg or pdf)');
        }
    }
    setStudentImg(e) {
        if (e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'image/png') {
            let file = e.target.files[0];
            this.fileReader.onloadend = () => {
                this.s_image = this.fileReader.result;
            };
            this.fileReader.readAsDataURL(file);
        }
        else {
            this.presentToast('Please select an image file(jpg or png)');
        }
    }
    async studentLogin() {
        if (this.s_id && this.s_pass) {
            let response = await fetch("http://localhost:1337/students?s_reg_number=" + this.s_id);
            let json = await response.json();
            //console.log('response00',json);
            if (json && json.length > 0) {
                //console.log(json[0].s_password)
                if (this.s_pass == json[0].s_password) {
                    this.presentToast('You are successfully logged in');
                    window.location.assign("/student-dashboard");
                    window.localStorage.setItem('user_details', JSON.stringify(json));
                }
                else {
                    this.presentToast('Wrong password');
                }
            }
            else if (json && json.length == 0) {
                this.presentToast('You are not registered');
            }
        }
    }
    async studentRegistration() {
        if (this.s_name && this.s_guad_name && this.s_res_address && this.s_res_pin
            && this.s_sch_name && this.s_sch_address && this.s_sch_pin && this.s_reg_number
            && this.s_cast && this.s_ph_number && this.s_password && this.s_first_lang_no
            && this.s_sec_lang_no && this.s_math_no && this.s_phy_sc_no && this.s_life_sc_no
            && this.s_history_no && this.s_geography_no && this.s_op_sub_no && this.s_result_img
            && this.s_cast_cert_img && this.s_image) {
            if (this.s_password == this.s_con_password) {
                let checkingResponse = await fetch("http://localhost:1337/students?s_reg_number=" + this.s_reg_number);
                let jsonRes = await checkingResponse.json();
                if (jsonRes && jsonRes.length == 0) {
                    let postData = {
                        "s_name": this.s_name,
                        "s_guad_name": this.s_guad_name,
                        "s_res_address": this.s_res_address,
                        "s_res_pin": this.s_res_pin.toString(),
                        "s_sch_name": this.s_sch_name,
                        "s_sch_address": this.s_sch_address,
                        "s_sch_pin": this.s_sch_pin.toString(),
                        "s_reg_number": this.s_reg_number,
                        "s_cast": this.s_cast,
                        "s_ph_number": this.s_ph_number.toString(),
                        "s_alt_ph_number": this.s_alt_ph_number ? this.s_alt_ph_number.toString() : null,
                        "s_email": this.s_email,
                        "s_password": this.s_password,
                        "s_first_lang_no": this.s_first_lang_no.toString(),
                        "s_sec_lang_no": this.s_sec_lang_no.toString(),
                        "s_math_no": this.s_math_no.toString(),
                        "s_phy_sc_no": this.s_phy_sc_no.toString(),
                        "s_life_sc_no": this.s_life_sc_no.toString(),
                        "s_history_no": this.s_history_no.toString(),
                        "s_geography_no": this.s_geography_no.toString(),
                        "s_op_sub_no": this.s_op_sub_no.toString(),
                        "s_result_img": this.s_result_img,
                        "s_cast_cert_img": this.s_cast_cert_img,
                        "s_image": this.s_image
                    };
                    let response = await fetch("http://localhost:1337/students", {
                        method: 'POST',
                        body: JSON.stringify(postData),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    let json = await response.json();
                    console.log('response', json);
                    if (json && json.length > 0) {
                        this.presentToast('You are successfully registered');
                        window.location.assign("/student-dashboard");
                        window.localStorage.setItem('user_details', JSON.stringify(json));
                    }
                    else {
                        this.presentToast('There is some error');
                    }
                }
                else if (jsonRes && jsonRes.length > 0) {
                    this.presentToast('Candidate with this registration number already exist');
                }
            }
            else {
                this.presentToast('Password does not match Confirm Password');
            }
        }
        else {
            this.presentToast('Please input the required fields properlly');
        }
    }
    segmentChange(e) {
        if (e.target.value == 's_login') {
            document.getElementById('reg_form').style.display = 'none';
            document.getElementById('login_form').style.display = 'block';
        }
        else if (e.target.value == 's_reg') {
            document.getElementById('login_form').style.display = 'none';
            document.getElementById('reg_form').style.display = 'block';
        }
    }
    async presentToast(msg) {
        const toast = await toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }
    render() {
        return [
            h("ion-content", null, h("div", { class: "header_sec" }, h("ion-img", { src: "assets/icon/logo.png" }), h("ion-button", { color: "secondary", href: "/school-registration" }, "Register or Login Your School"), h("div", { class: "search_sec" }, h("ion-searchbar", { placeholder: "Search by school or student name" }), h("h2", null, "No pressure of form fillup. Hassle free admission"))), h("ion-card", { class: "main_body" }, h("ion-segment", { onIonChange: ev => this.segmentChange(ev), value: "s_login" }, h("ion-segment-button", { value: "s_login" }, h("ion-label", null, "LOGIN")), h("ion-segment-button", { value: "s_reg" }, h("ion-label", null, "REGISTRATION"))), h("div", { id: "login_form" }, h("ion-list", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Registration Number"), h("ion-input", { name: "s_id", onInput: ev => this.changeValue(ev), placeholder: "e.g. SAHEB123456", type: "text" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Password"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_pass", placeholder: "********", type: "password" }))), h("ion-button", { expand: "full", onClick: () => this.studentLogin() }, "SUBMIT")), h("div", { id: "reg_form" }, h("ion-list", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Student Name"), h("ion-input", { name: "s_name", onInput: ev => this.changeValue(ev), placeholder: "e.g. Saheb Maity", type: "text" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Guardian Name"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_guad_name", placeholder: "e.g. Samrat Maity", type: "text" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Rasidential Address"), h("ion-textarea", { onInput: ev => this.changeValue(ev), name: "s_res_address", placeholder: "e.g. Nopkala, Chandrakona Road" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "PIN Code"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_res_pin", placeholder: "e.g. 123456", type: "number" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "School Name"), h("ion-input", { name: "s_sch_name", onInput: ev => this.changeValue(ev), placeholder: "e.g. Nopkala High School", type: "text" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "School Address"), h("ion-textarea", { onInput: ev => this.changeValue(ev), name: "s_sch_address", placeholder: "e.g. Nopkala, Chandrokana Road" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "School PIN Code"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_sch_pin", placeholder: "e.g. 123456", type: "number" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Madhyamik Registration Number"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_reg_number", placeholder: "e.g. 11111111111", type: "text" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Cast"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_cast", placeholder: "e.g. OBC", type: "text" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Phone Number"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_ph_number", placeholder: "e.g. 1234567890", type: "number" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Alternative Phone Number(Optional)"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_alt_ph_number", placeholder: "e.g. 1234567890", type: "number" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "E-mail ID(Optional)"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_email", placeholder: "e.g. sahebmaity90@gmail.com", type: "email" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Create Password(Min 6 carecter)"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_password", placeholder: "********", type: "password" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Confirm Password"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_con_password", placeholder: "********", type: "password" }))), h("ion-grid", null, h("h3", null, "Subject wise number"), h("ion-row", null, h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "1st Language"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_first_lang_no", placeholder: "e.g. 91", type: "number" }))), h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "2nd Language"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_sec_lang_no", placeholder: "e.g. 91", type: "number" }))), h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Mathametics"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_math_no", placeholder: "e.g. 91", type: "number" }))), h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Physical Science"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_phy_sc_no", placeholder: "e.g. 91", type: "number" })))), h("ion-row", null, h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Life Science"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_life_sc_no", placeholder: "e.g. 91", type: "number" }))), h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "History"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_history_no", placeholder: "e.g. 91", type: "number" }))), h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Geography"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_geography_no", placeholder: "e.g. 91", type: "number" }))), h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Physical Education(optional sub)"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "s_op_sub_no", placeholder: "e.g. 91", type: "number" }))))), h("ion-grid", null, h("h3", null, "Documents Upload"), h("ion-row", null, h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Passport Size Photo"), h("ion-img", { class: "upload_img", onClick: () => this.openImgInput("student_img"), src: "assets/icon/uploadIcon.jpg" }), h("input", { type: "file", id: "student_img", onChange: ev => this.setStudentImg(ev), accept: "image/png, image/jpeg" }))), h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Madhyamik Result"), h("ion-img", { class: "upload_img", onClick: () => this.openImgInput("result_img"), src: "assets/icon/uploadIcon.jpg" }), h("input", { type: "file", id: "result_img", onChange: ev => this.setResultImg(ev), accept: "application/pdf, image/jpeg" }))), h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Cast Certificate"), h("ion-img", { class: "upload_img", onClick: () => this.openImgInput("cast_cert_img"), src: "assets/icon/uploadIcon.jpg" }), h("input", { type: "file", id: "cast_cert_img", onChange: ev => this.setCastImg(ev), accept: "application/pdf, image/jpeg" }))))), h("ion-button", { expand: "full", onClick: () => this.studentRegistration() }, "Register"))))
        ];
    }
};
AppSchoolRegister.style = appSchoolRegisterCss;

export { AppSchoolRegister as app_school_register };
