import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/Data-service/event.service';
import { SubscriptionInject } from '../../../subscription-inject.service';
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

  constructor(public subInjectService:SubscriptionInject, private eventService:EventService, private subService:SubscriptionService) { }

  ngOnInit() {
    this.getInvoiceList();
    console.log("CLIENT INVOICE ")
    console.log('clientData',this.clientData)
  }
  @Input() clientData;
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
  openInvoice(data,value,state)
  {

    this.eventService.sliderData(value);
    this.subInjectService.rightSliderData(state)
    this.subInjectService.addSingleProfile(data)

  }

}
