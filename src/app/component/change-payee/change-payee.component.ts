import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../protect-component/AdviserComponent/Subscriptions/subscription-inject.service';
import { SubscriptionService } from '../protect-component/AdviserComponent/Subscriptions/subscription.service';

@Component({
  selector: 'app-change-payee',
  templateUrl: './change-payee.component.html',
  styleUrls: ['./change-payee.component.scss']
})
export class ChangePayeeComponent implements OnInit {
  PayeeSettingData: any;
  obj={
    'clientId':12345,
    'subscriptionId':1,
    'billerProfileId':5
  }
  dataSub: any;
  dataObj: { 'clientId': number; 'subId': any; };
  constructor(public subInjectService: SubscriptionInject,private subService:SubscriptionService) { 
    this.dataSub = this.subInjectService.singleProfileData.subscribe(
      data=>this.getPayeeData(data)
    );
  }

  ngOnInit() {
  }
  Close(state)
  {
    this.subInjectService.rightSideData(state)
    this.subInjectService.rightSliderData(state)
  }
  getPayeeData(data){
    this.dataObj={
      'clientId':12345,
      'subId':data.id
    }
    this.subService.getPayeerProfile(this.dataObj).subscribe(
      data=> this.getPayeeProfileRes(data)
    )
    }
  getPayeeProfileRes(data){
    console.log("getBillerProfileRes data",data)
    this.PayeeSettingData=data;
  }
}
