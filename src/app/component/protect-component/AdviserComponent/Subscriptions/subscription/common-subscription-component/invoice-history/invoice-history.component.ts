import { Component, OnInit } from '@angular/core';
import { SubscriptionComponent } from '../../subscription.component';


export interface PeriodicElement {
  date: string;
  invoice: string;
  status: string;
  ddate: string;
  amount:string;
  balance:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {date: '26/08/2019', invoice: 'INV-19-20-103001', status: 'OVERDUE', ddate: '05/09/2019',amount:'Rs.20,000',balance:'Rs.20,000'},
  {date: '28/08/2019', invoice: 'INV-19-20-103012', status: 'PAID', ddate: '05/09/2019',amount:'Rs.1,20,000',balance:'Rs.0'},
  {date: '29/08/2019', invoice: 'INV-19-20-103001', status: 'SENT', ddate: '05/09/2019',amount:'Rs.7,000',balance:'Rs.7,000'},
 
];
@Component({
  selector: 'app-invoice-history',
  templateUrl: './invoice-history.component.html',
  styleUrls: ['./invoice-history.component.scss']
})
export class InvoiceHistoryComponent implements OnInit {

  constructor(public subscription:SubscriptionComponent) { }
  displayedColumns: string[] = ['date', 'invoice', 'status', 'ddate','amount','balance'];
  dataSource = ELEMENT_DATA;
  showSubscription;
  invoiceData;
  

  ngOnInit() {
    this.showSubscription=true;
  }
  showInvoice(value)
  {
    this.invoiceData=value;
    console.log(this.invoiceData)
    this.showSubscription=false;
    
  }
  Close()
  {
    this.subscription.currentState='close';

  }}
