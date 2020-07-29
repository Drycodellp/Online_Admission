import { Component, State, h } from '@stencil/core';
//import { toastController } from '@ionic/core';

@Component({
  tag: 'app-school-dashboard',
  styleUrl: 'app-school-dashboard.css'
})
export class AppSchoolDashboard {

  public applications;
  public school_name;
  public logo;
  public scienceApplications = [];
  public commerceApplications = [];
  public artsApplications = [];
  public activeStream = 'science';
  public filterOpen:boolean = false;
  public aggFilter:boolean = true;
  public subFilter:boolean = true;
  public subSelFilter:boolean = true;
  public min_agg_sub;
  public min_agg_no;
  public min_sub_agg;
  public subjectPref = [];
  public subjectPrefSet1 = [];
  public subjectPrefSet2 = [];
  public subjectPrefSet3 = [];

  async componentWillLoad(){
    let data = window.localStorage.getItem('user_details');
    let parseData = JSON.parse(data);
    let s_id = parseData[0].id;
    this.school_name = parseData[0].school_name;
    this.logo = parseData[0].school_logo;
    let res = await fetch("http://localhost:1337/applicants?school_id="+s_id);
    let app = await res.json();

    for(var i=0; i<app.length; i++){
      let ele = app[i];
      if(ele.stream == 'science'){
        this.scienceApplications.push(ele);
      }else if(ele.stream == 'commerce'){
        this.commerceApplications.push(ele);
      }else if(ele.stream == 'arts'){
        this.artsApplications.push(ele);
      }
    }
    this.applications = this.scienceApplications;
    
    let res2 = await fetch("http://localhost:3333/assets/subjects.json");
    let subs = await res2.json();
    let set1 = Object.values(subs.set1);
    let set2 = Object.values(subs.set2);
    let set3 = Object.values(subs.set3);
    for(var i=0; i<set1.length; i++){
      let ele = [];
      ele.push(set1[i]);
      for(var j=0; j<ele[0].length; j++){
        let ele2 = ele[0][j];
        this.subjectPrefSet1.push(ele2);
      }
    }
    for(var k=0; k<set2.length; k++){
      let ele = [];
      ele.push(set2[k]);
      for(var l=0; l<ele[0].length; l++){
        let ele2 = ele[0][l];
        this.subjectPrefSet2.push(ele2);
      }
    }
    for(var m=0; m<set3.length; m++){
      let ele = [];
      ele.push(set3[m]);
      for(var n=0; n<ele[0].length; n++){
        let ele2 = ele[0][n];
        this.subjectPrefSet3.push(ele2);
      }
    }
    this.subjectPref = this.subjectPrefSet1;
  }

  logout(){
    window.localStorage.removeItem('user_details');
    window.location.href = "/";
  }

  viewApplicant(id, aid){
    window.location.assign('/applicant-details?id='+id+'&aid='+aid);
  }

  streamFilter(e){
    this.activeStream = e.target.value;
    if(e.target.value == 'science'){
      this.applications = this.scienceApplications;
      this.subjectPref = this.subjectPrefSet1;
    }else if(e.target.value == 'commerce'){
      this.applications = this.commerceApplications;
      this.subjectPref = this.subjectPrefSet2;
    }else if(e.target.value == 'arts'){
      this.applications = this.artsApplications;
      this.subjectPref = this.subjectPrefSet3;
    }
  }

  openFilter(){
    if(this.filterOpen){
      document.getElementById('merit_filter').style.display = 'none';
      this.filterOpen = false;
    }else{
      document.getElementById('merit_filter').style.display = 'block';
      this.filterOpen = true;
    }
  }

  selectFilterOptions(val, e){
    console.log(e.target.checked, val);
    if(val == 'agg_input_sec'){
      if(!e.target.checked){
        this.aggFilter = true;
      }else{
        this.aggFilter = false;
      }
    }else if(val == 'sub_sel_sec'){
      if(!e.target.checked){
        this.subFilter = true;
      }else{
        this.subFilter = false;
      }
    }else if(val == 'sel_sel_sub'){
      if(!e.target.checked){
        this.subSelFilter = true;
      }else{
        this.subSelFilter = false;
      }
    }
  }

  changeMarks(e){
    this.min_agg_no = e.target.value;
  }

  selSubject(e){
    if(e.target.value){
      this.min_agg_sub = e.target.value;
    }else{
      this.min_agg_sub = '';
    }
  }

  changeSubMarks(e){
    this.min_sub_agg = e.target.value;
  }

  selectPrefSub(val, e){

  }

  filterByAgg(){
    if(this.min_agg_no && this.aggFilter){
      this.applications = [];
      if(this.activeStream == 'science'){
        for(var i=0; i<this.scienceApplications.length; i++){
          let ele = this.scienceApplications[i];
          if(Number(ele.student_total) >= this.min_agg_no){
            this.applications.push(ele);
          }
        }
      }
      if(this.activeStream == 'commerce'){
        for(var i=0; i<this.commerceApplications.length; i++){
          let ele = this.commerceApplications[i];
          if(Number(ele.student_total) >= this.min_agg_no){
            this.applications.push(ele);
          }
        }
      }
      if(this.activeStream == 'arts'){
        for(var i=0; i<this.artsApplications.length; i++){
          let ele = this.artsApplications[i];
          if(Number(ele.student_total) >= this.min_agg_no){
            this.applications.push(ele);
          }
        }
      }
    }
  }

