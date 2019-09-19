import { Component, OnInit,Input} from '@angular/core';
import { UpperSliderComponent } from '../upper-slider/upper-slider.component';
@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  constructor(private upper:UpperSliderComponent) { }
  @Input() componentFlag:string;
  ngOnInit() {
  }

}
