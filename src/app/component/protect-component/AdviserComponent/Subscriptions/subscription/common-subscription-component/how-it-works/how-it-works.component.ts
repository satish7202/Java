import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<HowItWorksComponent>) { }

  ngOnInit() {
  }
  dialogClose() {
    this.dialogRef.close();
  }
}
