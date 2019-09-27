import { Component, OnInit, Input } from '@angular/core';
import { InvoicesSubscriptionComponent } from '../invoices-subscription.component';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "ICICI Top 100 fund - weekly dividend plan regular", name: 'Liquid', weight: "47,240", symbol: '12,000'},
  {position: "DSP Equity Fund", name: 'Liquid', weight: "36,005", symbol: '1,400'},
 
];


@Component({
  selector: 'app-invoice-pdf-document',
  templateUrl: './invoice-pdf-document.component.html',
  styleUrls: ['./invoice-pdf-document.component.scss']
})
export class InvoicePdfDocumentComponent implements OnInit {

  constructor(public invoiveSub:InvoicesSubscriptionComponent) { }
  showRecord;
  @Input() singleInvoiceData;

  ngOnInit() {
    this.showRecord = false;
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  Close()
  {
   this.invoiveSub.showPdfInvoice=false;
  }
  recordPayment()
  {
    this.showRecord = true;
  }
  cancel()
  {
    this.showRecord =false;
  }
}
