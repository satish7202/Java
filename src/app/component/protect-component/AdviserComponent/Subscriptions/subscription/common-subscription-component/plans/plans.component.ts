import { Component, OnInit,Input} from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<PlansComponent>) { }
  @Input() componentFlag:string;
  ngOnInit() {
  }
  dialogClose(){
    this.dialogRef.close();
  }
}
