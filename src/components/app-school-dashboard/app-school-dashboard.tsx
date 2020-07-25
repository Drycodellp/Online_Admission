import { Component, State, h } from '@stencil/core';
//import { toastController } from '@ionic/core';

@Component({
  tag: 'app-school-dashboard',
  styleUrl: 'app-school-dashboard.css'
})
export class AppSchoolDashboard {

  @State() applications;
  public school_name;
  public logo;

  async componentWillLoad(){
    let data = window.localStorage.getItem('user_details');
    let parseData = JSON.parse(data);
    let s_id = parseData[0].id;
    this.school_name = parseData[0].school_name;
    this.logo = parseData[0].school_logo;
    let res = await fetch("http://localhost:1337/applicants?school_id="+s_id);
    this.applications = await res.json();
    console.log(parseData);
  }

  logout(){
    window.localStorage.removeItem('user_details');
    window.location.href = "/";
  }

  viewApplicant(id, aid){
    window.location.assign('/applicant-details?id='+id+'&aid='+aid);
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
          <div>
            <h1>Applications</h1>
          </div>
          {this.applications.map((ele) => 
          <ion-card>
            <ion-row>
              <ion-col size="9" class="padding_horizontal">
                <h3>Name: {ele.student_name}</h3>
                <h4>Shool Name: {ele.student_school}</h4>
                <h4>Total Marks: <strong>{ele.student_total}</strong> ({ele.student_percent}%)</h4>
                <h4>Selected Stream: {ele.stream}</h4>
              </ion-col>
              <ion-col size="3">
                <ion-button class="view_applicant" onClick={()=>this.viewApplicant(ele.student_id, ele.id)}>View Applicant</ion-button>
              </ion-col>
            </ion-row>
          </ion-card>
          )}
        </ion-card>
      </ion-content>
    ]
  }

}