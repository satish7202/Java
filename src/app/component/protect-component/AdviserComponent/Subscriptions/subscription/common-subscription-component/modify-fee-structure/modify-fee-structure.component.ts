import {Component, OnInit, Input, Output} from '@angular/core';
import {SubscriptionInject} from '../../../subscription-inject.service';
import {FormBuilder, Validators} from '@angular/forms';
import {EnumServiceService} from '../../enum-service.service';
import * as _ from 'lodash';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-modify-fee-structure',
  templateUrl: './modify-fee-structure.component.html',
  styleUrls: ['./modify-fee-structure.component.scss']
})
export class ModifyFeeStructureComponent implements OnInit {
  constructor(public subInjectService: SubscriptionInject, private fb: FormBuilder, private subInject: SubscriptionInject,
              private enumService: EnumServiceService) {
    this.subInject.singleProfileData.subscribe(
      data => this.getSubscribeData(data)
    );
  }

  @Input() ModifyFeesChange;
  @Input() createSubData;
  modifyFeeData;
  otherAssetData: any[];
  selectedOtherAssets = [];
  isBillValid;
  isFeeValid;
  mutualFundFees: any;
  pricing: boolean;
  @Output() startSubData = new EventEmitter();
  fixedFeeStructureForm = this.fb.group({
    fees: ['', [Validators.required]],
    billingNature: [],
    billEvery: [],
    Duration: [],
    billingMode: []
  });
  variableFeeStructureForm = this.fb.group({
    billingNature: [, [Validators.required]],
    billEvery: [, [Validators.required]],
    Duration: [],
    directFees: this.fb.group({
      equity: [, [Validators.required]],
      debt: [, [Validators.required]],
      liquid: [, [Validators.required]]
    }),
    regularFees: this.fb.group({
      equity: [, [Validators.required]],
      debt: [, [Validators.required]],
      liquid: [, [Validators.required]]
    }),
    otherAssetClassFees: [],
    pricing: [, [Validators.required]]
  });
  variableData;

  ngOnInit() {
    this.setValidation(false);
    // this.otherAssetData = [];
    // console.log(this.otherAssetData)
  }
  getDirectFees()
  {
    return
  }
  getSubscribeData(data) {
    console.log(data);
    console.log(this.variableFeeStructureForm);
    if (data.feeMode == 'FIXED') {
      this.getFixedFee().fees.setValue(data.subscriptionPricing.pricing);
      this.getFixedFee().billingNature.setValue(data.subscriptionPricing.billingNature);
      this.getFixedFee().billEvery.setValue(data.subscriptionPricing.billEvery);
      this.getFixedFee().billingMode.setValue(data.subscriptionPricing.billingMode);
    }
    if (data.feeMode == 'VARIABLE') {
      this.getVariableFee().billingNature.setValue(data.subscriptionPricing.billingNature);
      this.getVariableFee().billEvery.setValue(data.subscriptionPricing.billEvery);
      this.getVariableFee().Duration.setValue(data.subscriptionPricing.billingCycle);
      /*//TODO commented for now*/
      this.getVariableFee().directFees.controls.equity.setValue(data.subscriptionPricing.subscriptionAssetPricingList[0].equityAllocation)
      this.getVariableFee().directFees.controls.debt.setValue(data.subscriptionPricing.subscriptionAssetPricingList[0].equityAllocation)
      this.getVariableFee().directFees.controls.liquid.setValue(data.subscriptionPricing.subscriptionAssetPricingList[0].equityAllocation)
      this.getVariableFee().pricing.setValue(data.subscriptionPricing.pricing);
      this.getVariableFee().otherAssetClassFees.setValue(data.subscriptionPricing.subscriptionAssetPricingList[0].subscriptionSubAssets);
      this.otherAssetData = data.subscriptionPricing.subscriptionAssetPricingList[0].subscriptionSubAssets;
      this.otherAssetData.forEach(element => {
        if (element.selected == true) {
          this.selectedOtherAssets.push(element);
        }
      });
    }
    this.modifyFeeData = data;
  }

  setValidation(flag) {
    this.isBillValid = flag;
    this.mutualFundFees = flag;
    this.isFeeValid = flag;
    // this.otherAssetData = flag
  }

  Close(state) {
    this.ngOnInit();
    (this.ModifyFeesChange == 'createSub') ? this.subInjectService.rightSliderData(state) : this.subInjectService.rightSideData(state),
      (this.ModifyFeesChange === 'modifyFees') ? this.subInjectService.rightSliderData(state) :
        this.subInjectService.rightSideData(state);

        this.variableFeeStructureForm.reset();
        this.fixedFeeStructureForm.reset();

  }

  getFixedFee() {
    return this.fixedFeeStructureForm.controls;
  }

  getVariableFee() {
    return this.variableFeeStructureForm.controls;
  }

  select(assetData) {
    (assetData.selected) ? this.unselectAssets(assetData) : this.selectAssets(assetData);
  }

  selectAssets(data) {
    console.log(data);
    data.selected = true;
    this.selectedOtherAssets.push(parseInt(data.value));
  }

  unselectAssets(data) {
    data.selected = false;
    _.remove(this.selectedOtherAssets, delData => {
      return delData.id == data.id;
    });
  }

  saveVariableModifyFees() {
    if (this.getVariableFee().billEvery.invalid) {
      this.isBillValid = true;
      return;
    } else if (this.getVariableFee().pricing.invalid) {
      this.pricing = true;
      return;
    } else if (this.selectedOtherAssets.length == 0) {
      this.pricing = true;
      return;
    } else {
      this.variableData = {
        subscriptionId: 12,
        billingNature: this.getVariableFee().billingNature.value,
        billingMode: 1,
        billEvery: this.getVariableFee().billEvery.value,
        subscriptionAssetPricingList: [
          {
            directRegular: 1,
            assetClassId: 1,
            equityAllocation: 0.75,
            debtAllocation: 0.25,
            liquidAllocation: 0.25
          }, {
            directRegular: 2,
            assetClassId: 1,
            equityAllocation: 0.75,
            debtAllocation: 0.25,
            liquidAllocation: 0.25
          }, {
            assetClassId: 2,
            pricing: 1.0,
            subscriptionSubAssets: [
              {
                subAssetClassId: 1
              }, {
                subAssetClassId: 3
              }
            ]
          }
        ]
      };
      if(this.createSubData)
      {
        console.log(this.variableData);
        this.subInjectService.addSingleProfile(this.variableData)
      }
    }
  }

  saveFixedModifyFees() {

    if (this.getFixedFee().fees.invalid) {
      this.isFeeValid = true;
      return;
    } else if (this.getFixedFee().billEvery.invalid) {
      this.isBillValid = true;
      return;
    } else {
      const obj = {
        autoRenew: 0,
        billEvery: this.getFixedFee().billEvery.value,
        billingCycle: 1,
        billingMode: this.getFixedFee().billingMode.value,
        billingNature: this.getFixedFee().billingNature.value,
        feeTypeId: 1,
        pricingList: [
          {
            pricing: this.getFixedFee().fees.value,
            assetClassId: 1
          }
        ]
      };
      console.log('fixed fees', obj);
    }
     
  }
}
