import { Component, State, h } from '@stencil/core';
import { toastController } from '@ionic/core';

@Component({
  tag: 'app-student-register',
  styleUrl: 'app-student-register.css'
})
export class AppStudentRegister {
  @State() resValue;

  async componentWillLoad(){
    let res = await fetch("http://localhost:3333/assets/subjects.json");
    this.resValue = await res.json();
    //console.log(this.resValue);
  }

  private school_id:string;
  private school_pass;
  private school_name:string;
  private school_address:string;
  private school_pin:number;
  private school_dise_id:number;
  private school_hm_name:string;
  private school_rp_name:string;
  private school_hm_ph:number;
  private school_rp_ph:number;
  private school_official_mail:string;
  private school_available_subject={};
  private school_payment_option:string;
  private school_ac_no;
  private school_ifsc_code;
  private school_sp_ph_no:number;
  private school_sp_email:string;
  private school_dd_no:string;
  private school_dd_submission_date:Date;
  private school_logo:string | ArrayBuffer;
  private school_pan_img:string | ArrayBuffer;
  private school_aadhar_img:string | ArrayBuffer;
  private school_dd_img:string | ArrayBuffer;
  private school_sac_img:string | ArrayBuffer;
  private school_password;
  private school_con_password;

  public fileReader = new FileReader();

////////////
  public firstLang = [];
  public secLang = [];
  public set1row1 = [];
  public set1row2 = [];
  public set1row3 = [];
  public set1row4 = [];
  public set1row5 = [];
  public set1row6 = [];
  public set2row1 = [];
  public set2row2 = [];
  public set2row3 = [];
  public set2row4 = [];
  public set2row5 = [];
  public set2row6 = [];
  public set3row1 = [];
  public set3row2 = [];
  public set3row3 = [];
  public set3row4 = [];
  public set3row5 = [];
  public set3row6 = [];
  public set3row7 = [];

