import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  date:string;
  invoicenum:string;
  name: string;
  email: string;
  status:string;
  duedate: string;
  amt: string;
  balance:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {date: '26/08/2019',invoicenum: 'INV-19-20-103001',name: 'Drasti Zaveri', email: 'drasti@futurewise.co.in', status: 'OVERDUE', duedate: '05/09/2019', amt: '05/09/2019', balance: 'Rs.20,000'},
  {date: '28/08/2019',invoicenum: 'INV-19-20-103012',name: 'Ajaykumar', email: 'ronak.hindocha@futurewise.co.in', status: 'PAID', duedate: '05/09/2019', amt: '05/09/2019', balance: '0'},
  {date: '29/08/2019',invoicenum: 'INV-19-20-103024',name: 'Sarvesh Shinde', email: 'sarvesh@gmail.com', status: 'SENT', duedate: '05/09/2019', amt: '05/09/2019', balance: 'Rs.7,000'},
 
];

@Component({
  selector: 'app-invoices-subscription',
  templateUrl: './invoices-subscription.component.html',
  styleUrls: ['./invoices-subscription.component.scss']
})
export class InvoicesSubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['checkbox','date','invoicenum','name','status','email', 'duedate', 'amt','balance'];
  dataSource = ELEMENT_DATA;
  
}
