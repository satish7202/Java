import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl } from '@angular/forms';

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
  profileForm = new FormGroup({
    firstName: new FormControl(''),

  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
