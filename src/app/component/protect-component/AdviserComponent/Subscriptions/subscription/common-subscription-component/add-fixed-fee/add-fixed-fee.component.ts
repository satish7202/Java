import { Component, OnInit, Output } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { FormBuilder, Validators } from '@angular/forms';
import { SubscriptionService } from '../../../subscription.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-add-fixed-fee',
  templateUrl: './add-fixed-fee.component.html',
  styleUrls: ['./add-fixed-fee.component.scss']
})
export class AddFixedFeeComponent implements OnInit {

  constructor(public subInjectService: SubscriptionInject, private fb: FormBuilder,private subService:SubscriptionService) { 
    this.subInjectService.rightSideBarData.subscribe(
      data=>this.getFeeFormData(data)
    )
  }
  submitted=false;
  ngOnInit() {
  }
  fixedFeeData;
  getFormControl()
  {
    return this.fixedFeeData.controls;
  }
  getFeeFormData(data)
  {
    this.fixedFeeData = this.fb.group({
      serviceName: [data,[Validators.required]],
      code: [data,[Validators.required]],
      description: [data,[Validators.required]],
      fees: [data,[Validators.required]],
      billingNature: [1],
      billEvery: [data,[Validators.required]],
      billingMode: [1]
    })
  }
  Close(state) {
    this.subInjectService.rightSliderData(state)
    this.submitted=false;
  }
  closeTab(state, value) {
    console.log(state)
    this.subInjectService.rightSliderData(state)
    this.subInjectService.closeSlider(value)
  }
  saveFeeTypeData(feeType,state) {
    this.submitted=true;
   if(this.fixedFeeData.invalid)
   {
     console.log(this.getFormControl())
    return;
   }
   else{
    let obj = {
      "advisorId": 12345,
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
      data =>this.saveFeeTypeDataResponse(data,state)
    )
   }  
  }
  saveFeeTypeDataResponse(data,state)
  {
    this.subInjectService.pushClientData(data);
    this.subInjectService.rightSliderData(state)
  }
}
