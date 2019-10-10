import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Data-service/event.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SubscriptionInject } from '../subscription-inject.service';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        left: '40%'
      })),
      state('openHelp', style({
        left: '65%',
        width:'35%'
      })),
      state('close', style({
        // width:'0%'
        left: '100%'
      })),
      transition('close => open', [animate('0.3s')]),
      transition('open => close', [animate('0.1s')]),
      transition('close => openHelp', [animate('0.3s')]),
      transition('openHelp => close', [animate('0.1s')])
    ])
  ]
})
export class SubscriptionComponent implements OnInit {
  constructor(private eventService: EventService, private subinject: SubscriptionInject) {
    this.eventService.sidebarSubscribeData.subscribe(
      data => this.getFileResponseDataAum(data)
    );
    this.eventService.tabChangeData.subscribe(
      data => this.getTabChangeData(data)
    );
    this.subinject.rightSideBarData.subscribe(
      data => this.getRightSliderData(data)
    );
  }

  currentState;
  subscriptionTab;

  selected: any;
  ngOnInit() {
    this.currentState = 'close';
    // this.selected = 6;
  }

  getFileResponseDataAum(data) {
    this.subscriptionTab = data;
  }
  getTabChangeData(data) {
    this.selected = data;
  }
  getRightSliderData(value) {
    this.currentState = value;
  }


  /*rightBar() {
    this.currentState = 'open';
  }
  rightBarHelp() {
    this.currentState = 'openHelp';
  }*/
  tabClick(event) {
    this.subscriptionTab = event.tab.textLabel;
  }
  help() {

  }
}
