import { Component, OnInit, Input } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { FormBuilder, Validators } from '@angular/forms';
import { EnumServiceService } from '../../enum-service.service';
import * as _ from "lodash";

@Component({
  selector: 'app-modify-fee-structure',
  templateUrl: './modify-fee-structure.component.html',
  styleUrls: ['./modify-fee-structure.component.scss']
})
export class ModifyFeeStructureComponent implements OnInit {

  @Input() ModifyFeesChange;
  @Input() createSubData;
  feeStructureForm;
  modifyFeeData;
  otherAssetData: any[];
  selectedOtherAssets = [];
  isBillValid;
  mutualFundFees: any;
  pricing: boolean;
  constructor(public subInjectService: SubscriptionInject, private fb: FormBuilder, private subInject: SubscriptionInject, private enumService: EnumServiceService) {
    this.subInject.singleProfileData.subscribe(
      data => this.modifyFeeData = data
    )
  }
  ngOnInit() {
    this.setValidation(false)
    this.setFeeStructureForm('')
    this.otherAssetData = [];
    this.enumService.getOtherAssetData().forEach(element => {
      this.otherAssetData.push(Object.assign({}, element));
    });
    console.log(this.otherAssetData)
  }
  setValidation(flag) {
    this.isBillValid = flag
    this.mutualFundFees = flag;
    this.otherAssetData = flag
  }
  setFeeStructureForm(data) {
    this.feeStructureForm = this.fb.group({
      billingNature: [1, [Validators.required]],
      billEvery: [data, [Validators.required]],
      Duration: [1],
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
      otherAssetClassFees: [data],
      pricing: [data, [Validators.required]]

    })
  }
  getFormControl() {
    return this.feeStructureForm.controls;
  }

  Close(state) {
    this.ngOnInit();
    // (this.ModifyFeesChange=='createSub')?this.subInjectService.rightSliderData(state):this.subInjectService.rightSideData(state)
    (this.ModifyFeesChange === 'modifyFees') ? this.subInjectService.rightSliderData(state) :
      this.subInjectService.rightSideData(state)

  }
  select(assetData) {
    (assetData.selected) ? this.unselectAssets(assetData) : this.selectAssets(assetData);
  }
  selectAssets(data) {
    console.log(data)
    data.selected = true;
    this.selectedOtherAssets.push(parseInt(data.value))
  }
  unselectAssets(data) {
    data.selected = false;
    _.remove(this.selectedOtherAssets, function (delData) {
      return delData.id == data.id;
    })
  }
  saveModifyFees() {
    if (this.getFormControl().billEvery.invalid) {
      this.isBillValid = true;
      return
    }
    else if (this.getFormControl().directFees.invalid || this.getFormControl().regularFees.invalid) {
      this.mutualFundFees = true
      return;
    }
    else if (this.getFormControl().directFees.pricing.invalid) {
      this.pricing = true
      return;
    }
    else if (this.selectedOtherAssets.length == 0) {
      this.pricing = true;
      return;
    }
    else {
      var obj = {
        "subscriptionId": 12,
        "billingNature": 1,
        "billingMode": 1,
        "billEvery": 6,
        "subscriptionAssetPricingList": [
          {
            "directRegular": 1,
            "assetClassId": 1,
            "equityAllocation": 0.75,
            "debtAllocation": 0.25,
            "liquidAllocation": 0.25
          }, {
            "directRegular": 2,
            "assetClassId": 1,
            "equityAllocation": 0.75,
            "debtAllocation": 0.25,
            "liquidAllocation": 0.25
          }, {
            "assetClassId": 2,
            "pricing": 1.0,
            "subscriptionSubAssets": [
              {
                "subAssetClassId": 1
              }, {
                "subAssetClassId": 3
              }
            ]
          }
        ]
      }
     console.log(obj)

    }
  }
}
