import {Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy} from '@angular/core';

import {CustomhtmlRenderDirective} from './customhtml.render.directive';
import {DataInterfaceComponent} from './datainterface.component';
import {ChildComponent} from './child.component';

@Component({
  selector: 'app-custom-html',
  template: `
      <div>
          <ng-template custom-html></ng-template>
      </div>`
})
export class CustomHtmlComponent implements OnInit, OnDestroy {
  @Input() data: any;
  currentAdIndex = -1;
  @ViewChild(CustomhtmlRenderDirective, {static: true}) customHtml: CustomhtmlRenderDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
    console.log('CustomHTMLData: ', this.data);
    console.log('CustomHTMLData:this.adHost ', this.customHtml);

    const viewContainerRef = this.customHtml.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as DataInterfaceComponent).data = this.data;
  }


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
