import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {EventService} from "../../../../../../../Data-service/event.service";
import { FormGroup, FormControl } from '@angular/forms';
import { SubscriptionService } from '../../../subscription.service';

@Component({
  selector: 'app-preference-email-invoice',
  templateUrl: './preference-email-invoice.component.html',
  styleUrls: ['./preference-email-invoice.component.scss']
})
export class PreferenceEmailInvoiceComponent implements OnInit {
  model: any;

  constructor(private eventService: EventService,public subService:SubscriptionService) {
  }
  mailForm = new FormGroup({
    mail_body: new FormControl(''),

  });
  ngOnInit() {
    this.getTemplate();
  }
  getTemplate()
  {
    let obj={
      'advisorId':2727
    }
    this.subService.getEmailTemplate(obj).subscribe(
      data => this.getTemplateDate(data)
    );
  }
  getTemplateDate(data)
  {
    console.log(data);
  }
// Begin ControlValueAccesor methods.
onChange = (_) => {
}
onTouched = () => {
}

// Form model content changed.
writeValue(content: any): void {
  this.model = content;
}

registerOnChange(fn: (_: any) => void): void {
  this.onChange = fn;
}

registerOnTouched(fn: () => void): void {
  this.onTouched = fn;
}
  dialogClose() {
    this.eventService.changeUpperSliderState({state: 'close'});
  }

}
