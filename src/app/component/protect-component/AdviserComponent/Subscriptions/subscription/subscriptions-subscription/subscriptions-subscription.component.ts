import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-subscriptions-subscription',
  templateUrl: './subscriptions-subscription.component.html',
  styleUrls: ['./subscriptions-subscription.component.scss']
})
export class SubscriptionsSubscriptionComponent implements OnInit {
  
  PeriodicElemen = [
    {client: 'Abhishek Mane',service: 'Financial Planning',amt: 'Rs.1,00,000/Q', sub: 'SUB-0001', status: 'LIVE', activation: '25/08/2019', lastbilling: '25/08/2019', nextbilling: '25/08/2019',feemode:'Cheque'},
    {client: 'Ronak Hasmuk Hindocha',service: 'Investment management - AUM Linked fee',amt: 'View details', sub: '-', status: 'FUTURE', activation: '15/09/2019', lastbilling: '-', nextbilling: '15/09/2019',feemode:'Auto debit'},
    {client: 'Aman jain',service: 'Investment management - AUM Linked fee',amt: 'View details', sub: '-', status: 'NOT STARTED', activation: '-', lastbilling: '-', nextbilling: '-',feemode:'NEFT/RTGS'},
  ];
  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['client','service','amt','sub','status','activation', 'lastbilling', 'nextbilling','feemode','icons'];
  dataSource = this.PeriodicElemen;
  
}
