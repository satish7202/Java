import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {EventService} from 'src/app/Data-service/event.service';
import {subscriptionInject} from '../../../subscription-inject.service';

@Component({
  selector: 'app-upper-slider',
  templateUrl: './upper-slider.component.html',
  styleUrls: ['./upper-slider.component.scss'],
  animations: [
    trigger('upperRightSlider', [
      state('open', style({
        width: '60%'
      })),
      state('close', style({
        width: '0%'
      })),
      state('closeSlider', style({
        width: '0%'
      })),
      transition('close => open', [animate('0.3s')]),
      transition('open => close', [animate('0.1s')]),
      transition('open => closeSLider', [animate('0s')]),
      transition('closeSlider => open', [animate('0.3s')])
    ])
  ]
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
  subscriptionTab: any;
  constructor(private eventService:EventService,private subinject:subscriptionInject,public dialogRef: MatDialogRef<UpperSliderComponent>,
    @Inject(MAT_DIALOG_DATA) public fragmentData: any) { 
      this.eventService.rightSliderData.subscribe(
        data =>this.getTabValueData(data)
      )
      this.subinject.rightslider.subscribe(
        data =>this.getStateData(data)
      )
    }
    State;
    rightSliderData;
    ngOnInit() {
    this.State='close'
    console.log(this.fragmentData)
  }

  Flag = 'planOverview';
  plan = 'planServices';
  documents = 'plansDocuments';
  plans = 'servicesPlans';
  clientDocuments = 'clientDocuments';
  servicesDocuments = 'servicesDocuments'
  blankOverview;
  dialogClose() {
    this.dialogRef.close();
  }

  getStateData(data) {
    this.State = data;
    console.log('state', data)
  }

  getTabValueData(data) {
    this.blankOverview=data;        
    this.rightSliderData = data;
    console.log('value', data)
  }
  tabClick(event)
  {
    console.log(event)
    this.subscriptionTab = event.tab.textLabel;
  }


}
