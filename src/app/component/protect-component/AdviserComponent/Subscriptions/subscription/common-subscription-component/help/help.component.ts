import { Component, OnInit } from '@angular/core';
import { SubscriptionComponent } from '../../subscription.component';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(public subscription:SubscriptionComponent) { }

  ngOnInit() {
  }
  Close()
  {
    this.subscription.currentState='close';
  }

}
