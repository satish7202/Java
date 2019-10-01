import { Component, OnInit, Input } from '@angular/core';
import { subscriptionInject } from '../../../subscription-inject.service';

@Component({
  selector: 'app-modify-fee-structure',
  templateUrl: './modify-fee-structure.component.html',
  styleUrls: ['./modify-fee-structure.component.scss']
})
export class ModifyFeeStructureComponent implements OnInit {
 
  @Input() ModifyFeesChange;
  constructor(public subInjectService:subscriptionInject) { }

  ngOnInit() {
  }
  Close(state)
  {
  
    // (this.ModifyFeesChange=='createSub')?this.subInjectService.rightSliderData(state):this.subInjectService.rightSideData(state)
    (this.ModifyFeesChange=='modifyFees')?this.subInjectService.rightSliderData(state):this.subInjectService.rightSideData(state)

  }
}
