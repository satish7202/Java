import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  service: string;
  amt: string;
  type: string;
  subs: string;
  status:string;
  date:string;
  bdate:string;
  ndate:string;
  mode:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {service: "Financial Planning", amt: "Rs.1,00,000/Quarter", type: "FIXED", subs: 'SUB-0001',status:"LIVE",date:"25/08/2019",bdate:"25/08/2019",ndate:"25/08/2019",mode:"Cheque"},
  {service: "Investment management - AUM Linked fee", amt: "View details", type: "VARIABLE", subs: '-',status:"FUTURE",date:"25/08/2019",bdate:"-",ndate:"25/08/2019",mode:"Auto debit"},
  {service: "Investment management - AUM Linked fee", amt: "View details", type: "VARIABLE", subs: '-',status:"NOT STARTED",date:"START",bdate:"-",ndate:"25/08/2019",mode:"NEFT/RTGS"},
 
];
@Component({
  selector: 'app-subscriptions-upper-slider',
  templateUrl: './subscriptions-upper-slider.component.html',
  styleUrls: ['./subscriptions-upper-slider.component.scss']
})
export class SubscriptionsUpperSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['service', 'amt', 'type', 'subs','status','date','bdate','ndate','mode','icons'];
  dataSource = ELEMENT_DATA;
}
