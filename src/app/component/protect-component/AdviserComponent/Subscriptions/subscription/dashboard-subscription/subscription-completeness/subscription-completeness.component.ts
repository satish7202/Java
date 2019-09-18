import { Component, OnInit } from '@angular/core';
import { DashboardSubscriptionComponent } from '../dashboard-subscription.component';
import { SubscriptionService } from '../../../subscription.service';

@Component({
  selector: 'app-subscription-completeness',
  templateUrl: './subscription-completeness.component.html',
  styleUrls: ['./subscription-completeness.component.scss']
})
export class SubscriptionCompletenessComponent implements OnInit {

  constructor(private subscription:SubscriptionService) { }
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
}
