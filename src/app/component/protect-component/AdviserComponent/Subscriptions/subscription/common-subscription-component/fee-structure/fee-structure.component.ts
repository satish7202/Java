import { Component, OnInit, Input } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { EventService } from 'src/app/Data-service/event.service';

@Component({
  selector: 'app-fee-structure',
  templateUrl: './fee-structure.component.html',
  styleUrls: ['./fee-structure.component.scss']
})
export class FeeStructureComponent implements OnInit {

  constructor(public subInjectService: SubscriptionInject, private eventService: EventService) { }
  @Input() upperData;
  selectedFee;
  ngOnInit() {
  }
  selectedFees(feeType)
  {
    this.selectedFee=feeType
  }
  openPlanSliderFee(data, value, state) {
    this.eventService.sliderData(value);
    this.subInjectService.rightSideData(data);
    this.subInjectService.rightSliderData(state);
  }
}
