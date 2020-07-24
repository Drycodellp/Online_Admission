import { Component, State, h } from '@stencil/core';
//import { toastController } from '@ionic/core';

@Component({
  tag: 'app-applicant-details',
  styleUrl: 'app-applicant-details.css'
})
export class AppApplicantDetails {

    @State() applicant;
    @State() application;
    public school_name;
    public logo;

    async componentWillLoad(){
      let id = new URL(window.location.href).searchParams.get("id");
      let res = await fetch("http://localhost:1337/students?id="+id);
      this.applicant = await res.json();

      let aid = new URL(window.location.href).searchParams.get("aid");
      let res2 = await fetch("http://localhost:1337/applicants?id="+aid);
      this.application = await res2.json();

      //console.log(this.applicant, this.application[0].subjects.first_language);

      let data = window.localStorage.getItem('user_details');
      let parseData = JSON.parse(data);
      this.school_name = parseData[0].school_name;
      this.logo = parseData[0].school_logo;
    }

    logout(){
      window.localStorage.removeItem('user_details');
      window.location.href = "/";
    }

    calTotal(){
      return Number(this.applicant[0].s_first_lang_no)+Number(this.applicant[0].s_sec_lang_no)+Number(this.applicant[0].s_math_no)+Number(this.applicant[0].s_phy_sc_no)+Number(this.applicant[0].s_life_sc_no)+Number(this.applicant[0].s_history_no)+Number(this.applicant[0].s_geography_no);
    }

    calPersentage(){
      return (this.calTotal()/7).toFixed(3);
    }

    render() {
        return [
          <ion-content>
            <div class="header_sec">
              <ion-img src="assets/icon/logo.png"></ion-img>

              <h1>{this.school_name}</h1>
              <ion-button class="log_out" onClick={()=>this.logout()} color="secondary">Log Out</ion-button>
              <img class="sch_logo" src={this.logo} />
    
              <div class="search_sec">
                <ion-searchbar placeholder="Search by school or student name"></ion-searchbar>
                <h2>No pressure of form fillup. Hassle free admission</h2>
              </div>
            </div>
    
            <ion-card class="main_body">
              <h2>{this.applicant[0].s_name}</h2>
              <h3>Gurdian Name: {this.applicant[0].s_guad_name}</h3>
              <p>Address: {this.applicant[0].s_res_address}</p>
              <p>Pin: {this.applicant[0].s_res_pin}</p>

              <h3>School: {this.applicant[0].s_sch_name}</h3>
              <p>{this.applicant[0].s_sch_address}</p>
              <p>Pin: {this.applicant[0].s_sch_pin}</p>

              <p>Registration No.: {this.applicant[0].s_reg_number}</p>
              <p>Cast: {this.applicant[0].s_cast}</p>

              <ion-grid>
              <h3>Madhamik Result</h3>
              <ion-row>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">1st Language</ion-label>
                    <p>{this.applicant[0].s_first_lang_no}</p>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">2nd Language</ion-label>
                    <p>{this.applicant[0].s_sec_lang_no}</p>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">Mathametics</ion-label>
                    <p>{this.applicant[0].s_math_no}</p>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">Physical Science</ion-label>
                    <p>{this.applicant[0].s_phy_sc_no}</p>
                  </ion-item>
                </ion-col>
              </ion-row>

              <ion-row>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">Life Science</ion-label>
                    <p>{this.applicant[0].s_life_sc_no}</p>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">History</ion-label>
                    <p>{this.applicant[0].s_history_no}</p>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">Geography</ion-label>
                    <p>{this.applicant[0].s_geography_no}</p>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">Physical Education(optional sub)</ion-label>
                    <p>{this.applicant[0].s_op_sub_no}</p>
                  </ion-item>
                </ion-col>
              </ion-row>
              <h3>Total: {this.calTotal()} ({this.calPersentage()}%)</h3>
            </ion-grid>
            <h3>Selected Stream: {this.application[0].stream}</h3>
            <h3>Selected Subjects:</h3>
            <h4>First Language: {this.application[0].subjects.first_language}</h4>
            <h4>Second Language: {this.application[0].subjects.second_language}</h4>
            <h4>Main Subjects: {this.application[0].subjects.others}</h4>

            <ion-row>
              <ion-col>
                <ion-img src={this.applicant[0].s_image}></ion-img>
                <div>
                  <ion-button size="small">Download</ion-button>
                  <ion-button size="small">Print</ion-button>
                </div>
              </ion-col>
              <ion-col>
                <ion-img src={this.applicant[0].s_result_img}></ion-img>
                <div>
                  <ion-button size="small">Download</ion-button>
                  <ion-button size="small">Print</ion-button>
                </div>
              </ion-col>
              <ion-col>
                <ion-img src={this.applicant[0].s_cast_cert_img}></ion-img>
                <div>
                  <ion-button size="small">Download</ion-button>
                  <ion-button size="small">Print</ion-button>
                </div>
              </ion-col>
            </ion-row>

            </ion-card>
            </ion-content>
        ]
    }

}