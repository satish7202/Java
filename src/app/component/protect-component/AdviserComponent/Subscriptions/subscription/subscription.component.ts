<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';

=======
import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { EventService } from 'src/app/Data-service/event.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
>>>>>>> Stashed changes
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  animations: [
    trigger('changeState', [
      state('open', style({
        width:'60%'
      })),
      state('close', style({
        width:'0%'
      })),
      transition('close=>open', animate('300ms')),
      transition('open=>close', animate('200ms'))
    ])
  ]
})
export class SubscriptionComponent implements OnInit {
<<<<<<< Updated upstream
  constructor() { }
  ngOnInit() {
=======
  @Input() currentState;;
  ngOnInit() {
    this.currentState='close';
  }
  subscriptionTab;
  selected: any;
  constructor(private eventService:EventService) {
    this.eventService.sidebarSubscribeData.subscribe(
      data => this.getFileResponseDataAum(data)
     )
     this.eventService.tabChangeData.subscribe(
      data => this.gettabChangeData(data)
     )
   }
   getFileResponseDataAum(data){
        console.log(data)
        this.subscriptionTab=data;
        this.rightBar();
   }
   gettabChangeData(data){
     console.log(data)
     if(data === 'client'){
       this.selected = 1;
     }
  }
  
   
  rightBar()
  {
    $("#myRightSidenav").css("width","60%");
  }
  tabClick(event)
  {
    console.log(event)
    this.subscriptionTab = event.tab.textLabel;
  }
  help(){
    $("#myRightSidenav").css("width","35%");
>>>>>>> Stashed changes
  }
}
