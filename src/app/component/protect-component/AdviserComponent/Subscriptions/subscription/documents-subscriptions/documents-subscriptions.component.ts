import { Component, OnInit } from '@angular/core';
import { SubscriptionComponent } from '../subscription.component';

export interface PeriodicElement {
  name: string;
  docname:string;
  plan:string;
  servicename:string;
  cdate:string;
  sdate: string;
  clientsign: string;
  status:string;
} 
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Neelam Singh',docname: 'Scope of work', plan: 'Starter plan', servicename: 'AUM Linked fee', cdate: '25/08/2019', sdate: '25/08/2019', clientsign: '25/08/2019',status:'READY TO SEND'},
   
];
@Component({
  selector: 'app-documents-subscriptions',  
  templateUrl: './documents-subscriptions.component.html',
  styleUrls: ['./documents-subscriptions.component.scss']
})
export class DocumentsSubscriptionsComponent implements OnInit {

  constructor(private sub:SubscriptionComponent) { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['name','docname','plan', 'servicename', 'cdate','sdate','clientsign','status','icons'];
  dataSource = ELEMENT_DATA;

  leftDocument()
 {
  this.sub.rightBar();
 }
}