  segmentChange(e){
    if(e.target.value == 's_login'){
      document.getElementById('reg_form1').style.display = 'none';
      document.getElementById('login_form1').style.display = 'block';
    }else if(e.target.value == 's_reg'){
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

  changeValue(e){
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

  selSub(sec, e,val){
    //console.log(sec, e.target.checked, val)
    switch (sec) {
      case "firstLang": {
        if(!e.target.checked){
          this.firstLang.push(val);
        }else{
          if(this.firstLang.length > 0){
          for(var i=0; i<this.firstLang.length; i++){
            let ele = this.firstLang[i];
            if(ele == val){
              this.firstLang.splice(this.firstLang.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "secLang": {
        if(!e.target.checked){
          this.secLang.push(val);
        }else{
          if(this.secLang.length > 0){
          for(var i=0; i<this.secLang.length; i++){
            let ele = this.secLang[i];
            if(ele == val){
              this.secLang.splice(this.secLang.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set1row1": {
        if(!e.target.checked){
          this.set1row1.push(val);
        }else{
          if(this.set1row1.length > 0){
          for(var i=0; i<this.set1row1.length; i++){
            let ele = this.set1row1[i];
            if(ele == val){
              this.set1row1.splice(this.set1row1.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set1row2": {
        if(!e.target.checked){
          this.set1row2.push(val);
        }else{
          if(this.set1row2.length > 0){
          for(var i=0; i<this.set1row2.length; i++){
            let ele = this.set1row2[i];
            if(ele == val){
              this.set1row2.splice(this.set1row2.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set1row3": {
        if(!e.target.checked){
          this.set1row3.push(val);
        }else{
          if(this.set1row3.length > 0){
          for(var i=0; i<this.set1row3.length; i++){
            let ele = this.set1row3[i];
            if(ele == val){
              this.set1row3.splice(this.set1row3.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set1row4": {
        if(!e.target.checked){
          this.set1row4.push(val);
        }else{
          if(this.set1row4.length > 0){
          for(var i=0; i<this.set1row4.length; i++){
            let ele = this.set1row4[i];
            if(ele == val){
              this.set1row4.splice(this.set1row4.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set1row5": {
        if(!e.target.checked){
          this.set1row5.push(val);
        }else{
          if(this.set1row5.length > 0){
          for(var i=0; i<this.set1row5.length; i++){
            let ele = this.set1row5[i];
            if(ele == val){
              this.set1row5.splice(this.set1row5.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set1row6": {
        if(!e.target.checked){
          this.set1row6.push(val);
        }else{
          if(this.set1row6.length > 0){
          for(var i=0; i<this.set1row6.length; i++){
            let ele = this.set1row6[i];
            if(ele == val){
              this.set1row6.splice(this.set1row6.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set2row1": {
        if(!e.target.checked){
          this.set2row1.push(val);
        }else{
          if(this.set2row1.length > 0){
          for(var i=0; i<this.set2row1.length; i++){
            let ele = this.set2row1[i];
            if(ele == val){
              this.set2row1.splice(this.set2row1.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set2row2": {
        if(!e.target.checked){
          this.set2row2.push(val);
        }else{
          if(this.set2row2.length > 0){
          for(var i=0; i<this.set2row2.length; i++){
            let ele = this.set2row2[i];
            if(ele == val){
              this.set2row2.splice(this.set2row2.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set2row3": {
        if(!e.target.checked){
          this.set2row3.push(val);
        }else{
          if(this.set2row3.length > 0){
          for(var i=0; i<this.set2row3.length; i++){
            let ele = this.set2row3[i];
            if(ele == val){
              this.set2row3.splice(this.set2row3.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set2row4": {
        if(!e.target.checked){
          this.set2row4.push(val);
        }else{
          if(this.set2row4.length > 0){
          for(var i=0; i<this.set2row4.length; i++){
            let ele = this.set2row4[i];
            if(ele == val){
              this.set2row4.splice(this.set2row4.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set2row5": {
        if(!e.target.checked){
          this.set2row5.push(val);
        }else{
          if(this.set2row5.length > 0){
          for(var i=0; i<this.set2row5.length; i++){
            let ele = this.set2row5[i];
            if(ele == val){
              this.set2row5.splice(this.set2row5.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set2row6": {
        if(!e.target.checked){
          this.set2row6.push(val);
        }else{
          if(this.set2row6.length > 0){
          for(var i=0; i<this.set2row6.length; i++){
            let ele = this.set2row6[i];
            if(ele == val){
              this.set2row6.splice(this.set2row6.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set3row1": {
        if(!e.target.checked){
          this.set3row1.push(val);
        }else{
          if(this.set3row1.length > 0){
          for(var i=0; i<this.set3row1.length; i++){
            let ele = this.set3row1[i];
            if(ele == val){
              this.set3row1.splice(this.set3row1.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set3row2": {
        if(!e.target.checked){
          this.set3row2.push(val);
        }else{
          if(this.set3row2.length > 0){
          for(var i=0; i<this.set3row2.length; i++){
            let ele = this.set3row2[i];
            if(ele == val){
              this.set3row2.splice(this.set3row2.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set3row3": {
        if(!e.target.checked){
          this.set3row3.push(val);
        }else{
          if(this.set3row3.length > 0){
          for(var i=0; i<this.set3row3.length; i++){
            let ele = this.set3row3[i];
            if(ele == val){
              this.set3row3.splice(this.set3row3.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set3row4": {
        if(!e.target.checked){
          this.set3row4.push(val);
        }else{
          if(this.set3row4.length > 0){
          for(var i=0; i<this.set3row4.length; i++){
            let ele = this.set3row4[i];
            if(ele == val){
              this.set3row4.splice(this.set3row4.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set3row5": {
        if(!e.target.checked){
          this.set3row5.push(val);
        }else{
          if(this.set3row5.length > 0){
          for(var i=0; i<this.set3row5.length; i++){
            let ele = this.set3row5[i];
            if(ele == val){
              this.set3row5.splice(this.set3row5.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set3row6": {
        if(!e.target.checked){
          this.set3row6.push(val);
        }else{
          if(this.set3row6.length > 0){
          for(var i=0; i<this.set3row6.length; i++){
            let ele = this.set3row6[i];
            if(ele == val){
              this.set3row6.splice(this.set3row6.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }

      case "set3row7": {
        if(!e.target.checked){
          this.set3row7.push(val);
        }else{
          if(this.set3row7.length > 0){
          for(var i=0; i<this.set3row7.length; i++){
            let ele = this.set3row7[i];
            if(ele == val){
              this.set3row7.splice(this.set3row7.indexOf(ele), 1);
            }
          }
          }
        }
        break;
      }
    }
  }

  paymentOptionChange(e){
    //console.log(e.target.value);
    this.school_payment_option = e.target.value;
    if(this.school_payment_option == 'online'){
      document.getElementById('fields_for_challan').style.display = 'none';
      document.getElementById('imgs_for_challan').style.display = 'none';

      document.getElementById('fields_for_online').style.display = 'block';
      document.getElementById('imgs_for_online1').style.display = 'block';
      document.getElementById('imgs_for_online2').style.display = 'block';
      document.getElementById('imgs_for_online3').style.display = 'block';

    }else if(this.school_payment_option == 'offline'){
      document.getElementById('fields_for_challan').style.display = 'none';
      document.getElementById('imgs_for_challan').style.display = 'none';

      document.getElementById('fields_for_online').style.display = 'none';
      document.getElementById('imgs_for_online1').style.display = 'none';
      document.getElementById('imgs_for_online2').style.display = 'none';
      document.getElementById('imgs_for_online3').style.display = 'none';

    }else if(this.school_payment_option == 'e-challan'){
      document.getElementById('fields_for_online').style.display = 'none';
      document.getElementById('imgs_for_online1').style.display = 'none';
      document.getElementById('imgs_for_online2').style.display = 'none';
      document.getElementById('imgs_for_online3').style.display = 'none';

      document.getElementById('fields_for_challan').style.display = 'block';
      document.getElementById('imgs_for_challan').style.display = 'block';
    }
  }

  openImgInput(id){
    document.getElementById(id).click();
  }

  setLogoImg(e){
    if(e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'image/png'){
      let file = e.target.files[0];
      this.fileReader.onloadend = ()=>{
        this.school_logo = this.fileReader.result;
      }
      this.fileReader.readAsDataURL(file);
    }else{
      this.presentToast('Please select an image file(jpg or png)');
    }
  }

  setSpPanImg(e){
    if(e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'application/pdf'){
      let file = e.target.files[0];
      this.fileReader.onloadend = ()=>{
        this.school_pan_img = this.fileReader.result;
      }
      this.fileReader.readAsDataURL(file);
    }else{
      this.presentToast('Please select an image file(jpg or pdf)');
    }
  }

  setSpAadharImg(e){
    if(e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'application/pdf'){
      let file = e.target.files[0];
      this.fileReader.onloadend = ()=>{
        this.school_aadhar_img = this.fileReader.result;
      }
      this.fileReader.readAsDataURL(file);
    }else{
      this.presentToast('Please select an image file(jpg or pdf)');
    }
  }

  setAuthCertImg(e){
    if(e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'application/pdf'){
      let file = e.target.files[0];
      this.fileReader.onloadend = ()=>{
        this.school_sac_img = this.fileReader.result;
      }
      this.fileReader.readAsDataURL(file);
    }else{
      this.presentToast('Please select an image file(jpg or pdf)');
    }
  }

  setDdImg(e){
    if(e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'application/pdf'){
      let file = e.target.files[0];
      this.fileReader.onloadend = ()=>{
        this.school_dd_img = this.fileReader.result;
      }
      this.fileReader.readAsDataURL(file);
    }else{
      this.presentToast('Please select an image file(jpg or pdf)');
    }
  }

  async schoolLogin(){
    if(this.school_id && this.school_pass){
      let response = await fetch("http://localhost:1337/teachers?school_official_mail="+this.school_id);
      let json = await response.json();
      console.log('response00',json);
      if(json && json.length>0){
        //console.log(json[0].s_password)
        if(this.school_pass == json[0].school_password){
          this.presentToast('You are successfully logged in');
          window.location.assign("/school-dashboard");
          window.localStorage.setItem('user_details', JSON.stringify(json));
        }else{
          this.presentToast('Wrong password');
        }
      }else if(json && json.length==0){
        this.presentToast('You are not registered');
      }
    }else{
      this.presentToast('Please input the required fields properlly');
    }
  }

  schoolRegistration(){
    this.school_available_subject = {
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
    }
    if(this.school_name && this.school_address && this.school_pin && this.school_dise_id
      && this.school_hm_name && this.school_rp_name && this.school_hm_ph && this.school_rp_ph
      && this.school_official_mail && this.school_available_subject && this.school_payment_option
      && this.school_logo && this.school_password && this.school_con_password){
        if(this.school_payment_option == 'online'){
          if(this.school_ac_no && this.school_ifsc_code && this.school_sp_email && this.school_sp_ph_no
            && this.school_pan_img && this.school_aadhar_img && this.school_sac_img){
              this.register();
            }else{
              this.presentToast('Please input the required fields properlly');
            }
        }else if(this.school_payment_option == 'e-challan'){
          if(this.school_dd_no && this.school_dd_submission_date && this.school_dd_img){
            this.register();
          }else{
            this.presentToast('Please input the required fields properlly');
          }
        }else if(this.school_payment_option == 'offline'){
          this.register();
        }
      }else{
        this.presentToast('Please input the required fields properlly');
      }
  }

  async register(){
    if(this.school_password == this.school_con_password){
      let checkingResponse = await fetch("http://localhost:1337/teachers?school_dise_id="+this.school_dise_id);
      let jsonRes = await checkingResponse.json();
      if(jsonRes && jsonRes.length == 0){
        let checkingResponse2 = await fetch("http://localhost:1337/teachers?school_official_mail="+this.school_official_mail);
        let jsonRes2 = await checkingResponse2.json();
        if(jsonRes2 && jsonRes2.length == 0){
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
          }
          let response = await fetch("http://localhost:1337/teachers", {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          let json = await response.json();
          console.log('response',json);
          if(json && json.length>0){
            this.presentToast('You are successfully registered');
            window.location.assign("/school-dashboard");
            window.localStorage.setItem('user_details', JSON.stringify(json));
          }else{
            this.presentToast('There is some error');
          }
        }else if(jsonRes && jsonRes.length>0){
          this.presentToast('Duplicate Email Id');
        }
      }else if(jsonRes && jsonRes.length>0){
        this.presentToast('Duplicate Dise Id');
      }
    }else{
      this.presentToast('Password does not match Confirm Password');
    }
  }

    render() {
        return [
          <ion-content>
            <div class="header_sec">
              <ion-img src="assets/icon/logo.png"></ion-img>
              <ion-button color="secondary" href="/">Register or Login for Student</ion-button>
    
              <div class="search_sec">
                <ion-searchbar placeholder="Search by school or student name"></ion-searchbar>
                <h2>No pressure of form fillup. Hassle free admission</h2>
              </div>
            </div>
    
            <ion-card class="main_body">
              <ion-segment onIonChange={ev => this.segmentChange(ev)} value="s_login">
                <ion-segment-button value="s_login">
                  <ion-label>LOGIN</ion-label>
                </ion-segment-button>
                <ion-segment-button value="s_reg">
                  <ion-label>REGISTRATION</ion-label>
                </ion-segment-button>
              </ion-segment>
    
              <div id="login_form1">
                <ion-list>
                  <ion-item>
                    <ion-label position="stacked">Email ID</ion-label>
                    <ion-input
                      name="school_id"
                      onInput={ev => this.changeValue(ev)}
                      placeholder="e.g. exe@gmail.com"
                      type="email"
                    ></ion-input>
                  </ion-item>
    
                  <ion-item>
                    <ion-label position="stacked">Password</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="school_pass"
                      placeholder="********"
                      type="password"
                    ></ion-input>
                  </ion-item>
                </ion-list>
    
                <ion-button expand="full" onClick={() => this.schoolLogin()}>SUBMIT</ion-button>
              </div>

              <div id="reg_form1">
                <ion-list>
                  <ion-item>
                    <ion-label position="stacked">School Name</ion-label>
                    <ion-input
                      name="school_name"
                      onInput={ev => this.changeValue(ev)}
                      placeholder="e.g. Govt. High School"
                      type="text"
                    ></ion-input>
                  </ion-item>
    
                  <ion-item>
                    <ion-label position="stacked">School Disev ID</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="school_dise_id"
                      placeholder="e.g. 123456789012"
                      type="number"
                    ></ion-input>
                  </ion-item>
    
                  <ion-item>
                    <ion-label position="stacked">School Address</ion-label>
                    <ion-textarea
                      onInput={ev => this.changeValue(ev)}
                      name="school_address"
                      placeholder="e.g. Nopkala, Chandrakona Road"
                    ></ion-textarea>
                  </ion-item>
    
                  <ion-item>
                    <ion-label position="stacked">PIN Code</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="school_pin"
                      placeholder="e.g. 123456"
                      type="number"
                    ></ion-input>
                  </ion-item>
    
                  <ion-item>
                    <ion-label position="stacked">School HM/IC Name</ion-label>
                    <ion-input
                      name="school_hm_name"
                      onInput={ev => this.changeValue(ev)}
                      placeholder="e.g. Saheb Maity"
                      type="text"
                    ></ion-input>
                  </ion-item>
    
                  <ion-item>
                    <ion-label position="stacked">Responsible Person Name</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="school_rp_name"
                      placeholder="e.g. Nopkala, Chandrokana Road"
                      type="text"
                    ></ion-input>
                  </ion-item>
    
                  <ion-item>
                    <ion-label position="stacked">HM/IC Phone Number</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="school_hm_ph"
                      placeholder="e.g. 1234567890"
                      type="number"
                    ></ion-input>
                  </ion-item>
    
                  <ion-item>
                    <ion-label position="stacked">Responsible Person Phone Number</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="school_rp_ph"
                      placeholder="e.g. 1234567890"
                      type="number"
                    ></ion-input>
                  </ion-item>
    
                  <ion-item>
                    <ion-label position="stacked">Official Email ID</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="school_official_mail"
                      placeholder="e.g. abc@gmail.com"
                      type="email"
                    ></ion-input>
                  </ion-item>

                  <ion-grid class="sub_sel">
                    <h3>Subject Selection</h3>
                    <ion-row>
                      <ion-col size="3">
                        <h4>First Language</h4>
                      </ion-col>
                      <ion-col size="9" class="lang_col">
                      {this.resValue.first_language.map((val) => 
                        <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('firstLang', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                        </div>
                      )}
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col size="3">
                        <h4>Second Language</h4>
                      </ion-col>
                      <ion-col size="9" class="lang_col">
                      {this.resValue.second_language.map((val) => 
                        <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('secLang', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                        </div>
                      )}
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col size="3">
                        <h4>Science</h4>
                      </ion-col>
                      <ion-col size="9">
                        <ion-row>
                        {this.resValue.set1.row1.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set1row1', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                        <ion-row>
                        {this.resValue.set1.row2.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set1row2', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                        <ion-row>
                        {this.resValue.set1.row3.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set1row3', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                        <ion-row>
                        {this.resValue.set1.row4.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set1row4', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                        <ion-row>
                        {this.resValue.set1.row5.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set1row5', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                        <ion-row>
                        {this.resValue.set1.row6.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set1row6', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col size="3">
                        <h4>Commerce</h4>
                      </ion-col>
                      <ion-col size="9">
                        <ion-row>
                        {this.resValue.set2.row1.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set2row1', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                        <ion-row>
                        {this.resValue.set2.row2.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set2row2', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                        <ion-row>
                        {this.resValue.set2.row3.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set2row3', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                        <ion-row>
                        {this.resValue.set2.row4.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set2row4', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                        <ion-row>
                        {this.resValue.set2.row5.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set2row5', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                        <ion-row>
                        {this.resValue.set2.row6.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set2row6', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col size="3">
                        <h4>Arts</h4>
                      </ion-col>
                      <ion-col size="9">
                        <ion-row>
                        {this.resValue.set3.row1.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set3row1', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                        <ion-row>
                        {this.resValue.set3.row2.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set3row2', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                        <ion-row>
                        {this.resValue.set3.row3.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set3row3', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                        <ion-row>
                        {this.resValue.set3.row4.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set3row4', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                        <ion-row>
                        {this.resValue.set3.row5.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set3row5', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                        <ion-row>
                        {this.resValue.set3.row6.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set3row6', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                        <ion-row>
                        {this.resValue.set3.row7.map((val) => 
                          <div>
                          <ion-checkbox slot="start" onClick={ev=>this.selSub('set3row7', ev, val)}></ion-checkbox>
                          <ion-label>{val}</ion-label>
                          </div>
                        )}
                        </ion-row>
                      </ion-col>
                    </ion-row>
                    
                  </ion-grid>

                  <ion-list>
                    <ion-radio-group>
                      <ion-list-header>
                        <ion-label>Payment Options</ion-label>
                      </ion-list-header>

                      <ion-item>
                        <ion-label>Offline</ion-label>
                        <ion-radio slot="start" value="offline" onClick={ev=>this.paymentOptionChange(ev)}></ion-radio>
                      </ion-item>

                      <ion-item>
                        <ion-label>Online</ion-label>
                        <ion-radio slot="start" value="online" onClick={ev=>this.paymentOptionChange(ev)}></ion-radio>
                      </ion-item>

                      <ion-item>
                        <ion-label>E-challan</ion-label>
                        <ion-radio slot="start" value="e-challan" onClick={ev=>this.paymentOptionChange(ev)}></ion-radio>
                      </ion-item>
                    </ion-radio-group>
                  </ion-list>

                  <div id="fields_for_online">
        
                  <ion-item>
                    <ion-label position="stacked">School A/C Number</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="school_ac_no"
                      placeholder="e.g. 123456789055"
                      type="text"
                    ></ion-input>
                  </ion-item>

                  <ion-item>
                    <ion-label position="stacked">IFSC Number</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="school_ifsc_code"
                      placeholder="e.g. 123456"
                      type="text"
                    ></ion-input>
                  </ion-item>

                  <ion-item>
                    <ion-label position="stacked">Signetury Person's Phone Number</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="school_sp_ph_no"
                      placeholder="e.g. 1234567890"
                      type="number"
                    ></ion-input>
                  </ion-item>

                  <ion-item>
                    <ion-label position="stacked">Signetury Person's Email ID</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="school_sp_email"
                      placeholder="e.g. abc@gmail.com"
                      type="email"
                    ></ion-input>
                  </ion-item>

                  </div>
                  
                  <div id="fields_for_challan">

                  <ion-item>
                    <ion-label position="stacked">School DD Number</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="school_dd_no"
                      placeholder="e.g. 1234567890"
                      type="text"
                    ></ion-input>
                  </ion-item>

                  <ion-item>
                    <ion-label position="stacked">DD Submission Date</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="school_dd_submission_date"
                      placeholder="e.g. abc@gmail.com"
                      type="date"
                    ></ion-input>
                  </ion-item>

                  </div>

                  <ion-item>
                    <ion-label position="stacked">Create Password(Min 6 carecter)</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="school_password"
                      placeholder="********"
                      type="password"
                    ></ion-input>
                  </ion-item>

                  <ion-item>
                    <ion-label position="stacked">Confirm Password</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="school_con_password"
                      placeholder="********"
                      type="password"
                    ></ion-input>
                  </ion-item>

                  <ion-grid>
                  <h3>Documents Upload</h3>
                  <ion-row>
                    <ion-col>
                      <ion-item>
                        <ion-label position="stacked">School Logo</ion-label>
                        <ion-img class="upload_img" onClick={()=> this.openImgInput("school_logo")} src="assets/icon/uploadIcon.jpg"></ion-img>
                        <input type="file" id="school_logo" onChange={ev=>this.setLogoImg(ev)} accept="image/png, image/jpeg"></input>
                      </ion-item>
                    </ion-col>
                    <ion-col id="imgs_for_online1">
                      <ion-item>
                        <ion-label position="stacked">Signetury Person's PAN</ion-label>
                        <ion-img class="upload_img" onClick={()=> this.openImgInput("sp_pan_img")} src="assets/icon/uploadIcon.jpg"></ion-img>
                        <input type="file" id="sp_pan_img" onChange={ev=>this.setSpPanImg(ev)} accept="application/pdf, image/jpeg"></input>
                      </ion-item>
                    </ion-col>
                    <ion-col id="imgs_for_online2">
                      <ion-item>
                        <ion-label position="stacked">Signetury Person's Aadhar</ion-label>
                        <ion-img class="upload_img" onClick={()=> this.openImgInput("sp_aadhar_img")} src="assets/icon/uploadIcon.jpg"></ion-img>
                        <input type="file" id="sp_aadhar_img" onChange={ev=>this.setSpAadharImg(ev)} accept="application/pdf, image/jpeg"></input>
                      </ion-item>
                    </ion-col>
                    <ion-col id="imgs_for_online3">
                      <ion-item>
                        <ion-label position="stacked">School authorization Certificate</ion-label>
                        <ion-img class="upload_img" onClick={()=> this.openImgInput("auth_cert_img")} src="assets/icon/uploadIcon.jpg"></ion-img>
                        <input type="file" id="auth_cert_img" onChange={ev=>this.setAuthCertImg(ev)} accept="application/pdf, image/jpeg"></input>
                      </ion-item>
                    </ion-col>
                    <ion-col id="imgs_for_challan">
                      <ion-item>
                        <ion-label position="stacked">Demand Draft</ion-label>
                        <ion-img class="upload_img" onClick={()=> this.openImgInput("school_dd")} src="assets/icon/uploadIcon.jpg"></ion-img>
                        <input type="file" id="school_dd" onChange={ev=>this.setDdImg(ev)} accept="application/pdf, image/jpeg"></input>
                      </ion-item>
                    </ion-col>
                  </ion-row>
                </ion-grid>
                </ion-list>
    
                <ion-button expand="full" onClick={() => this.schoolRegistration()}>Register</ion-button>
              </div>
    
            </ion-card>
          </ion-content>
        ];
      }
}