import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
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
  dataSub: any;
  storeData;
  showRecord: any;
  clientInvoice: any;
  invData: any;

  constructor(public subInjectService:SubscriptionInject) {
    this.dataSub = this.subInjectService.singleProfileData.subscribe(
      data=>this.getInvoiceData(data)
    );
   }
  @Input() invoiceData;
  @Input() invoiceInSub;
  @Input() clientData;
  @Output() valueChange = new EventEmitter();
  ngOnInit() {
  console.log('this.invoiceSubscription',this.invoiceInSub);
  this.showRecord=false;
  }
 @Input() invoiceTab;
 getInvoiceData(data)
   {
    this.storeData = data
   }
 recordPayment()
 {
  this.showRecord=true;
 }
 cancel()
 {
   this.showRecord=false;
 }
 passInvoice(data)
 {
  console.log(data);
  this.storeData=data;
 }
  Close(state)
  { 
    (this.invoiceTab=='invoiceUpperSlider')?this.subInjectService.rightSliderData(state):this.subInjectService.rightSideData(state)
    this.valueChange.emit(this.invoiceInSub);
  }
  displayedColumns: string[] = ['checkbox','document','plan', 'date', 'sdate','cdate','status','icons'];
  dataSource = ELEMENT_DATA;
}
