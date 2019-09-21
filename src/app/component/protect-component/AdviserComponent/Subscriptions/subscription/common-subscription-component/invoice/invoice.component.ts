import { Component, OnInit, Input } from '@angular/core';
import { subscriptionInject } from '../../../subscription-inject.service';
export interface PeriodicElement {
  document: string;
  plan: string;
  date: string;
  sdate: string;
  cdate: string;
  status:string;
 } 
 const ELEMENT_DATA: PeriodicElement[] = [
  {document: "Scope of work", plan: 'Starter plan', date: "25/08/2019", sdate: '25/08/2019',cdate: '25/08/2019',status:'READY TO SEND'},
  
];

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor(public subInjectService:subscriptionInject) { }
  @Input() invoiceData;
  ngOnInit() {
  
  }
  Close(state)
  {
    this.subInjectService.rightSliderData(state)
  }
  displayedColumns: string[] = ['checkbox','document','plan', 'date', 'sdate','cdate','status','icons'];
  dataSource = ELEMENT_DATA;
}
