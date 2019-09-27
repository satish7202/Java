import { Component, OnInit } from '@angular/core';
import { subscriptionInject } from '../../../subscription-inject.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-biller-profile-advisor',
  templateUrl: './biller-profile-advisor.component.html',
  styleUrls: ['./biller-profile-advisor.component.scss']
})
export class BillerProfileAdvisorComponent implements OnInit {
   
  editBillerProfile;
  constructor(public subInjectService:subscriptionInject,private fb:FormBuilder) {
    this.subInjectService.singleProfileData.subscribe(
      data=>this.getSingleBillerProfileData(data)
    )
   }
   
  ngOnInit() {
  }
  profileDetailsForm;
  bankDetailsForm;
  MiscellaneousData;
  getSingleBillerProfileData(data)
  {
  this.editBillerProfile=data;
  this.profileDetailsForm=this.fb.group({
    gstinNum:[this.editBillerProfile.gstin],
    panNum:[this.editBillerProfile.pan],
    Address:[this.editBillerProfile.billerAddress],
    state:[this.editBillerProfile.state],
    zipCode:[this.editBillerProfile.zipCode],
    country:[this.editBillerProfile.country]
  })
  this.bankDetailsForm=this.fb.group({
    nameOnBank:[this.editBillerProfile.nameAsPerBank],
    bankName:[this.editBillerProfile.bankName],
    acNo:[this.editBillerProfile.acNumber],
    ifscCode:[this.editBillerProfile.ifscCode],
    address:[this.editBillerProfile.bankCity],
    state:[this.editBillerProfile.state],
    country:[this.editBillerProfile.country]
  })
  this.MiscellaneousData=this.fb.group({
    footnote:[this.editBillerProfile.footnote],
    terms:[this.editBillerProfile.terms]
  })
  }
  Close(value)
  {
    this.subInjectService.rightSideData(value)  
  }
}
