import {Component, Input, Output, forwardRef, EventEmitter} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-froala',
  templateUrl: './froala.component.html',
  styleUrls: ['./froala.component.scss']
})
export class FroalaComponent implements ControlValueAccessor {

  constructor() {

  }

  // End ControlValueAccesor methods.

  @Input() model: any;
  @Output() modelChange = new EventEmitter();

  config: Object = {
    charCounterCount: false
  };

  // Begin ControlValueAccesor methods.
  onChange = (_) => {
  };
  onTouched = () => {
  };

  // Form model content changed.
  writeValue(content: any): void {
    this.model = content;
    this.modelChange.emit(this.model);
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
