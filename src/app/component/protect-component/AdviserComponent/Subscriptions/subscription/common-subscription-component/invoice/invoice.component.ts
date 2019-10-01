import { Component, OnInit, Input } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
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

  constructor(public subInjectService:SubscriptionInject) { }
  @Input() invoiceData;
  ngOnInit() {
  
  }
 @Input() invoiceTab;
  Close(state)
  { 
    (this.invoiceTab=='invoiceUpperSlider')?this.subInjectService.rightSliderData(state):this.subInjectService.rightSideData(state)
    
  }
  displayedColumns: string[] = ['checkbox','document','plan', 'date', 'sdate','cdate','status','icons'];
  dataSource = ELEMENT_DATA;
}
