import { Component, h } from '@stencil/core';
import { toastController } from '@ionic/core';

@Component({
  tag: 'app-school-register',
  styleUrl: 'app-school-register.css'
})
export class AppSchoolRegister {

  private s_id:string;
  private s_pass;
  private s_name:string;
  private s_guad_name:string;
  private s_res_address:string;
  private s_res_pin:number;
  private s_sch_name:string;
  private s_sch_address:string;
  private s_sch_pin:number;
  private s_reg_number:string;
  private s_cast:string;
  private s_ph_number:number;
  private s_alt_ph_number:number;
  private s_email:string;
  private s_password;
  private s_con_password;
  private s_first_lang_no:number;
  private s_sec_lang_no:number;
  private s_math_no:number;
  private s_phy_sc_no:number;
  private s_life_sc_no:number;
  private s_history_no:number;
  private s_geography_no:number;
  private s_op_sub_no:number;
  private s_result_img:string | ArrayBuffer;
  private s_cast_cert_img:string | ArrayBuffer;
  private s_image:string | ArrayBuffer;

  public fileReader = new FileReader();

  changeValue(e){
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

  openImgInput(id){
    document.getElementById(id).click();
  }

  setResultImg(e){
    if(e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'application/pdf'){
      let file = e.target.files[0];
      this.fileReader.onloadend = ()=>{
        this.s_result_img = this.fileReader.result;
      }
      this.fileReader.readAsDataURL(file);
    }else{
      this.presentToast('Please select an image file(jpg or pdf)');
    }
  }

  setCastImg(e){
    if(e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'application/pdf'){
      let file = e.target.files[0];
      this.fileReader.onloadend = ()=>{
        this.s_cast_cert_img = this.fileReader.result;
      }
      this.fileReader.readAsDataURL(file);
    }else{
      this.presentToast('Please select an image file(jpg or pdf)');
    }
  }

  setStudentImg(e){
    if(e.target.files[0].type == 'image/jpeg' || e.target.files[0].type == 'image/png'){
      let file = e.target.files[0];
      this.fileReader.onloadend = ()=>{
        this.s_image = this.fileReader.result;
      }
      this.fileReader.readAsDataURL(file);
    }else{
      this.presentToast('Please select an image file(jpg or png)');
    }
  }

  async studentLogin(){
    if(this.s_id && this.s_pass){
      let response = await fetch("http://104.43.21.203:1337/students?s_reg_number="+this.s_id);
      let json = await response.json();
      //console.log('response00',json);
      if(json && json.length>0){
        //console.log(json[0].s_password)
        if(this.s_pass == json[0].s_password){
          this.presentToast('You are successfully logged in');
          window.location.assign("/student-dashboard");
          window.localStorage.setItem('user_details', JSON.stringify(json));
        }else{
          this.presentToast('Wrong password');
        }
      }else if(json && json.length==0){
        this.presentToast('You are not registered');
      }
    }
  }

  async studentRegistration(){
    if(this.s_name && this.s_guad_name && this.s_res_address && this.s_res_pin
      && this.s_sch_name && this.s_sch_address && this.s_sch_pin && this.s_reg_number
      && this.s_cast && this.s_ph_number && this.s_password && this.s_first_lang_no
      && this.s_sec_lang_no && this.s_math_no && this.s_phy_sc_no && this.s_life_sc_no
      && this.s_history_no && this.s_geography_no && this.s_op_sub_no && this.s_result_img
      && this.s_cast_cert_img && this.s_image){
        if(this.s_password == this.s_con_password){
          let checkingResponse = await fetch("http://104.43.21.203:1337/students?s_reg_number="+this.s_reg_number);
          let jsonRes = await checkingResponse.json();
          if(jsonRes && jsonRes.length == 0){
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
              "s_alt_ph_number": this.s_alt_ph_number?this.s_alt_ph_number.toString():null,
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
            }
            let response = await fetch("http://104.43.21.203:1337/students", {
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
              window.location.assign("/student-dashboard");
              window.localStorage.setItem('user_details', JSON.stringify(json));
            }else{
              this.presentToast('There is some error');
            }
          }else if(jsonRes && jsonRes.length>0){
            this.presentToast('Candidate with this registration number already exist');
          }
        }else{
          this.presentToast('Password does not match Confirm Password');
        }
      }else{
        this.presentToast('Please input the required fields properlly');
      }
  }

  segmentChange(e){
    if(e.target.value == 's_login'){
      document.getElementById('reg_form').style.display = 'none';
      document.getElementById('login_form').style.display = 'block';
    }else if(e.target.value == 's_reg'){
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
      <ion-content>
        <div class="header_sec">
          <ion-img src="assets/icon/logo.png"></ion-img>
          <ion-button color="secondary" href="/school-registration">Register or Login Your School</ion-button>

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

          <div id="login_form">
            <ion-list>
              <ion-item>
                <ion-label position="stacked">Registration Number</ion-label>
                <ion-input
                  name="s_id"
                  onInput={ev => this.changeValue(ev)}
                  placeholder="e.g. SAHEB123456"
                  type="text"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">Password</ion-label>
                <ion-input
                  onInput={ev => this.changeValue(ev)}
                  name="s_pass"
                  placeholder="********"
                  type="password"
                ></ion-input>
              </ion-item>
            </ion-list>

            <ion-button expand="full" onClick={() => this.studentLogin()}>SUBMIT</ion-button>
          </div>

          <div id="reg_form">
            <ion-list>
              <ion-item>
                <ion-label position="stacked">Student Name</ion-label>
                <ion-input
                  name="s_name"
                  onInput={ev => this.changeValue(ev)}
                  placeholder="e.g. Saheb Maity"
                  type="text"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">Guardian Name</ion-label>
                <ion-input
                  onInput={ev => this.changeValue(ev)}
                  name="s_guad_name"
                  placeholder="e.g. Samrat Maity"
                  type="text"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">Rasidential Address</ion-label>
                <ion-textarea
                  onInput={ev => this.changeValue(ev)}
                  name="s_res_address"
                  placeholder="e.g. Nopkala, Chandrakona Road"
                ></ion-textarea>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">PIN Code</ion-label>
                <ion-input
                  onInput={ev => this.changeValue(ev)}
                  name="s_res_pin"
                  placeholder="e.g. 123456"
                  type="number"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">School Name</ion-label>
                <ion-input
                  name="s_sch_name"
                  onInput={ev => this.changeValue(ev)}
                  placeholder="e.g. Nopkala High School"
                  type="text"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">School Address</ion-label>
                <ion-textarea
                  onInput={ev => this.changeValue(ev)}
                  name="s_sch_address"
                  placeholder="e.g. Nopkala, Chandrokana Road"
                ></ion-textarea>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">School PIN Code</ion-label>
                <ion-input
                  onInput={ev => this.changeValue(ev)}
                  name="s_sch_pin"
                  placeholder="e.g. 123456"
                  type="number"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">Madhyamik Registration Number</ion-label>
                <ion-input
                  onInput={ev => this.changeValue(ev)}
                  name="s_reg_number"
                  placeholder="e.g. 11111111111"
                  type="text"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">Cast</ion-label>
                <ion-input
                  onInput={ev => this.changeValue(ev)}
                  name="s_cast"
                  placeholder="e.g. OBC"
                  type="text"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">Phone Number</ion-label>
                <ion-input
                  onInput={ev => this.changeValue(ev)}
                  name="s_ph_number"
                  placeholder="e.g. 1234567890"
                  type="number"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">Alternative Phone Number(Optional)</ion-label>
                <ion-input
                  onInput={ev => this.changeValue(ev)}
                  name="s_alt_ph_number"
                  placeholder="e.g. 1234567890"
                  type="number"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">E-mail ID(Optional)</ion-label>
                <ion-input
                  onInput={ev => this.changeValue(ev)}
                  name="s_email"
                  placeholder="e.g. sahebmaity90@gmail.com"
                  type="email"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">Create Password(Min 6 carecter)</ion-label>
                <ion-input
                  onInput={ev => this.changeValue(ev)}
                  name="s_password"
                  placeholder="********"
                  type="password"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">Confirm Password</ion-label>
                <ion-input
                  onInput={ev => this.changeValue(ev)}
                  name="s_con_password"
                  placeholder="********"
                  type="password"
                ></ion-input>
              </ion-item>
            </ion-list>

            <ion-grid>
              <h3>Subject wise number</h3>
              <ion-row>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">1st Language</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="s_first_lang_no"
                      placeholder="e.g. 91"
                      type="number"
                    ></ion-input>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">2nd Language</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="s_sec_lang_no"
                      placeholder="e.g. 91"
                      type="number"
                    ></ion-input>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">Mathametics</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="s_math_no"
                      placeholder="e.g. 91"
                      type="number"
                    ></ion-input>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">Physical Science</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="s_phy_sc_no"
                      placeholder="e.g. 91"
                      type="number"
                    ></ion-input>
                  </ion-item>
                </ion-col>
              </ion-row>

              <ion-row>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">Life Science</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="s_life_sc_no"
                      placeholder="e.g. 91"
                      type="number"
                    ></ion-input>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">History</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="s_history_no"
                      placeholder="e.g. 91"
                      type="number"
                    ></ion-input>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">Geography</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="s_geography_no"
                      placeholder="e.g. 91"
                      type="number"
                    ></ion-input>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">Physical Education(optional sub)</ion-label>
                    <ion-input
                      onInput={ev => this.changeValue(ev)}
                      name="s_op_sub_no"
                      placeholder="e.g. 91"
                      type="number"
                    ></ion-input>
                  </ion-item>
                </ion-col>
              </ion-row>
            </ion-grid>

            <ion-grid>
              <h3>Documents Upload</h3>
              <ion-row>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">Passport Size Photo</ion-label>
                    <ion-img class="upload_img" onClick={()=> this.openImgInput("student_img")} src="assets/icon/uploadIcon.jpg"></ion-img>
                    <input type="file" id="student_img" onChange={ev=>this.setStudentImg(ev)} accept="image/png, image/jpeg"></input>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">Madhyamik Result</ion-label>
                    <ion-img class="upload_img" onClick={()=> this.openImgInput("result_img")} src="assets/icon/uploadIcon.jpg"></ion-img>
                    <input type="file" id="result_img" onChange={ev=>this.setResultImg(ev)} accept="application/pdf, image/jpeg"></input>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">Cast Certificate</ion-label>
                    <ion-img class="upload_img" onClick={()=> this.openImgInput("cast_cert_img")} src="assets/icon/uploadIcon.jpg"></ion-img>
                    <input type="file" id="cast_cert_img" onChange={ev=>this.setCastImg(ev)} accept="application/pdf, image/jpeg"></input>
                  </ion-item>
                </ion-col>
              </ion-row>
            </ion-grid>

            <ion-button expand="full" onClick={() => this.studentRegistration()}>Register</ion-button>
          </div>

        </ion-card>
      </ion-content>
    ];
  }
}
