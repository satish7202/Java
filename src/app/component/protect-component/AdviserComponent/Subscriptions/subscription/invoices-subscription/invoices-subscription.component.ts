import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../subscription.service';
import { SubscriptionInject } from '../../subscription-inject.service';
import { EventService } from 'src/app/Data-service/event.service';

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

@Component({
  selector: 'app-invoices-subscription',
  templateUrl: './invoices-subscription.component.html',
  styleUrls: ['./invoices-subscription.component.scss']
})
export class InvoicesSubscriptionComponent implements OnInit {
  dataSource: any;
  subscriptionValue: any;
  constructor(public subInjectService:SubscriptionInject, private eventService:EventService,public subscription:SubscriptionService) { }
  
  showPdfInvoice;
  singleInvoiceData;
  showLoader=true;
  ngOnInit() {
   this.getInvoiceSubData();
   this.showPdfInvoice=false;
  }
  getInvoiceSubData()
  {
    let obj={
     'id':2735, //pass here advisor id for Invoice advisor 
     'module':1
    }

    this.subscription.getInvoices(obj).subscribe(
      data =>this.getInvoiceResponseData(data)
    )
  }
  getInvoiceResponseData(data)
  {
    console.log(data)
    const ELEMENT_DATA=data;
   this.dataSource=ELEMENT_DATA;
   this.showLoader=false;
  }
  displayedColumns: string[] = ['checkbox','date','invoicenum','name','status','email', 'duedate', 'amt','balance'];
  // showInvoicePdf(value)
  // {
  //  this.subscription.getSingleInvoiceData(value.id).subscribe(
  //    data=>this.getSingleResponseInvoicePdf(data)
  //  )
  // this.showPdfInvoice=true;
  // }
  openInvoice(data,value,state)
  {

    this.eventService.sidebarData(value)
this.subscriptionValue = value
this.subInjectService.rightSideData(state);
this.subInjectService.addSingleProfile(data)

  }
  getSingleResponseInvoicePdf(data)
  {
    this.singleInvoiceData=data
  }
  

}
