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
  advisorBillerProfileId=1;
  showPdfInvoice;
  ngOnInit() {
   this.getInvoiceSubData();
   this.showPdfInvoice=false;
  }
  getInvoiceSubData()
  {
    this.subscription.getInvoiceData(this.advisorBillerProfileId).subscribe(
      data =>this.getInvoiceResponseData(data)
    )
  }
  getInvoiceResponseData(data)
  {
   const ELEMENT_DATA=data;
   this.dataSource=ELEMENT_DATA;
  }
  displayedColumns: string[] = ['checkbox','date','invoicenum','name','status','email', 'duedate', 'amt','balance'];
  showInvoicePdf(value)
  {
   this.subscription.getSingleInvoiceData(value.id).subscribe(
     data=>this.getSingleInvoicePdf(data)
   )
  this.showPdfInvoice=true;
  }
  getSingleInvoicePdf(data)
  {
    console.log(data)
  }
  

}
