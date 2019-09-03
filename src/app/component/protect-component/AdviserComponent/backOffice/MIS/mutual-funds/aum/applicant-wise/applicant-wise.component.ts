import { Component, OnInit } from '@angular/core';
import { AumComponent } from '../aum.component';

@Component({
  selector: 'app-applicant-wise',
  templateUrl: './applicant-wise.component.html',
  styleUrls: ['./applicant-wise.component.scss']
})
export class ApplicantWiseComponent implements OnInit {

  constructor(private aum:AumComponent) { }

  ngOnInit() {
  }
  aumReport()
  {
   this.aum.aumComponent=true;
  }

}
