import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { EventService } from 'src/app/Data-service/event.service';

@Component({
  selector: 'app-fee-structure',
  templateUrl: './fee-structure.component.html',
  styleUrls: ['./fee-structure.component.scss']
})
export class FeeStructureComponent implements OnInit {

  constructor(public subInjectService:SubscriptionInject, private eventService:EventService) { }

  ngOnInit() {
  }

  openPlanSliderFee(value,state)
  { 
    this.eventService.sliderData(value);
    this.subInjectService.rightSliderData(state)
  }
}
