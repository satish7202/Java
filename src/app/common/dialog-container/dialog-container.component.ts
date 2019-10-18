import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {EventService} from '../../Data-service/event.service';
import {SubscriptionInject} from '../../component/protect-component/AdviserComponent/Subscriptions/subscription-inject.service';

@Component({
  selector: 'app-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.scss'],
  animations: [trigger('dialogContainer', [
    state('open', style({
      'z-index': 10
    })),
    state('openHelp', style({
      // left: '0%',
      'z-index': 10
// width: '35%'
    })),
    state('close', style({
      // width:'0%'
      // left: '100%'
      'z-index': -1

    })),
    // transition('close => open', [animate('0.3s')]),
    // transition('open => close', [animate('0.1s')]),
    // transition('close => openHelp', [animate('0.3s')]),
    // transition('openHelp => close', [animate('0.1s')])
  ]), trigger('openClose', [
    state('open', style({
      left: '40%'
    })),
    state('openHelp', style({
      left: '65%',
      // width: '35%'
    })),
    state('close', style({
      // width:'0%'
      left: '100%'
    })),
    transition('close => open', [animate('0.3s')]),
    transition('open => close', [animate('0.1s')]),
    transition('close => openHelp', [animate('0.3s')]),
    transition('openHelp => close', [animate('0.1s')])
  ]),
    trigger('dialogContainerBackground', [
      state('open', style({
        // opacity: 0.5
        'background-color': '#66808080',

      })),
      state('openHelp', style({
        'background-color': '#66808080',
        // opacity: 0.5

      })),
      state('close', style({
        // opacity: 0
        'background-color': '#66808080',

      })),
      // transition('close => open', [animate('0.3s')]),
      // transition('open => close', [animate('0.1s')]),
      // transition('close => openHelp', [animate('0.3s')]),
      // transition('openHelp => close', [animate('0.1s')])
    ])]
})
export class DialogContainerComponent implements OnInit {

  selectedSubscriptionTab: any;

  constructor(private eventService: EventService, private subinject: SubscriptionInject) {
    this.eventService.overlayVisibleData.subscribe(
      data => {
        this.isOverlayVisible = data;
      }
    );
    this.subinject.rightSideBarData.subscribe(
      data => this.getRightSliderData(data)
    );
    this.eventService.sidebarSubscribeData.subscribe(
      data => this.getFileResponseDataAum(data)
    );
    this.eventService.tabChangeData.subscribe(
      data => this.getSubscriptionTabChangeData(data)
    );
  }

  isOverlayVisible;
  currentState;
  subscriptionTab;
  dialogState;

  ngOnInit() {
  }

  getRightSliderData(value) {
    if (value === 'close') {
      this.currentState = value;
      setTimeout(() => {
        this.dialogState = value;
      }, 300);
      // this.eventService.changeOverlayVisible(false);
    } else {
      this.dialogState = value;
      setTimeout(() => {
        this.currentState = value;
      }, 300);
      // this.eventService.changeOverlayVisible(true);
    }

    this.dialogState = value;

    this.currentState = value;
  }

  getFileResponseDataAum(data) {
    this.subscriptionTab = data;
  }

  getSubscriptionTabChangeData(data) {
    this.selectedSubscriptionTab = data;
  }

}
