import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as $ from 'jquery';
import {animate, state, style, transition, trigger} from "@angular/animations";
@Component({
  selector: 'app-upper-slider',
  templateUrl: './upper-slider.component.html',
  styleUrls: ['./upper-slider.component.scss'],
  /*animations: [
    // Note: The `enter` animation transitions to `transform: none`, because for some reason
    // specifying the transform explicitly, causes IE both to blur the dialog content and
    // decimate the animation performance. Leaving it as `none` solves both issues.
    state('void, exit', style({ opacity: 0, transform: 'scale(0.7)' })),
    state('enter', style({ transform: 'none' })),
    transition('* => enter',   [style({transform: 'translateY(-100%)'}), animate('200ms ease-in', style({transform: 'translateY(0%)'}))]),
    // transition('* => enter', animate('150ms cubic-bezier(0, 0, 0.2, 1)', style({ transform: 'none', opacity: 1 }))),
    transition('* => void, * => exit', animate('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 0 }))),
  ]*/
 /* animations: [
   /!* trigger('dialog', [
        transition('void => *', [
          style({ transform: 'scale3d(.3, .3, .3)' }),
          animate(100)
        ]),
        transition('* => void', [
          animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
        ])
      ]
    ),*!/
    /!*trigger('* => *', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])*!/
    trigger('* => *', [
      transition('* => *', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
     /!* transition('open => closed', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])*!/
    ])
  ]*/
})
export class UpperSliderComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<UpperSliderComponent>,
    @Inject(MAT_DIALOG_DATA) public fragmentData: any) { }
  subscriptionType = this.fragmentData;
  ngOnInit() {

    console.log(this.fragmentData)
  }

  Flag = 'planOverview';
  plan='planServices';
  documents ='plansDocuments';
  plans='servicesPlans';
  clientDocuments ='clientDocuments';
  servicesDocuments='servicesDocuments'
  dialogClose(){
    this.dialogRef.close();
  }
  open() {
    $("#myRightSidenav").css("width", "60%");

  }


}
