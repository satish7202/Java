import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { EventService } from 'src/app/Data-service/event.service';
import { ConfirmDialogComponent } from 'src/app/component/protect-component/common-component/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { DeleteSubscriptionComponent } from '../delete-subscription/delete-subscription.component';
export interface PeriodicElement {
  service: string;
  amt: string;
  type: string;
  subs: string;
  status:string;
  date:string;
  bdate:string;
  ndate:string;
  mode:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {service: "Financial Planning", amt: "Rs.1,00,000/Quarter", type: "FIXED", subs: 'SUB-0001',status:"LIVE",date:"25/08/2019",bdate:"25/08/2019",ndate:"25/08/2019",mode:"Cheque"},
  {service: "Investment management - AUM Linked fee", amt: "View details", type: "VARIABLE", subs: '-',status:"FUTURE",date:"25/08/2019",bdate:"-",ndate:"25/08/2019",mode:"Auto debit"},
  {service: "Investment management - AUM Linked fee", amt: "View details", type: "VARIABLE", subs: '-',status:"NOT STARTED",date:"START",bdate:"-",ndate:"25/08/2019",mode:"NEFT/RTGS"},
 
];
@Component({
  selector: 'app-subscriptions-upper-slider',
  templateUrl: './subscriptions-upper-slider.component.html',
  styleUrls: ['./subscriptions-upper-slider.component.scss']
})
export class SubscriptionsUpperSliderComponent implements OnInit {

  constructor(public subInjectService:SubscriptionInject, private eventService:EventService, public dialog:MatDialog) { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['service', 'amt', 'type', 'subs','status','date','bdate','ndate','mode','icons'];
  dataSource = ELEMENT_DATA;
  
  openPlanSlider(value,state)
  { 
    this.eventService.sliderData(value);
    this.subInjectService.rightSliderData(state)
  }
  deleteModal(value)
  {
    let dialogData = {
      data:value,
      header: 'DELETE',
      body:'Are you sure you want to delete the document?',
      body2:'This cannot be undone',
      btnYes:'CANCEL',
      btnNo:'DELETE'
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
       width: '400px',
       data: dialogData,
       autoFocus:false,

    });
  
    dialogRef.afterClosed().subscribe(result => {
  
    });
  
  }
  delete(data){
    let Fragmentdata = {
      Flag: data,
    }
    if(data=="cancelSubscription"){
          const dialogRef = this.dialog.open(DeleteSubscriptionComponent, {
            width: '20%',
            // height:'40%',
            data: Fragmentdata,
            autoFocus:false,
          });
          dialogRef.afterClosed().subscribe(result => {
          });
    }
  }

}
