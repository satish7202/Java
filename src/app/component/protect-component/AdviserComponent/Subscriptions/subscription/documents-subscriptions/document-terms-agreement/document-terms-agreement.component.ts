import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-document-terms-agreement',
  templateUrl: './document-terms-agreement.component.html',
  styleUrls: ['./document-terms-agreement.component.scss']
})
export class DocumentTermsAgreementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Close()
  {
    $('#myRightSidenav').css({"width" : ""});
    $('#myRightSidenav').css({"transition":'0.2s'})
  }
}
