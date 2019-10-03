import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SubscriptionService } from '../../../subscription.service';
@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PlansComponent>, private subService: SubscriptionService) { }
  @Input() componentFlag: string;
  ngOnInit() {
    this.getPlansMappedToAdvisor();
  }
  getPlansMappedToAdvisor() {
    let obj = {
      'advisorid': 12345
    }
    this.subService.getPlansMappedToAdvisor(obj).subscribe(
      data => console.log("service Plan Data", data)
    )
  }
  dialogClose() {
    this.dialogRef.close();
  }
  selectServicePlan(data) {

    (data.checked) ? data.checked = false : data.checked = true;
    console.log(data)
  }
}
