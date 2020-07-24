import { Component, State, h } from '@stencil/core';
//import { toastController } from '@ionic/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  @State() schools;
  public student_name;
  public logo;

  async componentWillLoad(){
    let res = await fetch("http://localhost:1337/teachers");
    this.schools = await res.json();
    console.log(this.schools);

    let data = window.localStorage.getItem('user_details');
    let parseData = JSON.parse(data);
    this.student_name = parseData[0].s_name;
    this.logo = parseData[0].s_image;
  }

  logout(){
    window.localStorage.removeItem('user_details');
    window.location.href = "/";
  }

  apply(id){
    window.location.assign('/application-section?id='+id);
  }

  render() {
    return [
      <ion-content>
        <div class="header_sec">
          <ion-img src="assets/icon/logo.png"></ion-img>
          
          <h1>{this.student_name}</h1>
          <ion-button class="log_out" onClick={()=>this.logout()} color="secondary">Log Out</ion-button>
          <img class="sch_logo" src={this.logo} />

          <div class="search_sec">
            <ion-searchbar placeholder="Search by school or student name"></ion-searchbar>
            <h2>No pressure of form fillup. Hassle free admission</h2>
          </div>
        </div>

        <ion-card class="main_body">
          <div>
            <h1>Admission Going On</h1>
          </div>
          {this.schools.map((ele) => 
          <ion-card>
            <ion-row>
              <ion-col size="2">
                <ion-img src={ele.school_logo}></ion-img>
              </ion-col>
              <ion-col size="8" class="padding_horizontal">
                <h3>{ele.school_name}</h3>
                <h4>{ele.school_address}</h4>
                <h4>{ele.school_pin}</h4>
              </ion-col>
              <ion-col size="2">
                <ion-button class="view_applicant" onClick={()=>this.apply(ele.id)}>Apply</ion-button>
              </ion-col>
            </ion-row>
          </ion-card>
          )}
        </ion-card>
      </ion-content>
    ]
  }

}