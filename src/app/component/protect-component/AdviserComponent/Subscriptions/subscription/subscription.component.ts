import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Data-service/event.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { from } from 'rxjs';
import { subscriptionInject } from '../subscription-inject.service';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        left:'40%'   
      })),
      state('openHelp',style({
        // width:'35%'
      })),
      state('close',style({
        // width:'0%'
        left:'100%'
      })),
      transition('close => open',[animate('0.3s')]),
      transition('open => close',[animate('0.1s')]), 
      transition('close => openHelp',[animate('0.3s')]),
      transition('openHelp => close',[animate('0.1s')]) 
    ])
  ]
})
export class SubscriptionComponent implements OnInit {
  
  currentState;
  ngOnInit() {
   this.currentState='close'
  }
  subscriptionTab;
  
  selected: any;
  constructor(private eventService:EventService,private subinject:subscriptionInject) {
    this.eventService.sidebarSubscribeData.subscribe(
      data => this.getFileResponseDataAum(data)
     )
     this.eventService.tabChangeData.subscribe(
      data => this.gettabChangeData(data)
     )
     this.subinject.rightSideBarData.subscribe(
       data =>this.getRightSliderData(data)
     )
   }

   getFileResponseDataAum(data){
        console.log(data)
        this.subscriptionTab=data;
        if(data =='clientHelp' || data=='documentHelp'){
        this.rightBarHelp(); 
        }else{
        this.rightBar();
        }
   }
   gettabChangeData(data){
     console.log(data)
   this.selected=data;
  }
  getRightSliderData(value)
  {
    this.currentState=value
    console.log(value)
  }
  
   
  rightBar()
  {
    this.currentState='open';   
  }
  rightBarHelp()
  {
    this.currentState='openHelp';
  }
  tabClick(event)
  {
    console.log(event)
    this.subscriptionTab = event.tab.textLabel;
  }
  help(){
   
  }
}
