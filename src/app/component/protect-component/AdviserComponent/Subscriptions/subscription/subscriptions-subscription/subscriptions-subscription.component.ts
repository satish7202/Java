import {Component,OnInit} from '@angular/core';
import { EventService } from 'src/app/Data-service/event.service';
import { subscriptionInject } from '../../subscription-inject.service';
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
const ELEMENT_DATA: PeriodicElement[] = [
  {client: 'Abhishek Mane',service: 'Financial Planning',amt: 'Rs.1,00,000/Q', sub: 'SUB-0001', status: 'LIVE', activation: '25/08/2019', lastbilling: '25/08/2019', nextbilling: '25/08/2019',feemode:'Cheque'},
  {client: 'Ronak Hasmuk Hindocha',service: 'Investment management - AUM Linked fee',amt: 'View details', sub: '-', status: 'FUTURE', activation: '15/09/2019', lastbilling: '-', nextbilling: '15/09/2019',feemode:'Auto debit'},
  {client: 'Aman jain',service: 'Investment management - AUM Linked fee',amt: 'View details', sub: '-', status: 'NOT STARTED', activation: '-', lastbilling: '-', nextbilling: '-',feemode:'NEFT/RTGS'},
];
@Component({
  selector: 'app-subscriptions-subscription',
  templateUrl: './subscriptions-subscription.component.html',
  styleUrls: ['./subscriptions-subscription.component.scss']
})
export class SubscriptionsSubscriptionComponent implements OnInit {
 
  constructor(public dialog:MatDialog,public subInjectService:subscriptionInject,private eventService:EventService,private subService:SubscriptionService) {
  }

  ngOnInit() {
   this.getSubscriptionList();
  }
  displayedColumns: string[] = ['client','service','amt','sub','status','activation', 'lastbilling', 'nextbilling','feemode','icons'];
  dataSource = ELEMENT_DATA;
  getSubscriptionList()
  {
    let obj={
      'advisorBillerProfileId':12345
    }
    this.subService.getSubscriptionSubscriptionData(obj).subscribe(
      data=> this.getSubscriptionListResponse(data)
    )
  }
  getSubscriptionListResponse(data)
  {
    console.log(data)
  }
  Open(value,state)
  {
    this.eventService.sidebarData(value)
    this.subInjectService.rightSideData(state);
  }
  delete(data){
    let Fragmentdata = {
      Flag: data,
    }
    if(data=="cancelSubscription"){
          const dialogRef = this.dialog.open(DeleteSubscriptionComponent, {
            width: '50%',
            data: Fragmentdata,
            autoFocus:false,
          });
          dialogRef.afterClosed().subscribe(result => {
          });
    }
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
}
