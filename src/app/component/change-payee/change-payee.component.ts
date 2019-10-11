import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../protect-component/AdviserComponent/Subscriptions/subscription-inject.service';
import { SubscriptionService } from '../protect-component/AdviserComponent/Subscriptions/subscription.service';

@Component({
  selector: 'app-change-payee',
  templateUrl: './change-payee.component.html',
  styleUrls: ['./change-payee.component.scss']
})
export class ChangePayeeComponent implements OnInit {

  constructor(public subInjectService: SubscriptionInject,private subService:SubscriptionService) { }

  ngOnInit() {
  }
  Close(state)
  {
    this.subInjectService.rightSideData(state)
    this.subInjectService.rightSliderData(state)
  }
}
