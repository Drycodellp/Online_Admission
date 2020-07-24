import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

public ggg:boolean = false;

checkUser(){
  let user = window.localStorage.getItem('user_details');
  if(user){
    let jsonP = JSON.parse(user);
    if(jsonP[0].s_name && !jsonP[0].school_name){
      return 'app-home';
    }else if(!jsonP[0].s_name && jsonP[0].school_name){
      return 'app-school-dashboard';
    }
  }else{
    return 'app-school-register';
  }
}

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component={this.checkUser()}/>
          <ion-route url="/student-dashboard" component="app-home" />
          <ion-route url="/school-registration" component="app-student-register" />
          <ion-route url="/application-section" component="app-application-section" />
          <ion-route url="/school-dashboard" component="app-school-dashboard" />
          <ion-route url="/applicant-details" component="app-applicant-details" />
          <ion-route url="/profile/:name" component="app-profile" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
