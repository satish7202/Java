import { Injectable, Directive, ViewContainerRef } from '@angular/core';

/*
@Injectable({
  providedIn: 'root'
})
export class CustomhtmlRenderDirective {

  constructor() { }
}
*/
@Directive({
  selector: '[custom-html]',
})
export class CustomhtmlRenderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
