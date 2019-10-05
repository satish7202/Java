import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';

@Component({
  selector: 'app-email-quotation',
  templateUrl: './email-quotation.component.html',
  styleUrls: ['./email-quotation.component.scss']
})
export class EmailQuotationComponent implements OnInit {

  constructor(public subInjectService:SubscriptionInject) { }
  showSent='false';
  ngOnInit() {
    this.showSent='false';
  }
  Close(state)
  {
    this.subInjectService.rightSliderData(state)
        this.showSent='false';

  }
  closeTab(state,value)
  {
    console.log(state)
    this.subInjectService.rightSliderData(state)
    this.subInjectService.closeSlider(value)
  }
  sentMail()
  {
    this.showSent='true';
  }
}
