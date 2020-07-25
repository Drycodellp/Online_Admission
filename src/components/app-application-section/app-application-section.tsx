import { Component, h } from '@stencil/core';
import { toastController } from '@ionic/core';

@Component({
  tag: 'app-application-section',
  styleUrl: 'app-application-section.css'
})
export class AppApplicationSection {

    public id;
    public schoolDetails;
    public resValue;
    public streams = [];

    public firstLang;
    public secLang;
    public set1row1;
    public set1row2;
    public set1row3;
    public set1row4;
    public set1row5;
    public set1row6;
    public set2row1;
    public set2row2;
    public set2row3;
    public set2row4;
    public set2row5;
    public set2row6;
    public set3row1;
    public set3row2;
    public set3row3;
    public set3row4;
    public set3row5;
    public set3row6;
    public set3row7;

    public student_name;
    public logo;

    async componentWillLoad(){
      this.id = new URL(window.location.href).searchParams.get("id");
      //console.log(this.id)
      let res = await fetch("http://localhost:1337/teachers/"+this.id);
      this.schoolDetails = await res.json();
      this.resValue = this.schoolDetails.school_available_subject;
      console.log(this.resValue);

      let data = window.localStorage.getItem('user_details');
    let parseData = JSON.parse(data);
    this.student_name = parseData[0].s_name;
    this.logo = parseData[0].s_image;
    }

    selSub(sec, val){
      //console.log(sec, val);
      switch (sec) {
        case "firstLang": {
          this.firstLang = val;
          break;
        }
        case "secLang": {
          this.secLang = val;
          break;
        }
        case "science1": {
          this.set1row1 = val;
          break;
        }
        case "science2": {
          this.set1row2 = val;
          break;
        }
        case "science3": {
          this.set1row3 = val;
          break;
        }
        case "science4": {
          this.set1row4 = val;
          break;
        }
        case "science5": {
          this.set1row5 = val;
          break;
        }
        case "science6": {
          this.set1row6 = val;
          break;
        }
        case "commerce1": {
          this.set2row1 = val;
          break;
        }
        case "commerce2": {
          this.set2row2 = val;
          break;
        }
        case "commerce3": {
          this.set2row3 = val;
          break;
        }
        case "commerce4": {
          this.set2row4 = val;
          break;
        }
        case "commerce5": {
          this.set2row5 = val;
          break;
        }
        case "commerce6": {
          this.set2row6 = val;
          break;
        }
        case "arts1": {
          this.set3row1 = val;
          break;
        }
        case "arts2": {
          this.set3row2 = val;
          break;
        }
        case "arts3": {
          this.set3row3 = val;
          break;
        }
        case "arts4": {
          this.set3row4 = val;
          break;
        }
        case "arts5": {
          this.set3row5 = val;
          break;
        }
        case "arts6": {
          this.set3row6 = val;
          break;
        }
        case "arts7": {
          this.set3row7 = val;
          break;
        }
      }
    }

    selStream(val, e){
      console.log(val, e.target.checked)
      if(!e.target.checked){
        this.streams.push(val);
        document.getElementById(val).style.display = 'block';
      }else{
        if(this.streams.length > 0){
          for(var i=0; i<this.streams.length; i++){
            let ele = this.streams[i];
            if(ele == val){
              this.streams.splice(this.streams.indexOf(ele), 1);
              document.getElementById(val).style.display = 'none';
            }
          }
        }
      }
    }

    applyForTheSchool(){
      let data = window.localStorage.getItem('user_details');
      let parseData = JSON.parse(data);
      let s_id = parseData[0].id;
      let s_name = parseData[0].s_name;
      let s_school = parseData[0].s_sch_name;
      let s_total = Number(parseData[0].s_first_lang_no)+Number(parseData[0].s_sec_lang_no)+Number(parseData[0].s_math_no)+Number(parseData[0].s_phy_sc_no)+Number(parseData[0].s_life_sc_no)+Number(parseData[0].s_history_no)+Number(parseData[0].s_geography_no);
      let s_persent = (s_total/7).toFixed(3);

      /* let subjects = {
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
      } */

      if(this.id && s_id && this.streams.length > 0){
        for(var i=0; i<this.streams.length; i++){
          let stream = this.streams[i];
          if(stream == 'science'){
            let subject = {
              "first_language": this.firstLang,
              "second_language": this.secLang,
              "others": (" "+this.set1row1+" "+this.set1row2+" "+this.set1row3+" "+this.set1row4+" "+this.set1row5+" "+this.set1row6).replace(/ undefined/gi,'')
            }
            this.sendRequest(subject, s_id, s_name, s_school, s_total, s_persent, stream);
          }else if(stream == 'commerce'){
            let subject = {
              "first_language": this.firstLang,
              "second_language": this.secLang,
              "others": (" "+this.set2row1+" "+this.set2row2+" "+this.set2row3+" "+this.set2row4+" "+this.set2row5+" "+this.set2row6).replace(/ undefined/gi,'')
            }
            this.sendRequest(subject, s_id, s_name, s_school, s_total, s_persent, stream);
          }else if(stream == 'arts'){
            let subject = {
              "first_language": this.firstLang,
              "second_language": this.secLang,
              "others": (" "+this.set3row1+" "+this.set3row2+" "+this.set3row3+" "+this.set3row4+" "+this.set3row5+" "+this.set3row6+" "+this.set3row7).replace(/ undefined/gi,'')
            }
            this.sendRequest(subject, s_id, s_name, s_school, s_total, s_persent, stream);
          }
        }
      }else{
        this.presentToast("Sorry can't process your request");
      }
    }