  async filterBySubAgg(){
    console.log(this.min_sub_agg, this.min_agg_sub, this.subFilter);
    if(this.min_sub_agg && this.min_agg_sub && this.subFilter){
      this.applications = [];
      if(this.activeStream == 'science'){
        let check = await fetch('http://localhost:1337/students?'+this.min_agg_sub+'_gte='+this.min_sub_agg);
        let res = await check.json();
        console.log(res);
        for(var i=0; i<this.scienceApplications.length; i++){
          let ele = this.scienceApplications[i];
          for(var j=0; j<res.length; j++){
            let ele2 = res[j];
            if(Number(ele.student_id) == ele2.id){
              this.applications.push(ele);
            }
          }
        }
        console.log(this.applications);
      }
      if(this.activeStream == 'commerce'){
        for(var i=0; i<this.commerceApplications.length; i++){
          let ele = this.commerceApplications[i];
          if(Number(ele.student_total) >= this.min_agg_no){
            this.applications.push(ele);
          }
        }
      }
      if(this.activeStream == 'arts'){
        for(var i=0; i<this.artsApplications.length; i++){
          let ele = this.artsApplications[i];
          if(Number(ele.student_total) >= this.min_agg_no){
            this.applications.push(ele);
          }
        }
      }
    }
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
          <ion-segment onIonChange={ev=>this.streamFilter(ev)} value="science">
            <ion-segment-button value="science">
              <ion-label>SCIENCE ({this.scienceApplications.length})</ion-label>
            </ion-segment-button>
            <ion-segment-button value="commerce">
              <ion-label>COMMERCE ({this.commerceApplications.length})</ion-label>
            </ion-segment-button>
            <ion-segment-button value="arts">
              <ion-label>ARTS ({this.artsApplications.length})</ion-label>
            </ion-segment-button>
          </ion-segment>

          <div class="merit_list_filter">
            <ion-item class="filter_button" lines="none" onClick={()=>this.openFilter()}>
              <h4>Filter for Merit List</h4>
              <ion-icon name="caret-down-outline"></ion-icon>
            </ion-item>
            
            <div id="merit_filter">
            <ion-row>
              <ion-col>
              <ion-item lines="none">
                <ion-checkbox slot="start" onClick={ev=>this.selectFilterOptions('agg_input_sec', ev)}></ion-checkbox>
                <p>Minimum total marks</p>
              </ion-item>
              <ion-item lines="none" id="agg_input_sec">
                <ion-input type="number" placeholder="Marks" maxlength={3} onInput={ev => this.changeMarks(ev)}name="school_rp_ph"></ion-input>
              </ion-item>
              </ion-col>
              <ion-col>
              <ion-item lines="none">
                <ion-checkbox slot="start" onClick={ev=>this.selectFilterOptions('sub_sel_sec', ev)}></ion-checkbox>
                <p>Minimum marks on a spesific subject</p>
              </ion-item>
              <div id="sub_sel_sec">
                <ion-item lines="none">
                  <ion-label>Select Subject</ion-label>
                  <ion-select onIonChange={ev=>this.selSubject(ev)}>
                    <ion-select-option value="s_first_lang_no">First Language</ion-select-option>
                    <ion-select-option value="s_sec_lang_no">Second Language</ion-select-option>
                    <ion-select-option value="s_math_no">Mathametics</ion-select-option>
                    <ion-select-option value="s_phy_sc_no">Physical Science</ion-select-option>
                    <ion-select-option value="s_life_sc_no">Life Science</ion-select-option>
                    <ion-select-option value="s_history_no">History</ion-select-option>
                    <ion-select-option value="s_geography_no">Geography</ion-select-option>
                    <ion-select-option value="s_op_sub_no">Physical Education</ion-select-option>
                  </ion-select>
                </ion-item>
                <ion-item lines="none">
                  <ion-input type="number" placeholder="Marks" onInput={ev => this.changeSubMarks(ev)}name="school_rp_ph"></ion-input>
                </ion-item>
              </div>
              </ion-col>
              <ion-col>
              <ion-item lines="none">
                <ion-checkbox slot="start" onClick={ev=>this.selectFilterOptions('sel_sel_sub', ev)}></ion-checkbox>
                <p>Selected subject(s)</p>
              </ion-item>
              <div class="all_subs">
              {this.subjectPref.map((ele) => 
                <div>
                  <ion-checkbox slot="start" onClick={ev=>this.selectPrefSub(ele, ev)}></ion-checkbox>
                  <ion-label>{ele}</ion-label>
                </div>
              )}
              </div>
              </ion-col>
              </ion-row>
              <ion-button size="default">Filter</ion-button>
            </div>
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