import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { EventService } from 'src/app/Data-service/event.service';
import { SubscriptionService } from '../../../subscription.service';

@Component({
  selector: 'app-payee-settings',
  templateUrl: './payee-settings.component.html',
  styleUrls: ['./payee-settings.component.scss']
})
export class PayeeSettingsComponent implements OnInit {

  settingsModal;
  constructor(public subInjectService:SubscriptionInject, private eventService:EventService,private subService:SubscriptionService) {
    // this.eventService.rightSliderData.subscribe(
    //   data =>this.getRightSliderData(data)
    // )
   }
  obj=[
    {
        "id": null,
        "subscriptionId": 12,
        "clientBillerId": 7,
        "share": 25,
        "createdDate": "2000-02-22",
        "lastupdatedDate": "2000-03-23",
        "isActive": 1
    },
    {
        "id": null,
        "subscriptionId": 12,
        "clientBillerId": 25,
        "share": 5,
        "createdDate": "2000-02-22",
        "lastupdatedDate": "2000-03-23",
        "isActive": 1
    },
    {
        "id": null,
        "subscriptionId": 12,
        "clientBillerId": 55,
        "share": 5,
        "createdDate": "2000-02-22",
        "lastupdatedDate": "2000-03-23",
        "isActive": 1
    },
    {
        "id": null,
        "subscriptionId": 12,
        "clientBillerId": 75,
        "share": 5,
        "createdDate": "2000-02-22",
        "lastupdatedDate": "2000-03-23",
        "isActive": 1
    }
]
   getRightSliderData(data)
   {
     this.settingsModal=data;
   }
  ngOnInit() {
    this.getChangePayeeSetting();
  }
  getChangePayeeSetting()
  {
    this.subService.changePayeeSetting(this.obj).subscribe(
        data=> this.changePayeeSettingData(data)
      )
  }
  changePayeeSettingData(data)
  {
    console.log("data",data);
  }
  Close(state)
  {
    this.subInjectService.rightSliderData(state)
   this.subInjectService.rightSideData(state);
  }
}
