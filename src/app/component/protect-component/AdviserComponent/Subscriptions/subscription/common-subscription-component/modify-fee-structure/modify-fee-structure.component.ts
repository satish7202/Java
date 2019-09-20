import { Component, OnInit } from '@angular/core';
import { SubscriptionComponent } from '../../subscription.component';
@Component({
  selector: 'app-modify-fee-structure',
  templateUrl: './modify-fee-structure.component.html',
  styleUrls: ['./modify-fee-structure.component.scss']
})
export class ModifyFeeStructureComponent implements OnInit {

  constructor(public subscription:SubscriptionComponent) { }

  ngOnInit() {
  }
  Close()
  {
    this.subscription.currentState='close';

  }
}
