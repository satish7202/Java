import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { EventService } from 'src/app/Data-service/event.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubscriptionService } from '../../../subscription.service';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.scss']
})
export class CreateSubscriptionComponent implements OnInit {

  @Input() modifyFeeTabChange;
  @ViewChild('stepper') stepper: MatStepper;
  feeStructureData;
  clientData;
  feeMode;
  billersData;
  payeesData;
  constructor(public subInjectService: SubscriptionInject, private eventService: EventService, private fb: FormBuilder, private subService: SubscriptionService) {
    this.subInjectService.singleProfileData.subscribe(
      data => this.getSubStartDetails(data)
    )
  }

  ngOnInit() {
    this.stepper.selectedIndex=0
  }
  goForward(stepper: MatStepper) {
    this.stepper.next();
  }
  subscriptionDetails = this.fb.group({
    subscription: [, [Validators.required]],
    activationDate: [, [Validators.required]],
    invoiceSendingMode: [1, [Validators.required]],
    feeCollectionMode: [, [Validators.required]],
    dueDateFrequency: [, [Validators.required]]
  })
  feeStructureForm=this.fb.group({
    feeStructure:['',[Validators.required]]
  })
  billerSetting=this.fb.group({
    billerSetting:['',[Validators.required]]
  })
  payeeSetting=this.fb.group({
    payeeSetting:['',[Validators.required]]
  })
  create=this.fb.group({
    create:['',[Validators.required]]
  })
  getSubStartDetails(data) {
    this.clientData = data
    let obj = {
      "advisorId": 2808,
      "clientId": data.clientId,
      "subId": data.id
    }
    this.subService.getSubscriptionStartData(obj).subscribe(
      data => this.getSubStartDetailsResponse(data)
    )

  }
  select(data)
  {
   (data.selected==0)?data.selected=1:data.selected=0
  }
  getSubStartDetailsResponse(data) {
    console.log(data)
    this.feeStructureData = data;
    this.subscriptionDetails.controls.subscription.setValue(data.subscriptionNo)
    this.billersData = data.billers
    this.payeesData = data.payees
  }
  feeStructure = this.fb.group({

  })
  Close(state) {
    this.subInjectService.rightSideData(state);
    this.subInjectService.rightSliderData(state);
    this.stepper.selectedIndex=0

  }

  startSubscsription() {
    let obj = {
      "id": 1,
      "advisorId": 2808,
      "billerProfileId": 1,
      "clientBillerProfiles": [
        {
          "id": 5,
          "share": 50
        },
        {
          "id": 6,
          "share": 50
        }
      ],
      "clientId": 2970,
      "dueDateFrequency": 30,
      "startsOn": "2019-10-16",
      "fromDate": "2019-10-16T13:54:25.983Z",
      "subscriptionNumber": "SUB-123",
      "feeMode": 1,
      "Status": 1,
      "subscriptionPricing": {
        "autoRenew": 0,
        "billEvery": 0,
        "billingCycle": 0,
        "billingMode": 0,
        "billingNature": 0,
        "feeTypeId": 0,
        "id": 0,
        "pricing": 0,
        "subscriptionAssetPricingList": [
          {
            "assetClassId": 0,
            "debtAllocation": 0,
            "directRegular": 0,
            "equityAllocation": 0,
            "id": 0,
            "liquidAllocation": 0,
            "pricing": 0,
            "subscriptionPricingId": 0,
            "subscriptionSubAssets": [
              {
                "id": 0,
                "isActive": 0,
                "selected": true,
                "subAssetClassId": 0,
                "subAssetClassName": "string",
                "subscriptionAssetPricingId": 0
              }
            ]
          }
        ]
      }
    }
  }

}
