import { Component, OnInit } from '@angular/core';
import { subscriptionInject } from '../../../subscription-inject.service';
import { EventService } from 'src/app/Data-service/event.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public subInjectService:subscriptionInject,private eventService:EventService) { }

  ngOnInit() {
  }
  openPayeeSettings(value,state)
  {
    this.eventService.sliderData(value);
    this,this.subInjectService.rightSliderData(state)
  }
}