    async sendRequest(sub, id, name, sch, tot, per, stm){
      let postData = {
        "student_id": id.toString(),
        "student_name": name,
        "student_school": sch,
        "student_total": tot,
        "student_percent": per,
        "school_id": this.id.toString(),
        "stream": stm,
        "subjects": sub
      }
      let checkingResponse = await fetch("http://localhost:1337/applicants", {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      let jsonRes = await checkingResponse.json();
      console.log(jsonRes);
      if(jsonRes && jsonRes.id){
        this.presentToast('You application successfully received');
      }else{
        this.presentToast('There is some error');
      }
    }

    async presentToast(msg) {
      const toast = await toastController.create({
          message: msg,
          duration: 2000
      });
      toast.present();
    }

    logout(){
      window.localStorage.removeItem('user_details');
      window.location.href = "/";
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
          <ion-grid class="sub_sel">
            <h3>Select Subjects</h3>
            <ion-row>
              <ion-col size="3">
                <h4>First Language</h4>
              </ion-col>
              <ion-col size="9" class="lang_col">
              <ion-radio-group>
              {this.resValue.first_language.map((val) => 
                <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('firstLang', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                </div>
              )}
              </ion-radio-group>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="3">
                <h4>Second Language</h4>
              </ion-col>
              <ion-col size="9" class="lang_col">
              <ion-radio-group>
              {this.resValue.second_language.map((val) => 
                <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('secLang', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                </div>
              )}
              </ion-radio-group>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-list class="select_stream">
                <h4>Select Stream(select one or more)</h4>
                <div>
                  <div>
                  <ion-checkbox slot="start" onClick={ev=>this.selStream('science', ev)}></ion-checkbox>
                  <ion-label>Science</ion-label>
                  </div>

                  <div>
                  <ion-checkbox slot="start" onClick={ev=>this.selStream('commerce', ev)}></ion-checkbox>
                  <ion-label>Commerce</ion-label>
                  </div>

                  <div>
                  <ion-checkbox slot="start" onClick={ev=>this.selStream('arts', ev)}></ion-checkbox>
                  <ion-label>Arts</ion-label>
                  </div>
                </div>
              </ion-list>
            </ion-row>
            <ion-row id="science">
              <ion-col size="3">
                <h4>Science</h4>
              </ion-col>
              <ion-col size="9">
                <ion-row>
                <ion-radio-group>
                {this.resValue.set1.row1.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('science1', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
                <ion-row>
                <ion-radio-group>
                {this.resValue.set1.row2.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('science2', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>

                </ion-row>
                <ion-row>
                <ion-radio-group>
                {this.resValue.set1.row3.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('science3', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
                <ion-row>
                <ion-radio-group>
                {this.resValue.set1.row4.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('science4', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
                <ion-row>
                <ion-radio-group>
                {this.resValue.set1.row5.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('science5', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
                <ion-row>
                <ion-radio-group>
                {this.resValue.set1.row6.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('science6', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
              </ion-col>
            </ion-row>
            <ion-row id="commerce">
              <ion-col size="3">
                <h4>Commerce</h4>
              </ion-col>
              <ion-col size="9">
                <ion-row>
                <ion-radio-group>
                {this.resValue.set2.row1.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('commerce1', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
                <ion-row>
                <ion-radio-group>
                {this.resValue.set2.row2.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('commerce2', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
                <ion-row>
                <ion-radio-group>
                {this.resValue.set2.row3.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('commerce3', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
                <ion-row>
                <ion-radio-group>
                {this.resValue.set2.row4.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('commerce4', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
                <ion-row>
                <ion-radio-group>
                {this.resValue.set2.row5.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('commerce5', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
                <ion-row>
                <ion-radio-group>
                {this.resValue.set2.row6.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('commerce6', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
              </ion-col>
            </ion-row>
            <ion-row id="arts">
              <ion-col size="3">
                <h4>Arts</h4>
              </ion-col>
              <ion-col size="9">
                <ion-row>
                <ion-radio-group>
                {this.resValue.set3.row1.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('arts1', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
                <ion-row>
                <ion-radio-group>
                {this.resValue.set3.row2.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('arts2', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
                <ion-row>
                <ion-radio-group>
                {this.resValue.set3.row3.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('arts3', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
                <ion-row>
                <ion-radio-group>
                {this.resValue.set3.row4.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('arts4', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
                <ion-row>
                <ion-radio-group>
                {this.resValue.set3.row5.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('arts5', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
                <ion-row>
                <ion-radio-group>
                {this.resValue.set3.row6.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('arts6', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
                <ion-row>
                <ion-radio-group>
                {this.resValue.set3.row7.map((val) => 
                  <div>
                  <ion-radio slot="start" onClick={()=>this.selSub('arts7', val)}></ion-radio>
                  <ion-label>{val}</ion-label>
                  </div>
                )}
                </ion-radio-group>
                </ion-row>
              </ion-col>
            </ion-row>
            
          </ion-grid>

          <ion-button expand="full" onClick={() => this.applyForTheSchool()}>Send Application</ion-button>

        </ion-card>
      </ion-content>
    ]
  }

}