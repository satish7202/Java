import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { EventService } from 'src/app/Data-service/event.service';
import { FormBuilder } from '@angular/forms';
import { SubscriptionService } from '../../../subscription.service';

@Component({
  selector: 'app-payee-settings',
  templateUrl: './payee-settings.component.html',
  styleUrls: ['./payee-settings.component.scss']
})
export class PayeeSettingsComponent implements OnInit {

  settingsModal;
  payeeSettingsForm;
  constructor(private fb: FormBuilder, public subInjectService: SubscriptionInject, private eventService: EventService, private subService: SubscriptionService) {
    // this.eventService.rightSliderData.subscribe(
    //   data =>this.getRightSliderData(data)
    // )
    this.subInjectService.rightSideBarData.subscribe(
      data => this.getClientPayeeSettings(data)
    )
  }
  getClientPayeeSettings(data) {

    console.log("payee data", data);
    this.payeeSettingsForm = this.fb.group({
      customerName: [data.name],
      displayName: [data.companyDisplayName],
      customerType: [data.customerType],
      companyName: [data.companyName],
      emailId: [data.email],
      mobileNo: [],
      pan: [data.pan],
      gstTreatment: [data.gstTreatment],
      gstIn: [data.gstin],
      billingAddress: [data.billerAddress],
      city: [data.city],
      state: [data.state],
      country: [data.country],
      pincode: [data.zipCode]
    })
  }
  getRightSliderData(data) {
    this.settingsModal = data;
  }
  ngOnInit() {
  }
  Close(state) {
    this.subInjectService.rightSliderData(state)
    this.subInjectService.rightSideData(state);
  }
  savePayeeSettings() {
    let obj = {
      "gstin": this.payeeSettingsForm.controls.gstIn.value,
      "gstTreatmentId": 1,
      "email": this.payeeSettingsForm.controls.emailId.value,
      "customerTypeId": 1,
      "primaryContact": this.payeeSettingsForm.controls.mobileNo.value,
      "companyName": this.payeeSettingsForm.controls.companyName.value,
      "companyDisplayName": this.payeeSettingsForm.controls.displayName.value,
      "billerAddress": this.payeeSettingsForm.controls.billingAddress.value,
      "city": this.payeeSettingsForm.controls.city.value,
      "state": this.payeeSettingsForm.controls.state.value,
      "country": this.payeeSettingsForm.controls.country.value,
      "zipCode": this.payeeSettingsForm.controls.pincode.value,
      "clientId": 2735
    }
    this.subService.addClientBillerProfile(obj).subscribe(
      data => console.log("client biller Profile", data)
    )
    let obj1 =
    {
      "city": this.payeeSettingsForm.controls.city.value,
      "clientBillerId": 0,
      "companyDisplayName": this.payeeSettingsForm.controls.displayName.value,
      "companyName": this.payeeSettingsForm.controls.companyName.value,
      "country": this.payeeSettingsForm.controls.country.value,
      "currency": "string",
      "customerTypeId": 0,
      "email":this.payeeSettingsForm.controls.emailId.value,
      "gstTreatmentId": 0,
      "gstin": this.payeeSettingsForm.controls.gstIn.value,
      "payeeTypeId": 0,
      "paymentTermsId": 0,
      "primaryContact":  this.payeeSettingsForm.controls.mobileNo.value,
      "state": this.payeeSettingsForm.controls.state.value,
      "zipCode": this.payeeSettingsForm.controls.pincode.value
    }
    this.subService.editPayeeSettings(obj1).subscribe(
      data => console.log("edit payee settings", data)
    )
  }
}
