import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';
import { SubscriptionService } from '../../../subscription.service';
@Component({
  selector: 'app-delete-subscription',
  templateUrl: './delete-subscription.component.html',
  styleUrls: ['./delete-subscription.component.scss']
})
export class DeleteSubscriptionComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DeleteSubscriptionComponent>,@Inject(MAT_DIALOG_DATA) public fragmentData: any ,private subscription:SubscriptionService) { }
  ngOnInit() {
    console.log("fragmentData",this.fragmentData);
  }
  cancelSubscription()
  {
    let obj={
      advisorId:12345
    }
    this.subscription.cancelSubscriptionData(obj).subscribe(
      data => this.canceledData(data)
    )
  }
  canceledData(data)
  {
    console.log("data:",data)
  }
}
