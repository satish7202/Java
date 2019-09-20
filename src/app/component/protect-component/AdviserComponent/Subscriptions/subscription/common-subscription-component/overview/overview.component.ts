import { Component, OnInit, Output, EventEmitter,Input} from '@angular/core';
import * as $ from 'jquery';
import { UpperSliderComponent } from '../upper-slider/upper-slider.component';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private upper:UpperSliderComponent,public dialogRef:MatDialogRef<OverviewComponent>) { }

   
@Input() componentFlag:string;

  ngOnInit() {
    // $("#myRightSidenav").css("width","");
    }
  
openNav() {
  
      this.upper.open();    
          }
dialogClose(){
    this.dialogRef.close();
  }          
}
