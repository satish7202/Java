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
  constructor(private eventService:EventService) {
    this.eventService.sidebarSubscribeData.subscribe(
      data => this.getFileResponseDataAum(data)
     )
   }
  ngOnInit() {

        }

   getFileResponseDataAum(data){
        console.log(data)
        this.subscriptionTab=data;
        this.rightBar();
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
