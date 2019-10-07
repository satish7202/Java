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
  planData: any;
  submitted=false;
  constructor(private subinject: SubscriptionInject, private fb: FormBuilder, private subService: SubscriptionService) {
    this.subinject.rightSideBarData.subscribe(
      data =>this.getSinglePlanData(data)
    )
   }

  ngOnInit() {
  }
  submitPlanData() {
  
  }
  getFormControl()
  {
    return this.planData.controls;
  }
  getSinglePlanData(data){
    this.planData = this.fb.group({
      planName: [data.name, [Validators.required]],
      code: [data.code,[Validators.required]],
      description: [data.description,[Validators.required]]
    })
  }
  addPlanData(state) {
    this.submitted=true;
    if(this.planData.invalid)
    {
      return;
    }
    else{
      let obj = {
        "name" : "chetan gohil",
      "description" : "descripppppption",
      "advisorId" : 12345,
      "logoUrl" : "url",
      "isPublic" : 1,
      "isActive" : 1,
      "code":'123'
    }
      this.subService.addSettingPlanOverviewData(obj).subscribe(
        data => console.log(data)
      )
      this.subinject.rightSliderData(state)
    }
  }
  closeNav(state) {
    this.subinject.rightSliderData(state)
  }
}
