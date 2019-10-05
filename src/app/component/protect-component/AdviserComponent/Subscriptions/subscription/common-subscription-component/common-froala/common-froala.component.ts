import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';

@Component({
  selector: 'app-common-froala',
  templateUrl: './common-froala.component.html',
  styleUrls: ['./common-froala.component.scss']
})
export class CommonFroalaComponent implements OnInit {

  constructor(public subInjectService: SubscriptionInject)  { }

  ngOnInit() {
  }
  Close(value) {
    this.subInjectService.rightSideData(value);
  }
}
