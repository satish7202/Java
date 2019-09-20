import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SubscriptionComponent } from '../../subscription.component';
@Component({
  selector: 'app-upper-slider',
  templateUrl: './upper-slider.component.html',
  styleUrls: ['./upper-slider.component.scss']
})
export class UpperSliderComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<UpperSliderComponent>,
    @Inject(MAT_DIALOG_DATA) public fragmentData: any) { }
  subscriptionType 
  ngOnInit() {
    console.log('fsdfsdffsafsdf',this.fragmentData)
    this.subscriptionType= this.fragmentData;
  }

  Flag = 'planOverview';
  plan='planServices';
  documents ='plansDocuments';
  plans='servicesPlans';
  clientDocuments ='clientDocuments';
  servicesDocuments='servicesDocuments'
  dialogClose(){
    this.dialogRef.close();
  }
  open() {
    // this.subscription.currentState='open';
  }


}
