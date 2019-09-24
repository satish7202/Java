import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.scss']
})
export class CreateSubscriptionComponent implements OnInit {

  @Input() modifyFeeTabChange;
  constructor() { }

  ngOnInit() {
  }

}
