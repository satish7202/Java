import { Component, OnInit, forwardRef, Input, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { EventService } from 'src/app/Data-service/event.service';
import { SubscriptionInject } from '../../../subscription-inject.service';

@Component({
  selector: 'app-email-only',
  templateUrl: './email-only.component.html',
  styleUrls: ['./email-only.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailOnlyComponent),
      multi: true
    }
  ]
})
export class EmailOnlyComponent implements OnInit {
  model: any;
  dataSub: any;
  storeData: any;

  constructor(public eventService:EventService,public subInjectService:SubscriptionInject) { 
    this.dataSub = this.subInjectService.singleProfileData.subscribe(
      data=>this.getcommanFroalaData(data)
    );
  }
  @Input() emailSend;
  @Input() emailSendfooter;
  @Input() emailDocumentSend;
  @Input() emailDocument;
  @Output() valueChange = new EventEmitter();
  @Input() quotationData;
  config: Object = {
    charCounterCount: false
  };

  ngOnInit() {
    console.log(this.emailSendfooter);
    console.log(this.emailDocumentSend);
    console.log(this.quotationData);
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
Close(value) {
  this.valueChange.emit(this.emailSend);
}
openEmailQuot(value,state)
{
  this.eventService.sliderData(value);
  this.subInjectService.rightSliderData(state)
 // this.subInjectService.addSingleProfile(data)
}
getcommanFroalaData(data){
  console.log(data)
  this.storeData=data;
}
saveData(data)
  {
    console.log(data);
    this.storeData.documentText=data;
  }
}
