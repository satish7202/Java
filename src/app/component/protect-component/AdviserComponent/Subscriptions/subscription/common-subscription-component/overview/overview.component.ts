import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UpperSliderComponent } from '../upper-slider/upper-slider.component';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private upper:UpperSliderComponent) { }

  ngOnInit() {
    // $("#myRightSidenav").css("width","");
    }
  
openNav() {
  
      this.upper.open();    
          }
}
