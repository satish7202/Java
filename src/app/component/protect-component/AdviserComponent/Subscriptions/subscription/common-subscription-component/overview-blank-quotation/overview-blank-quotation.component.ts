import { Component, OnInit ,Input} from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-overview-blank-quotation',
  templateUrl: './overview-blank-quotation.component.html',
  styleUrls: ['./overview-blank-quotation.component.scss']
})
export class OverviewBlankQuotationComponent implements OnInit {

  constructor(public subInjectService:SubscriptionInject,private fb:FormBuilder) { }
  @Input () blankOverview:any;
  blankDocumentProperties;
  selectedOption;
  ngOnInit() {
    this.createForm();
  }
  createForm()
  {
    this.blankDocumentProperties=this.fb.group({
      docType:[""],
      docName:[""],
      docAvailability:[],
      selectPlan:[]
    })
  }
  Close(state)
  {
    this.subInjectService.rightSliderData(state); 
  }
  selectDocument(value)
  {
    this.selectedOption=value;
    this.blankDocumentProperties.patchValue({
      "docAvailability":value
    })
  }
}
