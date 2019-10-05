import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-preference-email-invoice',
  templateUrl: './preference-email-invoice.component.html',
  styleUrls: ['./preference-email-invoice.component.scss']
})
export class PreferenceEmailInvoiceComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PreferenceEmailInvoiceComponent>,@Inject(MAT_DIALOG_DATA) public fragmentData: any) { }
  ngOnInit() {
    console.log(this.fragmentData)
  }
  dialogClose() {
    this.dialogRef.close();
  }

}
