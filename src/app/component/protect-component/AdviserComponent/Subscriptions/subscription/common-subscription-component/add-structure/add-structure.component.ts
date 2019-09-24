import { Component, OnInit } from '@angular/core';

import { SubscriptionComponent } from '../../subscription.component';
import { subscriptionInject } from '../../../subscription-inject.service';
@Component({
  selector: 'app-add-structure',
  templateUrl: './add-structure.component.html',
  styleUrls: ['./add-structure.component.scss']
})
export class AddStructureComponent implements OnInit {

  constructor(private subinject: subscriptionInject) { }

  ngOnInit() {
  }

  closeNav(state) {
    this.subinject.rightSliderData(state)
  }
}
