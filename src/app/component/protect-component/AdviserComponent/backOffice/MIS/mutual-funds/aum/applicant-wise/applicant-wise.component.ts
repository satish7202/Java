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

  }
  aumReport()
  {
   this.aum.aumComponent=true;
  }

}
