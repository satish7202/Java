import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Data-service/event.service';
import { subscriptionInject } from '../../../subscription-inject.service';
import { SubscriptionService } from '../../../subscription.service';
export interface PeriodicElement {
  Invoicenumber: string;
  date: string;
  Servicename: string;
  Billedto: string;
  status:string;
  Duedate:string;
  Amount:string;
  Balancedue:string;
 }
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  constructor(public subInjectService:subscriptionInject,private eventService:EventService,private subService:SubscriptionService) { }

  ngOnInit() {
    this.getInvoiceList();
    console.log("CLIENT INVOICE ")
  }
  displayedColumns: string[] = ['checkbox','date','Invoice number','Service name','Billed to', 'status', 'Duedate','Amount','Balance due','icons'];
  dataSource;

  getInvoiceList()
  {
    let obj={
     'clientId':2970
    }
   this.subService.getSubscriptionClientsInvoices(obj).subscribe(
     data => this.getInvoiceListResponse(data)
   )
  }
  getInvoiceListResponse(data)
  {
    data.forEach(singleData => {
      singleData.isChecked = false;
    });
    console.log(data);

    this.dataSource=data
  }
  openInvoice(value,state)
  {

    this.eventService.sliderData(value);
    this,this.subInjectService.rightSliderData(state)
  }

}
