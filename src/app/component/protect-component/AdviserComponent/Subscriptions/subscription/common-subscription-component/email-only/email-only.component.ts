import { Component, OnInit, forwardRef, Input, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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

  constructor() { }
  @Input() emailSend;
  @Input() emailSendfooter;
  @Output() valueChange = new EventEmitter();
  config: Object = {
    charCounterCount: false
  };

  ngOnInit() {
    console.log(this.emailSend);
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
}
