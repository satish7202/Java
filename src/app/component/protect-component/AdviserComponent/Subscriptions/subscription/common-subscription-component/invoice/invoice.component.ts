import { Component, OnInit, Input } from '@angular/core';
import { SubscriptionsRightnavComponent } from '../../subscriptions-subscription/subscriptions-rightnav/subscriptions-rightnav.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor(public subRight:SubscriptionsRightnavComponent) { }
  @Input() invoiceData;
  ngOnInit() {
    console.log(this.invoiceData,"dawfiasfuhusfui")
  }
  Close()
  {
    this.subRight.showSubscription=true;
  }
}
