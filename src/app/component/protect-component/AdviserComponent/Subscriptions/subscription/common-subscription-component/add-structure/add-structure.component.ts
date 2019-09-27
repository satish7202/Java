import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { FormBuilder, Validators } from '@angular/forms';
import { SubscriptionService } from '../../../subscription.service';
@Component({
  selector: 'app-add-structure',
  templateUrl: './add-structure.component.html',
  styleUrls: ['./add-structure.component.scss']
})
export class AddStructureComponent implements OnInit {

  constructor(private subinject: SubscriptionInject, private fb: FormBuilder, private subService: SubscriptionService) { }
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
      "name" : "chetan gohil",
      "description" : "descripppppption",
      "advisorId" : 12345,
      "logoUrl" : "url",
      "isPublic" : 1,
      "isActive" : 1
  }
    this.subService.addSettingPlanOverviewData(obj).subscribe(
      data => console.log(data)
    )
  }
  closeNav(state) {
    this.subinject.rightSliderData(state)
  }
}
