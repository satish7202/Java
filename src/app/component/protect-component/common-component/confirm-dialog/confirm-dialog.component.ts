import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SubscriptionService } from '../../AdviserComponent/Subscriptions/subscription.service';
import { UpperSliderComponent } from '../../AdviserComponent/Subscriptions/subscription/common-subscription-component/upper-slider/upper-slider.component';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  headerData: any;
  bodyData: any;
  bodyData2: any;
  btn1NoData: any;
  btn2YesData: any;
  data: any;
  advisorId = 2735;
  @Input()
  public positiveMethod: Function;
  @Input()
  public negativeMethod: Function;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any, private subscription: SubscriptionService,public dialogUppRef: MatDialogRef<UpperSliderComponent>) {
  }

  ngOnInit() {
    console.log(this.dialogData);
    this.headerData = this.dialogData.header;
    this.bodyData = this.dialogData.body;
    this.bodyData2 = this.dialogData.body2;
    this.btn1NoData = this.dialogData.btnNo;
    this.btn2YesData = this.dialogData.btnYes;
    this.data = this.dialogData.data;
  }

  clickButton2() {
    if (this.dialogData.negativeMethod != undefined) {
      this.dialogData.negativeMethod();
    } else {
      console.log('negative not defined 11111111111111111111111111111111111111111111');

    }
  }

  deleteSubscription() {
    if (this.dialogData.positiveMethod) {
      this.dialogData.positiveMethod();
    } else {
      console.log('positive not defined 11111111111111111111111111111111111111111111');

    }
    if(this.dialogData.data=="SUBSCRIPTION")
    {
      this.subscription.deleteSubscriptionData(this.advisorId).subscribe(
        data => this.deletedData(data)
      )
    }
    if (this.dialogData.data == "PLAN") {
      let obj = {
        'advisorId': 12345,
        'planId': this.dialogData.planData.id
      }
      this.subscription.deleteSubscriptionPlan(obj).subscribe(
        data => this.deletedData(data)
      )
    }
  }
  deletedData(data) {
    this.dialogUppRef.close();
  }
}
