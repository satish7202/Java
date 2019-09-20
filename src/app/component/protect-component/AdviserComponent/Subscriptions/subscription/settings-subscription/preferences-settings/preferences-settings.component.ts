import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../../subscription.service';
import { EventService } from 'src/app/Data-service/event.service';
import { subscriptionInject } from '../../../subscription-inject.service';
@Component({
  selector: 'app-preferences-settings',
  templateUrl: './preferences-settings.component.html',
  styleUrls: ['./preferences-settings.component.scss']
})
export class PreferencesSettingsComponent implements OnInit {

  constructor(private subscription:SubscriptionService,public subInjectService:subscriptionInject,private eventService:EventService) { }
  viewMode='tab1';
  advisorId=2735;
  Invoicedata;
  QuotationsData;
  SubscriptionData;
  showLoader=false;
  ngOnInit() {
    this.viewMode="tab1";
  // this.getProfileBillerData();
}
    // getProfileBillerData()
    // {
    // this.subscription.getPreferenceBillerProfile(this.advisorId).subscribe(
    //   data => this.getProfileBillerDataResponse(data)
    // )
    // }
    // getPrefixData(type)
    // {
    //   let obj={
    //     'advisorId':this.advisorId,
    //     'type':type
    //   }
    //   this.showLoader=true;
    //   this.subscription.getPreferenceInvoiceQuotations(obj).subscribe(
    //     data =>this.getInvoiceQuotationResponse(data,type)
    //   )
    // }
    // getProfileBillerDataResponse(data)
    // {
    //  console.log("jksdfsdfaksdf",data)
    // }
    // getInvoiceQuotationResponse(data,type)
    // {
    //   this.showLoader=false;
    //   if(type==1)
    //   {
    //     this.Invoicedata=data; 
    //   }
    //   else if(type==2)
    //   {
    //     this.QuotationsData=data
    //   }
    //   else{
    //     this.SubscriptionData=data;
    //   }   
    // }
    Open(state)
    {
      // this.eventService.sidebarData(value)
      this.subInjectService.rightSideData(state);
      
    }
}
