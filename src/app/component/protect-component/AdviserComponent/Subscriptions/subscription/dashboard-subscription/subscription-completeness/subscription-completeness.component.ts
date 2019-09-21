import { Component, OnInit } from '@angular/core';
import { DashboardSubscriptionComponent } from '../dashboard-subscription.component';
import { SubscriptionService } from '../../../subscription.service';
import { SubscriptionComponent } from '../../subscription.component';
import { EventService } from 'src/app/Data-service/event.service';
import { MatDialog } from '@angular/material';
import { SubscriptionPopupComponent } from '../../common-subscription-component/subscription-popup/subscription-popup.component';

@Component({
  selector: 'app-subscription-completeness',
  templateUrl: './subscription-completeness.component.html',
  styleUrls: ['./subscription-completeness.component.scss']
})
export class SubscriptionCompletenessComponent implements OnInit {
  button: any;
  constructor(public dialog:MatDialog,private subscription:SubscriptionService,public sub:SubscriptionComponent,
    public eventService: EventService) { }
  advisorId=2735;
  ngOnInit() {
   this.getSubscriptionStagesRecord();
  }

  getSubscriptionStagesRecord()
  {
    let obj={
      "amountReceived":1000,
      "changesIfAny":"nothing",
      "paymentDate":"2001-01-01",
      "paymentMode":1,
      "notes":"notes",
      "invoiceId":1
    }
    this.subscription.getSubscriptionCompleteStages(obj).subscribe(
      data => this.getSubStagesRecordResponse(data)
    )
  }
   
  getSubStagesRecordResponse(data)
  {
    console.log(data)
  }
  goToSelectivePage()
  { 
   this.sub.subscriptionTab='SETTINGS'
  }

  currentTabs(value){
    console.log(value)
    this.eventService.tabData(value)
  }
  openPopup(data){
    let Fragmentdata = {
      Flag: data,
    }
    const dialogRef = this.dialog.open(SubscriptionPopupComponent, {
      width: '70%',
      height:'100%',
      data: Fragmentdata,
      autoFocus:false,
     
   });
   dialogRef.afterClosed().subscribe(result => {

  });
  }

}
