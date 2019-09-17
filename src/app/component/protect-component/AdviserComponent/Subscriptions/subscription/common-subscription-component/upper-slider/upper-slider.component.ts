import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-upper-slider',
  templateUrl: './upper-slider.component.html',
  styleUrls: ['./upper-slider.component.scss']
})
export class UpperSliderComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<UpperSliderComponent>,
    @Inject(MAT_DIALOG_DATA) public fragmentData: any,private user:UserService) { }
    subscriptionType=this.fragmentData;
  ngOnInit() {
    console.log(this.fragmentData)
  }
  Flag = 'planOverview';
  plan='planServices';
  documents ='plansDocuments';
  plans='servicesPlans';
  dialogClose(){
    this.dialogRef.close();
  }
  open() {
    $("#myRightSidenav").css("width","60%");
   
   }

  
}
