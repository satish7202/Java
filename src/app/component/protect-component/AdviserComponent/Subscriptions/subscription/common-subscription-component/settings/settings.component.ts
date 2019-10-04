import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { EventService } from 'src/app/Data-service/event.service';
import { SubscriptionService } from '../../../subscription.service';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/component/protect-component/common-component/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  SettingProfileData: any;

  constructor(public dialog: MatDialog,private fb:FormBuilder,public subInjectService:SubscriptionInject, private eventService:EventService, private subService:SubscriptionService) { }

  ngOnInit() {
    this.getSettingProfileData();
  }
 
  getSettingProfileData()
  {
    let obj={
    'clientId':2970
    }
    this.subService.getSubscriptionClientsSettingProfile(obj).subscribe(
     data => this.getSettingProfileDataResponse(data)
    )
  }
  getSettingProfileDataResponse(data)
  {
   console.log(data)
   this.SettingProfileData=data;
  }
  openPayeeSettings(profileData,value,state)
  {
    this.eventService.sliderData(value);
    this.subInjectService.rightSliderData(state)
    this.subInjectService.rightSideData(profileData);
  }
  deleteModal(value) {
    let dialogData = {
      data: value,
      header: 'DELETE',
      body: 'Are you sure you want to delete the document?',
      body2: 'This cannot be undone',
      btnYes: 'CANCEL',
      btnNo: 'DELETE'
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: dialogData,
      autoFocus: false,

    });

    dialogRef.afterClosed().subscribe(result => {

    });

}
}