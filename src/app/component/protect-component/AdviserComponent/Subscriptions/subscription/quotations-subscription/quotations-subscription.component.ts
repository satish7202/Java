import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  docname:string;
  plan:string;
  
  cdate:string;
  sdate: string;
  clientsign: string;
  status:string;
} 
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Neelam Singh',docname: 'Scope of work', plan: 'Starter plan',  cdate: '25/08/2019', sdate: '25/08/2019', clientsign: '25/08/2019',status:'READY TO SEND'},
   
];
@Component({
  selector: 'app-quotations-subscription',
  templateUrl: './quotations-subscription.component.html',
  styleUrls: ['./quotations-subscription.component.scss']
})
export class QuotationsSubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['name', 'docname', 'plan', 'cdate','sdate','clientsign','status','icons'];
  dataSource = ELEMENT_DATA;
}
