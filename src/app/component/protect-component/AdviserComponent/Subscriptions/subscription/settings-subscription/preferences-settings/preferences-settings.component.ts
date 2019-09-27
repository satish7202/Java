import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../../subscription.service';
import { EventService } from 'src/app/Data-service/event.service';
import { subscriptionInject } from '../../../subscription-inject.service';
import { ConfirmDialogComponent } from 'src/app/component/protect-component/common-component/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-preferences-settings',
  templateUrl: './preferences-settings.component.html',
  styleUrls: ['./preferences-settings.component.scss']
})
export class PreferencesSettingsComponent implements OnInit {

  constructor(public dialog: MatDialog, private subscription: SubscriptionService, public subInjectService: subscriptionInject, private eventService: EventService) { }
  viewMode = 'tab1';
  advisorId = 2735;
  prefixData;
  showLoader = false;
  billerProfileData;
  ngOnInit() {
    this.viewMode = "tab1";
    this.getProfileBillerData();
  }
  getProfileBillerData() {
    this.subscription.getPreferenceBillerProfile(this.advisorId).subscribe(
      data => this.getProfileBillerDataResponse(data)
    )
  }
  getPrefixData(type) {
    let obj = {
      'advisorId': this.advisorId,
      'type': type
    }
    this.showLoader = true;
    this.subscription.getPreferenceInvoiceQuotations(obj).subscribe(
      data => this.getInvoiceQuotationResponse(data, type)
    )
  }
  savePrefix(data) {
    let obj = {
      "advisorId":2735,
      "id": 0,
      "nextNumber": data.nextNumber,
      "prefix":data.prefix,
      "type": 1
    }

    this.subscription.updatePreferenceInvoiceQuotationsSubscription(obj).subscribe(
      data=>console.log(data)
    )

  }
  getProfileBillerDataResponse(data) {
    console.log("jksdfsdfaksdf", data)
    this.billerProfileData = data;
  }
  getInvoiceQuotationResponse(data, type) {
    this.showLoader = false;
    this.prefixData = data;
  }
  Open(singleProfile, value, state) {

    this.eventService.sidebarData(value)
    this.subInjectService.rightSideData(state);
    this.subInjectService.addSingleProfile(singleProfile);

  }
  deleteModal(value) {
    let dialogData = {
      data: value,
      header: 'DELETE',
      body: 'Are you sure you want to delete the document?',
      body2: 'This cannot be undone',
      btnYes: 'CANCEL',
      btnNo: 'DELETE'
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: dialogData,
      autoFocus: false,

    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }
}
