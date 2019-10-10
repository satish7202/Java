import {Component, OnInit} from '@angular/core';
import {UpperSliderComponent} from '../../common-subscription-component/upper-slider/upper-slider.component';
import {MatDialog} from '@angular/material';
import {SubscriptionService} from '../../../subscription.service';
import {EventService} from 'src/app/Data-service/event.service';
import {SubscriptionInject} from '../../../subscription-inject.service';

@Component({
  selector: 'app-plans-settings',
  templateUrl: './plans-settings.component.html',
  styleUrls: ['./plans-settings.component.scss']
})
export class PlansSettingsComponent implements OnInit {
  button: any;

  constructor(public dialog: MatDialog, private subService: SubscriptionService, private dataService: EventService,
              private subinject: SubscriptionInject) {
  }

  showLoader;

  ngOnInit() {
    this.getSettingsPlanData();
    // this.openFragment('', 'plan');
  }

  planSettingData;

  getSettingsPlanData() {
    this.showLoader = true;
    let obj = {
      'advisorId': 12345
    }
    this.subService.getSubscriptionPlanSettingsData(obj).subscribe(
      data => this.getSettingsPlanResponse(data),
      err => this.getFilerrorResponse(err)
    )
  }

  getSettingsPlanResponse(data) {
    console.log("get plan", data)
    this.planSettingData = data;
    this.showLoader = false;
  }

  getFilerrorResponse(err) {
    this.dataService.openSnackBar(err, 'Dismiss')
  }

  openFragment(singlePlan, data) {
    this.subinject.pushUpperData(singlePlan)

    let Fragmentdata = {
      Flag: data,
      planData: singlePlan
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
}
