import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as $ from 'jquery';
@Component({
  selector: 'app-upper-slider',
  templateUrl: './upper-slider.component.html',
  styleUrls: ['./upper-slider.component.scss']
})
export class UpperSliderComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<UpperSliderComponent>,
    @Inject(MAT_DIALOG_DATA) public fragmentData: any) { }
  subscriptionType = this.fragmentData;
  ngOnInit() {
    console.log(this.fragmentData)
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
    $("#myRightSidenav").css("width", "60%");

  }


}
