import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../subscription.service';

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
  constructor(private subscription:SubscriptionService) { }
  
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
     'advisorId':2735
    }

    this.subscription.getInvoiceData(obj).subscribe(
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
  showInvoicePdf(value)
  {
   this.subscription.getSingleInvoiceData(value.id).subscribe(
     data=>this.getSingleResponseInvoicePdf(data)
   )
  this.showPdfInvoice=true;
  }
  getSingleResponseInvoicePdf(data)
  {
    this.singleInvoiceData=data
  }
  

}
