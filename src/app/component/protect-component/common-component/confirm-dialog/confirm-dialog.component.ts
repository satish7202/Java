import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  headerData: any;
  bodyData: any;
  bodyData2:any;
  btn1NoData: any;
  btn2YesData: any;
  data:any;
  @Input()
  public positiveMethod: Function;
  @Input()
  public negativeMethod: Function;
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any) { }

  ngOnInit() {
    console.log(this.dialogData);
     this.headerData=this.dialogData.header;
     this.bodyData=this.dialogData.body;
     this.bodyData2=this.dialogData.body2;
     this.btn1NoData=this.dialogData.btnNo;
     this.btn2YesData=this.dialogData.btnYes
     this.data=this.dialogData.data;
  }

  clickButton1(){
  if(this.dialogData.positiveMethod!=undefined){
    this.dialogData.positiveMethod();
  }else{
    console.log("positiveMethod not defined 11111111111111111111111111111111111111111111");

  }
  }
  clickButton2(){
    if(this.dialogData.negativeMethod){
      this.dialogData.negativeMethod();
    }else{
      console.log("negative not defined 11111111111111111111111111111111111111111111");

    }
  }
}
