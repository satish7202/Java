import {Component, OnInit, Input} from '@angular/core';
import {SubscriptionInject} from '../../../subscription-inject.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-fee-structure',
  templateUrl: './modify-fee-structure.component.html',
  styleUrls: ['./modify-fee-structure.component.scss']
})
export class ModifyFeeStructureComponent implements OnInit {

  @Input() ModifyFeesChange;
  feeStructureForm;
  constructor(public subInjectService: SubscriptionInject,private fb:FormBuilder) {
  }
  
  setFeeStructureForm(data)
  {
   this.feeStructureForm=this.fb.group({
     billingNature:[1,[Validators.required]],
     billEvery:[data,[Validators.required]],
     directFees: this.fb.group({
      equity: [data, [Validators.required]],
      debt: [data, [Validators.required]],
      liquid: [data, [Validators.required]]
    }),
    regularFees: this.fb.group({
      equity: [data, [Validators.required]],
      debt: [data, [Validators.required]],
      liquid: [data, [Validators.required]]
    }),
    otherAssetClassFees: [data]
   })  
  }
 
  ngOnInit() {
  }

  Close(state) {

    // (this.ModifyFeesChange=='createSub')?this.subInjectService.rightSliderData(state):this.subInjectService.rightSideData(state)
    (this.ModifyFeesChange === 'modifyFees') ? this.subInjectService.rightSliderData(state) :
      this.subInjectService.rightSideData(state)

  }
}
