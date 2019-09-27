import { Component, OnInit } from '@angular/core';
import { subscriptionInject } from '../../../subscription-inject.service';
import { FormBuilder, Validators } from '@angular/forms';
import { SubscriptionService } from '../../../subscription.service';

@Component({
  selector: 'app-biller-profile-advisor',
  templateUrl: './biller-profile-advisor.component.html',
  styleUrls: ['./biller-profile-advisor.component.scss']
})
export class BillerProfileAdvisorComponent implements OnInit {
   

  billerProfileForm: any;
  selected=0;
  constructor(public subInjectService:subscriptionInject,private fb:FormBuilder,private subService:SubscriptionService) {
    this.subInjectService.singleProfileData.subscribe(
      data=>this.getSingleBillerProfileData(data)
    )
   }
   
  ngOnInit() {
    this.selected=0;
  }
  getSingleBillerProfileData(data)
  {
  this.billerProfileForm=this.fb.group({
    profileDetailsForm:this.fb.group({
      gstinNum:[data.gstin],
      panNum:[data.pan],
      Address:[data.billerAddress],
      state:[data.state],
      zipCode:[data.zipCode],
      country:[data.country],
      city:[data.city]
    }),
    bankDetailsForm:this.fb.group({
      nameOnBank:[data.nameAsPerBank],
      bankName:[data.bankName],
      acNo:[data.acNumber],
      ifscCode:[data.ifscCode],
      address:[data.bankCity],
      state:[data.state],
      pincode:[data.bankZipCode],
      country:[data.country]
    }),
    MiscellaneousData:this.fb.group({
      footnote:[data.footnote],
      terms:[data.terms]
    })
  })
  
  }
  Close(value)
  {
    this.subInjectService.rightSideData(value)  
  }
  nextStep(value,eventName)
  {     
    this.selected=value;
    if(eventName=='Save&Next')
    {
      (this.selected<3)?this.selected++:this.submitBillerForm();
    } 
  }
  submitBillerForm()
  {
    let obj={
      "acNumber":this.billerProfileForm.controls.bankDetailsForm.controls.acNo.value,
      "advisorId":2735,
      "bankCity":this.billerProfileForm.controls.bankDetailsForm.controls.address.value,
      "bankCountry":this.billerProfileForm.controls.bankDetailsForm.controls.country.value,
      "bankName":this.billerProfileForm.controls.bankDetailsForm.controls.bankName.value,
      "bankState":this.billerProfileForm.controls.bankDetailsForm.controls.state.value,
      "bankZipCode":this.billerProfileForm.controls.bankDetailsForm.controls.pincode.value,
      "billerAddress":this.billerProfileForm.controls.profileDetailsForm.controls.Address.value,
      "branchAddress":this.billerProfileForm.controls.bankDetailsForm.controls.address.value,
      "city": this.billerProfileForm.controls.profileDetailsForm.controls.city.value,
      "company_display_name":"stringfgdfg",
      "companyName": "stringname",
      "country": this.billerProfileForm.controls.profileDetailsForm.controls.country.value,
      "footnote":this.billerProfileForm.controls.MiscellaneousData.controls.footnote.value,
      "gstin": this.billerProfileForm.controls.profileDetailsForm.controls.gstinNum.value,
      "ifscCode": this.billerProfileForm.controls.bankDetailsForm.controls.ifscCode.value,
      "logoUrl": "www.google.com",
      "nameAsPerBank": this.billerProfileForm.controls.bankDetailsForm.controls.nameOnBank.value,
      "pan": this.billerProfileForm.controls.profileDetailsForm.controls.panNum.value,
      "state":this.billerProfileForm.controls.profileDetailsForm.controls.state.value,
      "terms": this.billerProfileForm.controls.MiscellaneousData.controls.terms.value,
      "zipCode":this.billerProfileForm.controls.profileDetailsForm.controls.zipCode.value
    }
    console.log(obj)

    this.subService.saveBillerProfileSettings(obj).subscribe(
      data =>console.log(data)
    )
  }
}
