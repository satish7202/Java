import { Component, OnInit } from '@angular/core';
import { SubscriptionComponent } from '../../subscription.component';
import { subscriptionInject } from '../../../subscription-inject.service';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(public subInjectService:subscriptionInject) { }

  ngOnInit() {
  }
  Close(value)
  {
    this.subInjectService.rightSideData(value)
  }

}
