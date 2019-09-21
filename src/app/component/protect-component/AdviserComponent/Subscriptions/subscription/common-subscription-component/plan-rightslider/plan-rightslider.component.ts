import { Component, OnInit } from '@angular/core';
import { subscriptionInject } from '../../../subscription-inject.service';

@Component({
  selector: 'app-plan-rightslider',
  templateUrl: './plan-rightslider.component.html',
  styleUrls: ['./plan-rightslider.component.scss']
})
export class PlanRightsliderComponent implements OnInit {

  constructor(public subInjectService:subscriptionInject ) { }

  ngOnInit() {
  }
  Close(state)
  {
    this.subInjectService.rightSliderData(state)
  }
}
