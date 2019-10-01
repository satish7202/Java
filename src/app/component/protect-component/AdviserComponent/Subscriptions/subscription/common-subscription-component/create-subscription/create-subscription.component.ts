import { Component, OnInit, Input } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { EventService } from 'src/app/Data-service/event.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.scss']
})
export class CreateSubscriptionComponent implements OnInit {

  @Input() modifyFeeTabChange;
  constructor(public subInjectService:SubscriptionInject, private eventService:EventService) { }
  isLinear = false;
  step1Completed=true;
  ngOnInit() {
  }
  Close(state)
  {
    this.subInjectService.rightSideData(state);
    this.subInjectService.rightSliderData(state); 
  }

}
