import { Component, OnInit, Input } from '@angular/core';
import { subscriptionInject } from '../../../subscription-inject.service';

@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.scss']
})
export class CreateSubscriptionComponent implements OnInit {

  @Input() modifyFeeTabChange;
  constructor(public subInjectService:subscriptionInject) { }

  ngOnInit() {
  }
  Close(state)
  {
    this.subInjectService.rightSideData(state);
    this.subInjectService.rightSliderData(state); 
  }

}
