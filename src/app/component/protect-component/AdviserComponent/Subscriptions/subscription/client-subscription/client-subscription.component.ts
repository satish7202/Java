import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  email: string;
  num: number;
  balance: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Drasti Zaveri', email: 'drasti@futurewise.co.in', num: 9987455665, balance: 'Rs.20,000'},
  {name: 'Ajaykumar', email: 'ronak.hindocha@futurewise.co.in', num: 9987455665, balance: '0'},
  {name: 'Sarvesh Shinde', email: 'sarvesh@gmail.com', num: 9987455665, balance: 'Rs.7,000'},
 
];


@Component({
  selector: 'app-client-subscription',
  templateUrl: './client-subscription.component.html',
  styleUrls: ['./client-subscription.component.scss']
})
export class ClientSubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['name','email', 'num', 'balance'];
  dataSource = ELEMENT_DATA;
}
