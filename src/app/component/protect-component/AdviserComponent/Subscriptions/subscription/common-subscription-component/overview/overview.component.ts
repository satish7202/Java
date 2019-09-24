import { Component, OnInit, Output, EventEmitter,Input} from '@angular/core';
import * as $ from 'jquery';
import { UpperSliderComponent } from '../upper-slider/upper-slider.component';
import { MatDialogRef } from '@angular/material';
import { subscriptionInject } from '../../../subscription-inject.service';
import { EventService } from 'src/app/Data-service/event.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(public subInjectService:subscriptionInject,private eventService:EventService,private upper:UpperSliderComponent,public dialogRef:MatDialogRef<OverviewComponent>) { }

   
@Input() componentFlag:string;

  ngOnInit() {
    // $("#myRightSidenav").css("width","");
    }
  
openNav() {
  
      // this.upper.open();    
          }
dialogClose(){
    this.dialogRef.close();
  }  
  openPlanSliderBlank(value,state)
  { 
    this.eventService.sliderData(value);
    this,this.subInjectService.rightSliderData(state)
  }    
  openPlanSliderQuotation(value,state)
  { 
    this.eventService.sliderData(value);
    this,this.subInjectService.rightSliderData(state)
  }      
}
