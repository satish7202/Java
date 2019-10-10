import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { FormBuilder, Validators } from '@angular/forms';
import { SubscriptionService } from '../../../subscription.service';

@Component({
  selector: 'app-add-variable-fee',
  templateUrl: './add-variable-fee.component.html',
  styleUrls: ['./add-variable-fee.component.scss']
})
export class AddVariableFeeComponent implements OnInit {

  constructor(public subInjectService: SubscriptionInject, private fb: FormBuilder,private subService:SubscriptionService) {
    this.subInjectService.rightSideBarData.subscribe(
      data=>this.getFeeFormData(data)
    )
   }
   isServiceValid;
   isCodeValid;
   idDesValid;
   isBillValid;
   variableFeeData;
   submitted=false;
  ngOnInit() {
    this.setValidation(false)
  }
  setValidation(flag)
  {
   this.isServiceValid=flag
   this.isCodeValid=flag
   this.idDesValid=flag
   this.isBillValid=flag
  }
  getFormControl()
  {
    return this.variableFeeData.controls;
  }
  getFeeFormData(data)
  {
    this.variableFeeData = this.fb.group({
      billingNature: [1],
      serviceName: [data,[Validators.required]],
      code: [data,[Validators.required]],
      description: [data,[Validators.required]],
      billEvery: [data,[Validators.required]],
      mutualFundFees: [data],
      otherAssetClassFees: [data]
    })
  }
  Close(state) {
    this.subInjectService.rightSliderData(state)
    this.setValidation(false)
    this.variableFeeData.reset();
  }
  closeTab(state, value) {
    console.log(state)
    this.subInjectService.rightSliderData(state)
    this.subInjectService.closeSlider(value)
  }
  saveVariableFeeData(feeType) {
    this.submitted=true;
    if(this.variableFeeData.controls.serviceName.invalid)
    { 
      this.isServiceValid=true;
      return;
    }
    if(this.variableFeeData.controls.code.invalid)
    {
      this.isCodeValid=true;
      return;
    }
    if(this.variableFeeData.controls.description.invalid)
    {
      this.idDesValid=true;
      return;
    }
    if(this.variableFeeData.controls.billEvery.invalid)
    {
      this.isBillValid=true;
      return;
    }
    else{
    let obj = {
      "advisorId": 12345,
      "description":this.variableFeeData.controls.description.value,
      "global": false,
      "serviceCode": this.variableFeeData.controls.code.value,
      "serviceName":  this.variableFeeData.controls.serviceName.value,
      "servicePricing": {
        "billEvery": 1,    
        "billingNature": parseInt(this.variableFeeData.controls.billingNature.value),
        "feeId": parseInt(feeType),
        "pricingList": [
          {
            "assetClassId": 1,
            "debtAllocation": 0.5,
            "equityAllocation": 0.25,
            "liquidAllocation": 0.5,
            "otherAssets": [
              0
            ],
            "pricing": 0
          }, {
            "assetClassId": 2,
            "debtAllocation": 0,
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
    // this.subService.createSettingService(obj).subscribe(
    //   data =>console.log("service created sucessfully")
    // )
    }
    
  }
}
