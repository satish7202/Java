import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { EventService } from 'src/app/Data-service/event.service';
import { SubscriptionService } from '../../../subscription.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  SettingProfileData: any;

  constructor(public subInjectService:SubscriptionInject, private eventService:EventService, private subService:SubscriptionService) { }

  ngOnInit() {
    this.getSettingProfileData();
  }
  getSettingProfileData()
  {
    let obj={
     'clientId':2970
    }
    this.subService.getSubscriptionClientsSettingProfile(obj).subscribe(
     data => this.getSettingProfileDataResponse(data)
    )
  }
  getSettingProfileDataResponse(data)
  {
   console.log(data)
   this.SettingProfileData=data;
  }
  openPayeeSettings(value,state)
  {
    this.eventService.sliderData(value);
    this,this.subInjectService.rightSliderData(state)
  }
}
