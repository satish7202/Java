import { Component, OnInit } from '@angular/core';
import { subscriptionInject } from '../../../subscription-inject.service';

@Component({
  selector: 'app-biller-settings',
  templateUrl: './biller-settings.component.html',
  styleUrls: ['./biller-settings.component.scss']
})
export class BillerSettingsComponent implements OnInit {

  constructor(public subInjectService:subscriptionInject) { }

  ngOnInit() {
  }
  Close(value)
  {
    this.subInjectService.rightSideData(value)
  }
}
