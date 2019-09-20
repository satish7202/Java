import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SubscriptionComponent } from '../../subscription.component';

@Component({
  selector: 'app-terms-agreement',
  templateUrl: './terms-agreement.component.html',
  styleUrls: ['./terms-agreement.component.scss']
})
export class TermsAgreementComponent implements OnInit {

  constructor(public subscription:SubscriptionComponent) { }

  ngOnInit() {
  }
  Close()
  {
    this.subscription.currentState='close';
  }
  mailForm = new FormGroup({
    mail_body: new FormControl(''),

  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.mailForm.value);
  }
}
