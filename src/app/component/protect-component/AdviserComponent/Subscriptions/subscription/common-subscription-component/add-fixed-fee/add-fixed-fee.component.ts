import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { FormBuilder } from '@angular/forms';
import { SubscriptionService } from '../../../subscription.service';

@Component({
  selector: 'app-add-fixed-fee',
  templateUrl: './add-fixed-fee.component.html',
  styleUrls: ['./add-fixed-fee.component.scss']
})
export class AddFixedFeeComponent implements OnInit {

  constructor(public subInjectService: SubscriptionInject, private fb: FormBuilder,private subService:SubscriptionService) { }

  ngOnInit() {
  }
  fixedFeeData = this.fb.group({
    serviceName: [''],
    code: [''],
    description: [''],
    fees: [],
    billingNature: [],
    billEvery: [''],
    billingMode: []
  })
  Close(state) {
    this.subInjectService.rightSliderData(state)
  }
  closeTab(state, value) {
    console.log(state)
    this.subInjectService.rightSliderData(state)
    this.subInjectService.closeSlider(value)
  }
  saveFeeTypeData(feeType) {

    let obj = {
      "advisorId": 4545,
      "description":this.fixedFeeData.controls.description.value,
      "global": false,
      "serviceCode": this.fixedFeeData.controls.code.value,
      "serviceName": this.fixedFeeData.controls.serviceName.value ,
      "servicePricing": {
        "autoRenew": 0,
        "billEvery": this.fixedFeeData.controls.billEvery.value ,
        "billingCycle": 1,
        "billingMode":parseInt(this.fixedFeeData.controls.billingMode.value) ,
        "billingNature": parseInt(this.fixedFeeData.controls.billingNature.value),
        "feeId":parseInt(feeType),
        "pricingList": [
          {
            "pricing":this.fixedFeeData.controls.fees.value,
            "assetClassId": 1
          }
        ]

      }
    }
     console.log("jifsdfoisd",obj)
    this.subService.createSettingService(obj).subscribe(
      data =>console.log("service created sucessfully")
    )
  }
}
