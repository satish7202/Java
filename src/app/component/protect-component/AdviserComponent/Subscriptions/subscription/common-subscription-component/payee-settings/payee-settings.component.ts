import { Component, OnInit } from '@angular/core';
import { subscriptionInject } from '../../../subscription-inject.service';
import { EventService } from 'src/app/Data-service/event.service';

@Component({
  selector: 'app-payee-settings',
  templateUrl: './payee-settings.component.html',
  styleUrls: ['./payee-settings.component.scss']
})
export class PayeeSettingsComponent implements OnInit {
   
  settingsModal;
  constructor(public subInjectService:subscriptionInject,private eventService:EventService) {
    // this.eventService.rightSliderData.subscribe(
    //   data =>this.getRightSliderData(data)
    // )
   }
   
   getRightSliderData(data)
   {
     this.settingsModal=data;
   }
  ngOnInit() {
  }
  Close(state)
  { 
    this.subInjectService.rightSliderData(state)
    // this.subInjectService.rightSideData(state); 
  }
}
