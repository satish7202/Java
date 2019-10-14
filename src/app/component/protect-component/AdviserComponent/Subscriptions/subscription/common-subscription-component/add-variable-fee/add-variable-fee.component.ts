import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { FormBuilder, Validators } from '@angular/forms';
import { SubscriptionService } from '../../../subscription.service';
import { EnumServiceService } from '../../enum-service.service';

@Component({
  selector: 'app-add-variable-fee',
  templateUrl: './add-variable-fee.component.html',
  styleUrls: ['./add-variable-fee.component.scss']
})
export class AddVariableFeeComponent implements OnInit {

  constructor(public subInjectService: SubscriptionInject, private fb: FormBuilder, private subService: SubscriptionService,private enumService:EnumServiceService) {
    this.subInjectService.rightSideBarData.subscribe(
      data => this.getFeeFormData(data)
    )
  }
  isServiceValid;
  isCodeValid;
  idDesValid;
  isBillValid;
  variableFeeData;
  isRegularFees;
  isDirectFees;
  otherAssetData;
  ngOnInit() {
    this.setValidation(false)
    // this.otherAssetData=this.enumService.getOtherAssetData();
  }
  setValidation(flag) {
    this.isServiceValid = flag
    this.isCodeValid = flag
    this.idDesValid = flag
    this.isBillValid = flag
    this.isDirectFees=flag
    this.isRegularFees=flag
  }
  getFormControl() {
    return this.variableFeeData.controls;
  }
  getFeeFormData(data) {
    this.variableFeeData = this.fb.group({
      billingNature: [1],
      serviceName: [data, [Validators.required]],
      code: [data, [Validators.required]],
      description: [data, [Validators.required]],
      billEvery: [data, [Validators.required]],
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
    this.getFormControl().serviceName.maxLength = 40;
    this.getFormControl().code.maxLength = 10;
    this.getFormControl().description.maxLength = 160;
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
  
    if (this.variableFeeData.controls.serviceName.invalid) {
      this.isServiceValid = true;
      return;
    }
    else if (this.variableFeeData.controls.code.invalid) {
      this.isCodeValid = true;
      return;
    }
    else if (this.variableFeeData.controls.description.invalid) {
      this.idDesValid = true;
      return;
    }
    else if (this.variableFeeData.controls.billEvery.invalid) {
      this.isBillValid = true;
      return;
    }
    else if(this.variableFeeData.controls.directFees.invalid)
    {
     this.isDirectFees=true;
    }
    else if(this.variableFeeData.controls.regularFees.invalid)
    {
      this.isRegularFees=true;
    }
    else {
      let obj = {
        "advisorId": 12345,
        "description": this.variableFeeData.controls.description.value,
        "global": false,
        "serviceCode": this.variableFeeData.controls.code.value,
        "serviceName": this.variableFeeData.controls.serviceName.value,
        "servicePricing": {
          "billEvery": 1,
          "billingNature": parseInt(this.variableFeeData.controls.billingNature.value),
          "feeId": parseInt(feeType),
          "pricingList": [
            {
              "assetClassId": 1,
              "debtAllocation": this.variableFeeData.controls.directFees.controls.dept.value,
              "equityAllocation": this.variableFeeData.controls.directFees.controls.equity.value,
              "liquidAllocation": this.variableFeeData.controls.directFees.controls.liquid.value,
              "otherAssets": [
                0
              ],
              "pricing": 0
            }, {
              "assetClassId": 2,
              "debtAllocation":this.variableFeeData.controls.regularFees.controls.dept.value,
              "equityAllocation":this.variableFeeData.controls.regularFees.controls.dept.value,
              "liquidAllocation": this.variableFeeData.controls.regularFees.controls.dept.value,
              // "otherAssets": [
              //   1, 2
              // ],
              "pricing": 0.5
            }
          ]
        }
      }
      console.log("jifsdfoisd", obj)
      // this.subService.createSettingService(obj).subscribe(
      //   data =>console.log("service created sucessfully")
      // )
    }

  }
}
