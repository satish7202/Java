import { Component, OnInit } from '@angular/core';
import { UpperSliderComponent } from '../../common-subscription-component/upper-slider/upper-slider.component';
import { MatDialog } from '@angular/material';
import { SubscriptionService } from '../../../subscription.service';
import { EventService } from 'src/app/Data-service/event.service';

@Component({
  selector: 'app-services-settings',
  templateUrl: './services-settings.component.html',
  styleUrls: ['./services-settings.component.scss']
})
export class ServicesSettingsComponent implements OnInit {
  button: any;

  constructor(public dialog: MatDialog, private subService: SubscriptionService, private dataService: EventService) { }
  showLoader;
  ngOnInit() {
    this.getServiceSettingSubData();
  }
  serviceSettingData;
  openFragment(singleService,data) {
    let Fragmentdata = {
      Flag: data,
      FeeData:singleService,
      id: 2
    }

    const dialogRef = this.dialog.open(UpperSliderComponent, {
      width: '1400px',
      data: Fragmentdata,
      autoFocus: false,
      panelClass: 'dialogBox',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  getServiceSettingSubData() {
    this.showLoader = true;
    let obj = {
      'advisorId': 2808
    }
    this.subService.getSubscriptionServiceSettingsData(obj).subscribe(
      data => this.getServiceSettingSubResponse(data),
      err => this.getFilerrorResponse(err)
    )
  }
  getServiceSettingSubResponse(data) {
    console.log("service data", data)
    this.serviceSettingData = data;
    this.showLoader = false;
  }
  getFilerrorResponse(err) {
    this.dataService.openSnackBar(err, 'Dismiss')
  }
}
