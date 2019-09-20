import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Data-service/event.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        width:'60%'
      })),
      state('close',style({
        width:'0%'
      })),
      transition('close => open',[animate('0.3s')]),
      transition('open => close',[animate('0.1s')]) 
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
    this.currentState='open';   
  }
  tabClick(event)
  {
    console.log(event)
    this.subscriptionTab = event.tab.textLabel;
  }
  help(){
   
  }
}
