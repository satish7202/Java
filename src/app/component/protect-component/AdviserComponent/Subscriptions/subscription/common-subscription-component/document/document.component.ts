import { Component, OnInit,Input } from '@angular/core';
import { UpperSliderComponent } from '../upper-slider/upper-slider.component';
import * as $ from 'jquery';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DocumentComponent>) { }
  @Input() componentFlag:string;
  ngOnInit() {
    
  }
  dialogClose(){
    this.dialogRef.close();
  }

}
