import { Component, OnInit } from '@angular/core';

import { SubscriptionComponent } from '../../subscription.component';
@Component({
  selector: 'app-add-structure',
  templateUrl: './add-structure.component.html',
  styleUrls: ['./add-structure.component.scss']
})
export class AddStructureComponent implements OnInit {

  constructor(public subscription:SubscriptionComponent) { }

  ngOnInit() {
  }

  closeNav() {
    this.subscription.currentState='close';

  }
}
