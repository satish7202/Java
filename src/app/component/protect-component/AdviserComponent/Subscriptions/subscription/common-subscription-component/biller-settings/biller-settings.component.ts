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

  constructor(public subInjectService:SubscriptionInject,private subService:SubscriptionService) { }
  obj={
    'advisorId':12345,
    'subscriptionId':1,
    'billerProfileId':5
  }
  ngOnInit() {
    this.getChangeBillerSetting();
    this.getBillerProfileList();
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
  getBillerProfileList(){
    this.obj1={
      'advisorId':12345
    }
    this.subService.getBillerProfile(this.obj).subscribe(
      data=> this.getBillerProfileRes(data)
    )
  }
  getBillerProfileRes(data){
    console.log("getBillerProfileRes data",data)
  }
  Close(state)
  {
    this.subInjectService.rightSideData(state);
    this.subInjectService.rightSliderData(state); 
  }
  planSettingData=[{'title':'RONAK HINDOCHA','code':'ARN123','Address':'#46,Street 1,Lokhandwala Township,Borivali East,Mumbai 400 066'},
                   {'title':'RUPA HINDOCHA','code':'ARN124','Address':'#46,Street 1,Lokhandwala Township,Borivali East,Mumbai 400 066'},
                   {'title':'DHYAAN HINDOCHA','code':'ARN125','Address':'#46,Street 1,Lokhandwala Township,Borivali East,Mumbai 400 066'}]
  editProfileData(data)
  {
    console.log
  }                 
}
