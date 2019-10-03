import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { FormBuilder } from '@angular/forms';
import { SubscriptionService } from '../../../subscription.service';

@Component({
  selector: 'app-add-variable-fee',
  templateUrl: './add-variable-fee.component.html',
  styleUrls: ['./add-variable-fee.component.scss']
})
export class AddVariableFeeComponent implements OnInit {

  constructor(public subInjectService: SubscriptionInject, private fb: FormBuilder,private subService:SubscriptionService) { }

  ngOnInit() {
  }
  variableFeeData = this.fb.group({
    billingNature: [],
    serviceName: [],
    code: [],
    description: [],
    billEvery: [],
    mutualFundFees: [],
    otherAssetClassFees: []
  })
  Close(state) {
    this.subInjectService.rightSliderData(state)
  }
  closeTab(state, value) {
    console.log(state)
    this.subInjectService.rightSliderData(state)
    this.subInjectService.closeSlider(value)
  }
  saveVariableFeeData(feeType) {
    let obj = {
      "advisorId": 4545,
      "description":this.variableFeeData.controls.description.value,
      "global": false,
      "serviceCode": this.variableFeeData.controls.code.value,
      "serviceName":  this.variableFeeData.controls.serviceName.value,
      "servicePricing": {
        "autoRenew": 0,
        "billEvery": 1,
        "billingCycle": 1,
        "billingMode": 1,
        "billingNature": parseInt(this.variableFeeData.controls.billingNature.value),
        "feeId": 2,
        "pricingList": [
          {
            "assetClassId": 1,
            "debtAllocation": 0.5,
            "directRegular": 1,
            "equityAllocation": 0.25,
            "liquidAllocation": 0.5,
            "otherAssets": [
              0
            ],
            "pricing": 0
          }, {
            "assetClassId": 2,
            "debtAllocation": 0,
            "directRegular": 0,
            "equityAllocation": 0,
            "liquidAllocation": 0,
            "otherAssets": [
              1, 2
            ],
            "pricing": 0.5
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
