import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  headerData: any;
  bodyData: any;
  btn1NoData: any;
  btn2YesData: any;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any) { }

  ngOnInit() {
    console.log(this.dialogData);
     this.headerData=this.dialogData.header;
     this.bodyData=this.dialogData.body;
      this.btn1NoData=this.dialogData.btnNo;
     this.btn2YesData=this.dialogData.btnYes
  }

}
