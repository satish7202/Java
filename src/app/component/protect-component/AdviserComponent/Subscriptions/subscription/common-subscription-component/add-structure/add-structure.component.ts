import { Component, OnInit } from '@angular/core';
import { subscriptionInject } from '../../../subscription-inject.service';
import { FormBuilder, Validators } from '@angular/forms';
import { SubscriptionService } from '../../../subscription.service';
@Component({
  selector: 'app-add-structure',
  templateUrl: './add-structure.component.html',
  styleUrls: ['./add-structure.component.scss']
})
export class AddStructureComponent implements OnInit {

  constructor(private subinject: subscriptionInject, private fb: FormBuilder, private subService: SubscriptionService) { }
  planName;
  ngOnInit() {
  }
  planData = this.fb.group({
    planName: ['', [Validators.required, Validators.maxLength(20)]],
    code: [''],
    description: ['']
  })
  submitPlanData() {
    console.log(this.planName)
  }
  addPlanData() {
    let obj = {
      "advisorId": 0,
      "createdDate": "2019-09-26T08:24:51.781Z",
      "description": "string",
      "id": 0,
      "isActive": 0,
      "isPublic": 0,
      "lastUpdatedDate": "2019-09-26T08:24:51.781Z",
      "logoUrl": "string",
      "name": "string",
      "planRepoId": 0
    }
    this.subService.addSettingPlanOverviewData(obj).subscribe(
      data => console.log(data)
    )
  }
  closeNav(state) {
    this.subinject.rightSliderData(state)
  }
}
