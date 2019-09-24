import { Component, OnInit } from '@angular/core';
import { subscriptionInject } from '../../../subscription-inject.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-structure',
  templateUrl: './add-structure.component.html',
  styleUrls: ['./add-structure.component.scss']
})
export class AddStructureComponent implements OnInit {

  constructor(private subinject: subscriptionInject,private fb:FormBuilder) { }
  planName;
  ngOnInit() {
  }
    planData=this.fb.group({
    planName:[''],
    code:[''],
    description:['']
  })
  submitPlanData()
  {
    console.log(this.planName)
  }
  closeNav(state) {
    this.subinject.rightSliderData(state)
  }
}
