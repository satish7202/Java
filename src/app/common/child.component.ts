import {Component, Input} from '@angular/core';

import {DataInterfaceComponent} from './datainterface.component';

@Component({
  template: `
      <div [innerHTML]="data">
      </div>`
})
// <!--          {{data}}-->

export class ChildComponent implements DataInterfaceComponent {
  @Input() data: any;
}
