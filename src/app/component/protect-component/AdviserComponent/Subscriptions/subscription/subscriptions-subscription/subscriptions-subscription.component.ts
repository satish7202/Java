import {Component,OnInit} from '@angular/core';
import { EventService } from 'src/app/Data-service/event.service';
import { SubscriptionInject } from '../../subscription-inject.service';
import { MatDialog } from '@angular/material';
import { DeleteSubscriptionComponent } from '../common-subscription-component/delete-subscription/delete-subscription.component';
import { SubscriptionService } from '../../subscription.service';
import { ConfirmDialogComponent } from 'src/app/component/protect-component/common-component/confirm-dialog/confirm-dialog.component';
export interface PeriodicElement {
  client:string;
  service:string;
  amt: string;
  sub: string;
  status:string;
  activation: string;
  lastbilling: string;
  nextbilling: string;
  feemode:string;
}

@Component({
  selector: 'app-subscriptions-subscription',
  templateUrl: './subscriptions-subscription.component.html',
  styleUrls: ['./subscriptions-subscription.component.scss']
})
export class SubscriptionsSubscriptionComponent implements OnInit {
  subscriptionValue: any;
 
  constructor(public dialog:MatDialog, public subInjectService:SubscriptionInject, private eventService:EventService, private subService:SubscriptionService) {
  }

  ngOnInit() {
   this.getSubscriptionList();
  }
  displayedColumns: string[] = ['client','service','amt','sub','status','activation', 'lastbilling', 'nextbilling','feemode','icons'];
  dataSource;
  DataToSend;
  getSubscriptionList()
  {
    let obj={
      'advisorId':12345,
      'dateType':0,
      'order':0
    }
    this.subService.getSubscriptionSubscriptionData(obj).subscribe(
      data=> this.getSubscriptionListResponse(data)
    )
  }
  getSubscriptionListResponse(data)
  {
    console.log("subscription data",data)
    this.dataSource=data
    this.DataToSend = data
  }
  Open(data,value,state)
  {
    this.eventService.sidebarData(value)
    this.subscriptionValue = value
    this.subInjectService.rightSideData(state);
    this.subInjectService.addSingleProfile(data)
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
            width: '50%',
            // height:'40%',
            data: Fragmentdata,
            autoFocus:false,
          });
          dialogRef.afterClosed().subscribe(result => {
          });
    }
  }
}
