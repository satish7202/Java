import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { SubscriptionService } from '../../../subscription.service';

@Component({
  selector: 'app-biller-settings',
  templateUrl: './biller-settings.component.html',
  styleUrls: ['./biller-settings.component.scss']
})
export class BillerSettingsComponent implements OnInit {
  obj1: { 'advisorId': number; };
  billerSettingData:any;
  dataSub: any;
  dataObj:any
  isPrimary: any;
  constructor(public subInjectService:SubscriptionInject,private subService:SubscriptionService) { 
    this.dataSub = this.subInjectService.singleProfileData.subscribe(
      data=>this.getBillerData(data)
    );
  }
  obj={
    'advisorId':12345,
    'subscriptionId':1,
    'billerProfileId':5
  }
  ngOnInit() {
    this.getChangeBillerSetting();
  }
  getBillerData(data){
    console.log(data);
    this.dataObj={
      'advisorId':12345,
      'subId':data.id
    }
    this.subService.getBillerProfile(this.dataObj).subscribe(
      data=> this.getBillerProfileRes(data)
    )
  }
  getChangeBillerSetting()
  {
    this.subService.changeBillerSetting(this.obj).subscribe(
      data=> this.changeBillerSettingData(data)
    )
  }
  changeBillerSettingData(data)
  {
    console.log("data",data)
  }
  getBillerProfileRes(data){
    console.log("getBillerProfileRes data",data)
    this.billerSettingData=data;
  }
  selectedBiller(data)
  {
    this.isPrimary=data;
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
