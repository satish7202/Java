import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';

@Component({
  selector: 'app-add-fixed-fee',
  templateUrl: './add-fixed-fee.component.html',
  styleUrls: ['./add-fixed-fee.component.scss']
})
export class AddFixedFeeComponent implements OnInit {

  constructor(public subInjectService:SubscriptionInject) { }

  ngOnInit() {
  }
  Close(state)
  {
    this.subInjectService.rightSliderData(state)
  }
  closeTab(state,value)
  {
    console.log(state)
    this.subInjectService.rightSliderData(state)
    this.subInjectService.closeSlider(value)
  }
}
