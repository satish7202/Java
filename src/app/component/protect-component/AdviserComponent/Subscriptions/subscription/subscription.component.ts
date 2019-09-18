import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
   subscriptionTab;
  leftBar()
  {
    $("#myRightSidenav").css("width","60%");
    // $('#ui-subscriptions').addClass('blur')
  }
  tabClick(event)
  {
    this.subscriptionTab=event.tab.textLabel;
  }
  help(){
    $("#myRightSidenav").css("width","35%");
  }
}
