import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-consent-tand-c',
  templateUrl: './consent-tand-c.component.html',
  styleUrls: ['./consent-tand-c.component.scss']
})
export class ConsentTandCComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConsentTandCComponent>) { }

  ngOnInit() {
  }
  Close()
  {
    this.dialogRef.close();
  }
u
}
