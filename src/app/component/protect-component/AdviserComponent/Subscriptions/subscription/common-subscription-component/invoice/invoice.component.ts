import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor() { }
  @Input() invoiceData;
  ngOnInit() {
    console.log(this.invoiceData,"dawfiasfuhusfui")
  }
  Close()
  {
    // this.subRight.showSubscription=true;
  }
}
