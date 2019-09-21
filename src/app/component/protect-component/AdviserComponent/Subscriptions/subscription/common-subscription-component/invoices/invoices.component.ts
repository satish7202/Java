import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Data-service/event.service';
import { subscriptionInject } from '../../../subscription-inject.service';
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
 const ELEMENT_DATA: PeriodicElement[] = [
  {date: "25/08/2019", Invoicenumber: 'Starter plan', Servicename: "25/08/2019", Billedto: '25/08/2019',status: '25/08/2019',Duedate:'READY TO SEND',Amount:'efwwe',Balancedue:'ewff'},
  {date: "25/08/2019", Invoicenumber: 'Starter plan', Servicename: "25/08/2019", Billedto: '25/08/2019',status: '25/08/2019',Duedate:'READY TO SEND',Amount:'efwwe',Balancedue:'ewff'},
  {date: "25/08/2019", Invoicenumber: 'Starter plan', Servicename: "25/08/2019", Billedto: '25/08/2019',status: '25/08/2019',Duedate:'READY TO SEND',Amount:'efwwe',Balancedue:'ewff'},
  {date: "25/08/2019", Invoicenumber: 'Starter plan', Servicename: "25/08/2019", Billedto: '25/08/2019',status: '25/08/2019',Duedate:'READY TO SEND',Amount:'efwwe',Balancedue:'ewff'}
];
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  constructor(public subInjectService:subscriptionInject,private eventService:EventService) { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['checkbox','date','Invoice number','Service name','Billed to', 'status', 'Duedate','Amount','Balance due','icons'];
  dataSource = ELEMENT_DATA;
  
  openInvoice(value,state)
  {
    
        this.eventService.sliderData(value);
    this,this.subInjectService.rightSliderData(state)
  }

}
