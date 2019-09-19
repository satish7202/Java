import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { EventService } from 'src/app/Data-service/event.service';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

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
  ngOnInit() {

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
  }
}
