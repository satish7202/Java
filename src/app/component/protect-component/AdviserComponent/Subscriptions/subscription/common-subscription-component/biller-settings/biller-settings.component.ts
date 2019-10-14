import { Component, OnInit, Input } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { SubscriptionService } from '../../../subscription.service';
import { EventService } from 'src/app/Data-service/event.service';

@Component({
  selector: 'app-biller-settings',
  templateUrl: './biller-settings.component.html',
  styleUrls: ['./biller-settings.component.scss']
})
export class BillerSettingsComponent implements OnInit {
  obj1: { 'advisorId': number; };
  @Input() upperData;
  billerSettingData:any;
  dataSub: any;
  dataObj:any
  isSelectedPlan: any;
  getSubsciption: any;
  getDataRow: any;
  constructor(public subInjectService:SubscriptionInject,public subService:SubscriptionService,public eventService:EventService) { 
    this.dataSub = this.subInjectService.singleProfileData.subscribe(
      data=>this.getBillerData(data)
    );
    this.eventService.rightSliderData.subscribe(
      value=>this.getBillerData1(value)
    );
  }
  obj={
    'advisorId':12345,
    'subscriptionId':1,
    'billerProfileId':5
  }
  ngOnInit() {
   
  }
  getBillerData(data){
    this.getDataRow = data
  }
  getBillerData1(value){
     if(value == 'billerSettings'){
      this.dataObj={
        'advisorId':12345,
        'subId': this.getDataRow.id
      }
      this.subService.getBillerProfile(this.dataObj).subscribe(
        data=> this.getBillerProfileRes(data)
      )
      this.getSubsciption =  this.getDataRow
     }

  }
  saveChangeBillerSetting()
  {
    let obj={
      id:this.isSelectedPlan.id,
      subscriptionId:this.getSubsciption.id
    }
    this.subService.changeBillerSetting(obj).subscribe(
      data=> this.changeBillerSettingData(data)
    )
  }
  changeBillerSettingData(data)
  {
    console.log("data",data)
    if(data == true){
      this.Close('close')
    }
  }
  getBillerProfileRes(data){
    console.log("getBillerProfileRes data",data)
    this.billerSettingData=data;
    this.billerSettingData.forEach(element => {
      element.selected = (element.selected == 0)?false:true  
      });
  }
  selectedBiller(data,singlePlan)
  {
    singlePlan.selected = true;
    console.log('selected value',data)
    console.log('selected singlePlan',singlePlan);
    this.billerSettingData.forEach(element => {
      element.selected = false;
    });
    singlePlan.selected = true;
    this.isSelectedPlan=singlePlan;
  }
  Close(state)
  {
    this.subInjectService.rightSideData(state);
    this.subInjectService.rightSliderData(state); 
  }
  // planSettingData=[{'title':'RONAK HINDOCHA','code':'ARN123','Address':'#46,Street 1,Lokhandwala Township,Borivali East,Mumbai 400 066'},
  //                  {'title':'RUPA HINDOCHA','code':'ARN124','Address':'#46,Street 1,Lokhandwala Township,Borivali East,Mumbai 400 066'},
  //                  {'title':'DHYAAN HINDOCHA','code':'ARN125','Address':'#46,Street 1,Lokhandwala Township,Borivali East,Mumbai 400 066'}]
  editProfileData(data)
  {
    console.log
  }                 
}
