import { Component, OnInit } from '@angular/core';
import { AumComponent } from '../aum.component';
import { BackOfficeService } from '../../../../back-office.service';

@Component({
  selector: 'app-applicant-wise',
  templateUrl: './applicant-wise.component.html',
  styleUrls: ['./applicant-wise.component.scss']
})
export class ApplicantWiseComponent implements OnInit {

  constructor(private aum:AumComponent,private backoffice:BackOfficeService) { }
  teamMemberId=2929;
  applicantName;
  showLoader=true;
  ngOnInit() {
    this.aumApplicantWiseTotalaumApplicantNameGet();
  }
  aumApplicantWiseTotalaumApplicantNameGet()
  {
    this.backoffice.getAumApplicantWiseTotalaumApplicantName(this.teamMemberId).subscribe(
      data => this.applicantNameGet(data)
    )
  }
  applicantNameGet(data)
  {
    this.applicantName=data;
    this.showLoader=false;
  }
  
  category(name,index,show)
  {
    let obj=
    {
      'clientId':name.id,
      'clientTotalAum':0,
      'teamMemberId':this.teamMemberId
    }
    if(show==false)
    {
    this.backoffice.getAumApplicantCategory(obj).subscribe(
      data => this.sortCategoryApplicant(data,index,show)
    )
    }
    else
    {
      this.applicantName[index].show=false;
    }
  }
  sortCategoryApplicant(data,index,show)
  {
    console.log("fasdfkasdf",data)
    let category=data;
    category.forEach(c =>
      {
        c.show=false;
      })
 
    this.applicantName[index].category=data;
    this.applicantName[index].show=(show)?show=false:show=true;

  }
  subCategory(category)
  {
    console.log(category)
  }
  aumReport()
  {
   this.aum.aumComponent=true;
  }

}
