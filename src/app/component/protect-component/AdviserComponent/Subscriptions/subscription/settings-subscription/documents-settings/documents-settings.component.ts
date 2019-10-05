import { Component, OnInit } from '@angular/core';
import { UpperSliderComponent } from '../../common-subscription-component/upper-slider/upper-slider.component';
import { MatDialog } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { EventService } from 'src/app/Data-service/event.service';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { SubscriptionService } from '../../../subscription.service';
import { ModifyFeeDialogComponent } from '../../common-subscription-component/modify-fee-dialog/modify-fee-dialog.component';
@Component({
  selector: 'app-documents-settings',
  templateUrl: './documents-settings.component.html',
  styleUrls: ['./documents-settings.component.scss']
})
export class DocumentsSettingsComponent implements OnInit {
  button:any;
  documentSettingData;
  showLoader
  constructor(public dialog: MatDialog,public eventService:EventService,public subInjectService:SubscriptionInject,private subService:SubscriptionService) { }

  ngOnInit() {
    this.getDocumentsSetting();
  }

   getDocumentsSetting()
   {
    this.showLoader=true;
     let obj={
      "advisorId":2735
     }
     this.subService.getSubscriptionDocumentSetting(obj).subscribe(
       data =>this.getDocumentsSettingResponse(data)
     )
   }
   getDocumentsSettingResponse(data)
   {
    this.documentSettingData=data
    this.showLoader=false;
   }
   Open(value,state)
  {
    this.eventService.sidebarData(value)
    this.subInjectService.rightSideData(state);
  }                     
  openFragment(data) {
    let Fragmentdata = {
      Flag: data,
      id:1
    }
    if(Fragmentdata.Flag=='documents'){
      const dialogRef = this.dialog.open(UpperSliderComponent, {
        width: '1400px',
        data: Fragmentdata,
        autoFocus:false,
        panelClass:'dialogBox',
       //  position: { 
       //    top: `30px`,
       //    right: `40px`
       //   },
       // openFrom:'{
       //   top: -50,
       //   width: 30,
       //   height: 80
       // }',
       // closeTo({
       //   left: 1500
       // })
       // hasBackdrop: false,
     });
   
     dialogRef.afterClosed().subscribe(result => {
   
     });
    }else
    {
      const dialogRef = this.dialog.open(ModifyFeeDialogComponent, {
        width: '1400px',
        data: Fragmentdata,
        autoFocus:false,
        panelClass:'dialogBox',
       //  position: { 
       //    top: `30px`,
       //    right: `40px`
       //   },
       // openFrom:'{
       //   top: -50,
       //   width: 30,
       //   height: 80
       // }',
       // closeTo({
       //   left: 1500
       // })
       // hasBackdrop: false,
     });
   
     dialogRef.afterClosed().subscribe(result => {
   
     });
    }
   
  }
}
