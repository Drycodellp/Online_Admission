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

const appStudentRegisterCss = "#school_logo,#sp_pan_img,#sp_aadhar_img,#auth_cert_img,#school_dd{display:none}#reg_form1{display:none}ion-grid h3{margin:0}#fields_for_online,#fields_for_challan,#imgs_for_online1,#imgs_for_online2,#imgs_for_online3,#imgs_for_challan{display:none}.sub_sel ion-row,.sub_sel ion-col{border:1px solid gray}.sub_sel .lang_col{display:flex;flex-wrap:wrap}.sub_sel ion-col div{height:29px;padding:6px}.sub_sel ion-col ion-label{margin-left:5px;font-size:20px}";

const AppStudentRegister = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.school_available_subject = {};
        this.fileReader = new FileReader();
        ////////////
        this.firstLang = [];
        this.secLang = [];
        this.set1row1 = [];
        this.set1row2 = [];
        this.set1row3 = [];
        this.set1row4 = [];
        this.set1row5 = [];
        this.set1row6 = [];
        this.set2row1 = [];
        this.set2row2 = [];
        this.set2row3 = [];
        this.set2row4 = [];
        this.set2row5 = [];
        this.set2row6 = [];
        this.set3row1 = [];
        this.set3row2 = [];
        this.set3row3 = [];
        this.set3row4 = [];
        this.set3row5 = [];
        this.set3row6 = [];
        this.set3row7 = [];
    }
    async componentWillLoad() {
        let res = await fetch("http://localhost:3333/assets/subjects.json");
        this.resValue = await res.json();
        //console.log(this.resValue);
    }
    segmentChange(e) {
        if (e.target.value == 's_login') {
            document.getElementById('reg_form1').style.display = 'none';
            document.getElementById('login_form1').style.display = 'block';
        }
        else if (e.target.value == 's_reg') {
            document.getElementById('login_form1').style.display = 'none';
            document.getElementById('reg_form1').style.display = 'block';
        }
    }
    async presentToast(msg) {
        const toast = await toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }
    changeValue(e) {
        let value = e.target.value;
        switch (e.target.name) {
            case "school_id": {
                this.school_id = value;
                break;
            }
            case "school_pass": {
                this.school_pass = value;
                break;
            }
            case "school_name": {
                this.school_name = value;
                break;
            }
            case "school_address": {
                this.school_address = value;
                break;
            }
            case "school_pin": {
                this.school_pin = value;
                break;
            }
            case "school_dise_id": {
                this.school_dise_id = value;
                break;
            }
            case "school_hm_name": {
                this.school_hm_name = value;
                break;
            }
            case "school_rp_name": {
                this.school_rp_name = value;
                break;
            }
            case "school_hm_ph": {
                this.school_hm_ph = value;
                break;
            }
            case "school_rp_ph": {
                this.school_rp_ph = value;
                break;
            }
            case "school_official_mail": {
                this.school_official_mail = value;
                break;
            }
            case "school_ac_no": {
                this.school_ac_no = value;
                break;
            }
            case "school_ifsc_code": {
                this.school_ifsc_code = value;
                break;
            }
            case "school_sp_ph_no": {
                this.school_sp_ph_no = value;
                break;
            }
            case "school_sp_email": {
                this.school_sp_email = value;
                break;
            }
            case "school_dd_no": {
                this.school_dd_no = value;
                break;
            }
            case "school_dd_submission_date": {
                this.school_dd_submission_date = value;
                break;
            }
            case "school_password": {
                this.school_password = value;
                break;
            }
            case "school_con_password": {
                this.school_con_password = value;
                break;
            }
        }
    }
    selSub(sec, e, val) {
        //console.log(sec, e.target.checked, val)
        switch (sec) {
            case "firstLang": {
                if (!e.target.checked) {
                    this.firstLang.push(val);
                }
                else {
                    if (this.firstLang.length > 0) {
                        for (var i = 0; i < this.firstLang.length; i++) {
                            let ele = this.firstLang[i];
                            if (ele == val) {
                                this.firstLang.splice(this.firstLang.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "secLang": {
                if (!e.target.checked) {
                    this.secLang.push(val);
                }
                else {
                    if (this.secLang.length > 0) {
                        for (var i = 0; i < this.secLang.length; i++) {
                            let ele = this.secLang[i];
                            if (ele == val) {
                                this.secLang.splice(this.secLang.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set1row1": {
                if (!e.target.checked) {
                    this.set1row1.push(val);
                }
                else {
                    if (this.set1row1.length > 0) {
                        for (var i = 0; i < this.set1row1.length; i++) {
                            let ele = this.set1row1[i];
                            if (ele == val) {
                                this.set1row1.splice(this.set1row1.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set1row2": {
                if (!e.target.checked) {
                    this.set1row2.push(val);
                }
                else {
                    if (this.set1row2.length > 0) {
                        for (var i = 0; i < this.set1row2.length; i++) {
                            let ele = this.set1row2[i];
                            if (ele == val) {
                                this.set1row2.splice(this.set1row2.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set1row3": {
                if (!e.target.checked) {
                    this.set1row3.push(val);
                }
                else {
                    if (this.set1row3.length > 0) {
                        for (var i = 0; i < this.set1row3.length; i++) {
                            let ele = this.set1row3[i];
                            if (ele == val) {
                                this.set1row3.splice(this.set1row3.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set1row4": {
                if (!e.target.checked) {
                    this.set1row4.push(val);
                }
                else {
                    if (this.set1row4.length > 0) {
                        for (var i = 0; i < this.set1row4.length; i++) {
                            let ele = this.set1row4[i];
                            if (ele == val) {
                                this.set1row4.splice(this.set1row4.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set1row5": {
                if (!e.target.checked) {
                    this.set1row5.push(val);
                }
                else {
                    if (this.set1row5.length > 0) {
                        for (var i = 0; i < this.set1row5.length; i++) {
                            let ele = this.set1row5[i];
                            if (ele == val) {
                                this.set1row5.splice(this.set1row5.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set1row6": {
                if (!e.target.checked) {
                    this.set1row6.push(val);
                }
                else {
                    if (this.set1row6.length > 0) {
                        for (var i = 0; i < this.set1row6.length; i++) {
                            let ele = this.set1row6[i];
                            if (ele == val) {
                                this.set1row6.splice(this.set1row6.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set2row1": {
                if (!e.target.checked) {
                    this.set2row1.push(val);
                }
                else {
                    if (this.set2row1.length > 0) {
                        for (var i = 0; i < this.set2row1.length; i++) {
                            let ele = this.set2row1[i];
                            if (ele == val) {
                                this.set2row1.splice(this.set2row1.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set2row2": {
                if (!e.target.checked) {
                    this.set2row2.push(val);
                }
                else {
                    if (this.set2row2.length > 0) {
                        for (var i = 0; i < this.set2row2.length; i++) {
                            let ele = this.set2row2[i];
                            if (ele == val) {
                                this.set2row2.splice(this.set2row2.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set2row3": {
                if (!e.target.checked) {
                    this.set2row3.push(val);
                }
                else {
                    if (this.set2row3.length > 0) {
                        for (var i = 0; i < this.set2row3.length; i++) {
                            let ele = this.set2row3[i];
                            if (ele == val) {
                                this.set2row3.splice(this.set2row3.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set2row4": {
                if (!e.target.checked) {
                    this.set2row4.push(val);
                }
                else {
                    if (this.set2row4.length > 0) {
                        for (var i = 0; i < this.set2row4.length; i++) {
                            let ele = this.set2row4[i];
                            if (ele == val) {
                                this.set2row4.splice(this.set2row4.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set2row5": {
                if (!e.target.checked) {
                    this.set2row5.push(val);
                }
                else {
                    if (this.set2row5.length > 0) {
                        for (var i = 0; i < this.set2row5.length; i++) {
                            let ele = this.set2row5[i];
                            if (ele == val) {
                                this.set2row5.splice(this.set2row5.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set2row6": {
                if (!e.target.checked) {
                    this.set2row6.push(val);
                }
                else {
                    if (this.set2row6.length > 0) {
                        for (var i = 0; i < this.set2row6.length; i++) {
                            let ele = this.set2row6[i];
                            if (ele == val) {
                                this.set2row6.splice(this.set2row6.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set3row1": {
                if (!e.target.checked) {
                    this.set3row1.push(val);
                }
                else {
                    if (this.set3row1.length > 0) {
                        for (var i = 0; i < this.set3row1.length; i++) {
                            let ele = this.set3row1[i];
                            if (ele == val) {
                                this.set3row1.splice(this.set3row1.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set3row2": {
                if (!e.target.checked) {
                    this.set3row2.push(val);
                }
                else {
                    if (this.set3row2.length > 0) {
                        for (var i = 0; i < this.set3row2.length; i++) {
                            let ele = this.set3row2[i];
                            if (ele == val) {
                                this.set3row2.splice(this.set3row2.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set3row3": {
                if (!e.target.checked) {
                    this.set3row3.push(val);
                }
                else {
                    if (this.set3row3.length > 0) {
                        for (var i = 0; i < this.set3row3.length; i++) {
                            let ele = this.set3row3[i];
                            if (ele == val) {
                                this.set3row3.splice(this.set3row3.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set3row4": {
                if (!e.target.checked) {
                    this.set3row4.push(val);
                }
                else {
                    if (this.set3row4.length > 0) {
                        for (var i = 0; i < this.set3row4.length; i++) {
                            let ele = this.set3row4[i];
                            if (ele == val) {
                                this.set3row4.splice(this.set3row4.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set3row5": {
                if (!e.target.checked) {
                    this.set3row5.push(val);
                }
                else {
                    if (this.set3row5.length > 0) {
                        for (var i = 0; i < this.set3row5.length; i++) {
                            let ele = this.set3row5[i];
                            if (ele == val) {
                                this.set3row5.splice(this.set3row5.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set3row6": {
                if (!e.target.checked) {
                    this.set3row6.push(val);
                }
                else {
                    if (this.set3row6.length > 0) {
                        for (var i = 0; i < this.set3row6.length; i++) {
                            let ele = this.set3row6[i];
                            if (ele == val) {
                                this.set3row6.splice(this.set3row6.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
            case "set3row7": {
                if (!e.target.checked) {
                    this.set3row7.push(val);
                }
                else {
                    if (this.set3row7.length > 0) {
                        for (var i = 0; i < this.set3row7.length; i++) {
                            let ele = this.set3row7[i];
                            if (ele == val) {
                                this.set3row7.splice(this.set3row7.indexOf(ele), 1);
                            }
                        }
                    }
                }
                break;
            }
        }
    }
    paymentOptionChange(e) {
        //console.log(e.target.value);
        this.school_payment_option = e.target.value;
        if (this.school_payment_option == 'online') {
            document.getElementById('fields_for_challan').style.display = 'none';
            document.getElementById('imgs_for_challan').style.display = 'none';
            document.getElementById('fields_for_online').style.display = 'block';
            document.getElementById('imgs_for_online1').style.display = 'block';
            document.getElementById('imgs_for_online2').style.display = 'block';
            document.getElementById('imgs_for_online3').style.display = 'block';
        }
        else if (this.school_payment_option == 'offline') {
            document.getElementById('fields_for_challan').style.display = 'none';
            document.getElementById('imgs_for_challan').style.display = 'none';
            document.getElementById('fields_for_online').style.display = 'none';
            document.getElementById('imgs_for_online1').style.display = 'none';
            document.getElementById('imgs_for_online2').style.display = 'none';
            document.getElementById('imgs_for_online3').style.display = 'none';
        }
        else if (this.school_payment_option == 'e-challan') {
            document.getElementById('fields_for_online').style.display = 'none';
            document.getElementById('imgs_for_online1').style.display = 'none';
            document.getElementById('imgs_for_online2').style.display = 'none';
            document.getElementById('imgs_for_online3').style.display = 'none';
            document.getElementById('fields_for_challan').style.display = 'block';
            document.getElementById('imgs_for_challan').style.display = 'block';
        }
    }
    openImgInput(id) {
        document.getElementById(id).click();
    }
    setLogoImg(e) {
        if (e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'image/png') {
            let file = e.target.files[0];
            this.fileReader.onloadend = () => {
                this.school_logo = this.fileReader.result;
            };
            this.fileReader.readAsDataURL(file);
        }
        else {
            this.presentToast('Please select an image file(jpg or png)');
        }
    }
    setSpPanImg(e) {
        if (e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'application/pdf') {
            let file = e.target.files[0];
            this.fileReader.onloadend = () => {
                this.school_pan_img = this.fileReader.result;
            };
            this.fileReader.readAsDataURL(file);
        }
        else {
            this.presentToast('Please select an image file(jpg or pdf)');
        }
    }
    setSpAadharImg(e) {
        if (e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'application/pdf') {
            let file = e.target.files[0];
            this.fileReader.onloadend = () => {
                this.school_aadhar_img = this.fileReader.result;
            };
            this.fileReader.readAsDataURL(file);
        }
        else {
            this.presentToast('Please select an image file(jpg or pdf)');
        }
    }
    setAuthCertImg(e) {
        if (e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'application/pdf') {
            let file = e.target.files[0];
            this.fileReader.onloadend = () => {
                this.school_sac_img = this.fileReader.result;
            };
            this.fileReader.readAsDataURL(file);
        }
        else {
            this.presentToast('Please select an image file(jpg or pdf)');
        }
    }
    setDdImg(e) {
        if (e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'application/pdf') {
            let file = e.target.files[0];
            this.fileReader.onloadend = () => {
                this.school_dd_img = this.fileReader.result;
            };
            this.fileReader.readAsDataURL(file);
        }
        else {
            this.presentToast('Please select an image file(jpg or pdf)');
        }
    }
    async schoolLogin() {
        if (this.school_id && this.school_pass) {
            let response = await fetch("http://localhost:1337/teachers?school_official_mail=" + this.school_id);
            let json = await response.json();
            console.log('response00', json);
            if (json && json.length > 0) {
                //console.log(json[0].s_password)
                if (this.school_pass == json[0].school_password) {
                    this.presentToast('You are successfully logged in');
                    window.location.assign("/school-dashboard");
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
        else {
            this.presentToast('Please input the required fields properlly');
        }
    }
    schoolRegistration() {
        this.school_available_subject = {
            "first_language": this.firstLang,
            "second_language": this.secLang,
            "set1": {
                "row1": this.set1row1,
                "row2": this.set1row2,
                "row3": this.set1row3,
                "row4": this.set1row4,
                "row5": this.set1row5,
                "row6": this.set1row6,
            },
            "set2": {
                "row1": this.set2row1,
                "row2": this.set2row2,
                "row3": this.set2row3,
                "row4": this.set2row4,
                "row5": this.set2row5,
                "row6": this.set2row6,
            },
            "set3": {
                "row1": this.set3row1,
                "row2": this.set3row2,
                "row3": this.set3row3,
                "row4": this.set3row4,
                "row5": this.set3row5,
                "row6": this.set3row6,
                "row7": this.set3row7,
            }
        };
        if (this.school_name && this.school_address && this.school_pin && this.school_dise_id
            && this.school_hm_name && this.school_rp_name && this.school_hm_ph && this.school_rp_ph
            && this.school_official_mail && this.school_available_subject && this.school_payment_option
            && this.school_logo && this.school_password && this.school_con_password) {
            if (this.school_payment_option == 'online') {
                if (this.school_ac_no && this.school_ifsc_code && this.school_sp_email && this.school_sp_ph_no
                    && this.school_pan_img && this.school_aadhar_img && this.school_sac_img) {
                    this.register();
                }
                else {
                    this.presentToast('Please input the required fields properlly');
                }
            }
            else if (this.school_payment_option == 'e-challan') {
                if (this.school_dd_no && this.school_dd_submission_date && this.school_dd_img) {
                    this.register();
                }
                else {
                    this.presentToast('Please input the required fields properlly');
                }
            }
            else if (this.school_payment_option == 'offline') {
                this.register();
            }
        }
        else {
            this.presentToast('Please input the required fields properlly');
        }
    }
    async register() {
        if (this.school_password == this.school_con_password) {
            let checkingResponse = await fetch("http://localhost:1337/teachers?school_dise_id=" + this.school_dise_id);
            let jsonRes = await checkingResponse.json();
            if (jsonRes && jsonRes.length == 0) {
                let checkingResponse2 = await fetch("http://localhost:1337/teachers?school_official_mail=" + this.school_official_mail);
                let jsonRes2 = await checkingResponse2.json();
                if (jsonRes2 && jsonRes2.length == 0) {
                    let postData = {
                        "school_name": this.school_name,
                        "school_address": this.school_address,
                        "school_pin": this.school_pin,
                        "school_dise_id": this.school_dise_id,
                        "school_hm_name": this.school_hm_name,
                        "school_rp_name": this.school_rp_name,
                        "school_official_mail": this.school_official_mail,
                        "school_hm_ph": this.school_hm_ph,
                        "school_rp_ph": this.school_rp_ph,
                        "school_available_subject": this.school_available_subject,
                        "school_payment_option": this.school_payment_option,
                        "school_ac_no": this.school_ac_no,
                        "school_ifsc_code": this.school_ifsc_code,
                        "school_sp_ph_no": this.school_sp_ph_no,
                        "school_sp_email": this.school_sp_email,
                        "school_dd_no": this.school_dd_no,
                        "school_dd_submission_date": this.school_dd_submission_date,
                        "school_logo": this.school_logo,
                        "school_pan_img": this.school_pan_img,
                        "school_aadhar_img": this.school_aadhar_img,
                        "school_dd_img": this.school_dd_img,
                        "school_sac_img": this.school_sac_img,
                        "school_password": this.school_password,
                    };
                    let response = await fetch("http://localhost:1337/teachers", {
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
                        window.location.assign("/school-dashboard");
                        window.localStorage.setItem('user_details', JSON.stringify(json));
                    }
                    else {
                        this.presentToast('There is some error');
                    }
                }
                else if (jsonRes && jsonRes.length > 0) {
                    this.presentToast('Duplicate Email Id');
                }
            }
            else if (jsonRes && jsonRes.length > 0) {
                this.presentToast('Duplicate Dise Id');
            }
        }
        else {
            this.presentToast('Password does not match Confirm Password');
        }
    }
    render() {
        return [
            h("ion-content", null, h("div", { class: "header_sec" }, h("ion-img", { src: "assets/icon/logo.png" }), h("ion-button", { color: "secondary", href: "/" }, "Register or Login for Student"), h("div", { class: "search_sec" }, h("ion-searchbar", { placeholder: "Search by school or student name" }), h("h2", null, "No pressure of form fillup. Hassle free admission"))), h("ion-card", { class: "main_body" }, h("ion-segment", { onIonChange: ev => this.segmentChange(ev), value: "s_login" }, h("ion-segment-button", { value: "s_login" }, h("ion-label", null, "LOGIN")), h("ion-segment-button", { value: "s_reg" }, h("ion-label", null, "REGISTRATION"))), h("div", { id: "login_form1" }, h("ion-list", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "Email ID"), h("ion-input", { name: "school_id", onInput: ev => this.changeValue(ev), placeholder: "e.g. exe@gmail.com", type: "email" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Password"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "school_pass", placeholder: "********", type: "password" }))), h("ion-button", { expand: "full", onClick: () => this.schoolLogin() }, "SUBMIT")), h("div", { id: "reg_form1" }, h("ion-list", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "School Name"), h("ion-input", { name: "school_name", onInput: ev => this.changeValue(ev), placeholder: "e.g. Govt. High School", type: "text" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "School Dise ID"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "school_dise_id", placeholder: "e.g. 123456789012", type: "number" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "School Address"), h("ion-textarea", { onInput: ev => this.changeValue(ev), name: "school_address", placeholder: "e.g. Nopkala, Chandrakona Road" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "PIN Code"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "school_pin", placeholder: "e.g. 123456", type: "number" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "School HM/IC Name"), h("ion-input", { name: "school_hm_name", onInput: ev => this.changeValue(ev), placeholder: "e.g. Saheb Maity", type: "text" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Responsible Person Name"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "school_rp_name", placeholder: "e.g. Nopkala, Chandrokana Road", type: "text" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "HM/IC Phone Number"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "school_hm_ph", placeholder: "e.g. 1234567890", type: "number" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Responsible Person Phone Number"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "school_rp_ph", placeholder: "e.g. 1234567890", type: "number" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Official Email ID"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "school_official_mail", placeholder: "e.g. abc@gmail.com", type: "email" })), h("ion-grid", { class: "sub_sel" }, h("h3", null, "Subject Selection"), h("ion-row", null, h("ion-col", { size: "3" }, h("h4", null, "First Language")), h("ion-col", { size: "9", class: "lang_col" }, this.resValue.first_language.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('firstLang', ev, val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-col", { size: "3" }, h("h4", null, "Second Language")), h("ion-col", { size: "9", class: "lang_col" }, this.resValue.second_language.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('secLang', ev, val) }), h("ion-label", null, val))))), h("ion-row", null, h("ion-col", { size: "3" }, h("h4", null, "Science")), h("ion-col", { size: "9" }, h("ion-row", null, this.resValue.set1.row1.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set1row1', ev, val) }), h("ion-label", null, val)))), h("ion-row", null, this.resValue.set1.row2.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set1row2', ev, val) }), h("ion-label", null, val)))), h("ion-row", null, this.resValue.set1.row3.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set1row3', ev, val) }), h("ion-label", null, val)))), h("ion-row", null, this.resValue.set1.row4.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set1row4', ev, val) }), h("ion-label", null, val)))), h("ion-row", null, this.resValue.set1.row5.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set1row5', ev, val) }), h("ion-label", null, val)))), h("ion-row", null, this.resValue.set1.row6.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set1row6', ev, val) }), h("ion-label", null, val)))))), h("ion-row", null, h("ion-col", { size: "3" }, h("h4", null, "Commerce")), h("ion-col", { size: "9" }, h("ion-row", null, this.resValue.set2.row1.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set2row1', ev, val) }), h("ion-label", null, val)))), h("ion-row", null, this.resValue.set2.row2.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set2row2', ev, val) }), h("ion-label", null, val)))), h("ion-row", null, this.resValue.set2.row3.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set2row3', ev, val) }), h("ion-label", null, val)))), h("ion-row", null, this.resValue.set2.row4.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set2row4', ev, val) }), h("ion-label", null, val)))), h("ion-row", null, this.resValue.set2.row5.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set2row5', ev, val) }), h("ion-label", null, val)))), h("ion-row", null, this.resValue.set2.row6.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set2row6', ev, val) }), h("ion-label", null, val)))))), h("ion-row", null, h("ion-col", { size: "3" }, h("h4", null, "Arts")), h("ion-col", { size: "9" }, h("ion-row", null, this.resValue.set3.row1.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set3row1', ev, val) }), h("ion-label", null, val)))), h("ion-row", null, this.resValue.set3.row2.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set3row2', ev, val) }), h("ion-label", null, val)))), h("ion-row", null, this.resValue.set3.row3.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set3row3', ev, val) }), h("ion-label", null, val)))), h("ion-row", null, this.resValue.set3.row4.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set3row4', ev, val) }), h("ion-label", null, val)))), h("ion-row", null, this.resValue.set3.row5.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set3row5', ev, val) }), h("ion-label", null, val)))), h("ion-row", null, this.resValue.set3.row6.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set3row6', ev, val) }), h("ion-label", null, val)))), h("ion-row", null, this.resValue.set3.row7.map((val) => h("div", null, h("ion-checkbox", { slot: "start", onClick: ev => this.selSub('set3row7', ev, val) }), h("ion-label", null, val))))))), h("ion-list", null, h("ion-radio-group", null, h("ion-list-header", null, h("ion-label", null, "Payment Options")), h("ion-item", null, h("ion-label", null, "Offline"), h("ion-radio", { slot: "start", value: "offline", onClick: ev => this.paymentOptionChange(ev) })), h("ion-item", null, h("ion-label", null, "Online"), h("ion-radio", { slot: "start", value: "online", onClick: ev => this.paymentOptionChange(ev) })), h("ion-item", null, h("ion-label", null, "E-challan"), h("ion-radio", { slot: "start", value: "e-challan", onClick: ev => this.paymentOptionChange(ev) })))), h("div", { id: "fields_for_online" }, h("ion-item", null, h("ion-label", { position: "stacked" }, "School A/C Number"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "school_ac_no", placeholder: "e.g. 123456789055", type: "text" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "IFSC Number"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "school_ifsc_code", placeholder: "e.g. 123456", type: "text" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Signetury Person's Phone Number"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "school_sp_ph_no", placeholder: "e.g. 1234567890", type: "number" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Signetury Person's Email ID"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "school_sp_email", placeholder: "e.g. abc@gmail.com", type: "email" }))), h("div", { id: "fields_for_challan" }, h("ion-item", null, h("ion-label", { position: "stacked" }, "School DD Number"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "school_dd_no", placeholder: "e.g. 1234567890", type: "text" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "DD Submission Date"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "school_dd_submission_date", placeholder: "e.g. abc@gmail.com", type: "date" }))), h("ion-item", null, h("ion-label", { position: "stacked" }, "Create Password(Min 6 carecter)"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "school_password", placeholder: "********", type: "password" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Confirm Password"), h("ion-input", { onInput: ev => this.changeValue(ev), name: "school_con_password", placeholder: "********", type: "password" })), h("ion-grid", null, h("h3", null, "Documents Upload"), h("ion-row", null, h("ion-col", null, h("ion-item", null, h("ion-label", { position: "stacked" }, "School Logo"), h("ion-img", { class: "upload_img", onClick: () => this.openImgInput("school_logo"), src: "assets/icon/uploadIcon.jpg" }), h("input", { type: "file", id: "school_logo", onChange: ev => this.setLogoImg(ev), accept: "image/png, image/jpeg" }))), h("ion-col", { id: "imgs_for_online1" }, h("ion-item", null, h("ion-label", { position: "stacked" }, "Signetury Person's PAN"), h("ion-img", { class: "upload_img", onClick: () => this.openImgInput("sp_pan_img"), src: "assets/icon/uploadIcon.jpg" }), h("input", { type: "file", id: "sp_pan_img", onChange: ev => this.setSpPanImg(ev), accept: "application/pdf, image/jpeg" }))), h("ion-col", { id: "imgs_for_online2" }, h("ion-item", null, h("ion-label", { position: "stacked" }, "Signetury Person's Aadhar"), h("ion-img", { class: "upload_img", onClick: () => this.openImgInput("sp_aadhar_img"), src: "assets/icon/uploadIcon.jpg" }), h("input", { type: "file", id: "sp_aadhar_img", onChange: ev => this.setSpAadharImg(ev), accept: "application/pdf, image/jpeg" }))), h("ion-col", { id: "imgs_for_online3" }, h("ion-item", null, h("ion-label", { position: "stacked" }, "School authorization Certificate"), h("ion-img", { class: "upload_img", onClick: () => this.openImgInput("auth_cert_img"), src: "assets/icon/uploadIcon.jpg" }), h("input", { type: "file", id: "auth_cert_img", onChange: ev => this.setAuthCertImg(ev), accept: "application/pdf, image/jpeg" }))), h("ion-col", { id: "imgs_for_challan" }, h("ion-item", null, h("ion-label", { position: "stacked" }, "Demand Draft"), h("ion-img", { class: "upload_img", onClick: () => this.openImgInput("school_dd"), src: "assets/icon/uploadIcon.jpg" }), h("input", { type: "file", id: "school_dd", onChange: ev => this.setDdImg(ev), accept: "application/pdf, image/jpeg" })))))), h("ion-button", { expand: "full", onClick: () => this.schoolRegistration() }, "Register"))))
        ];
    }
};
AppStudentRegister.style = appStudentRegisterCss;

export { AppStudentRegister as app_student_register };
