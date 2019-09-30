import { Component, OnInit } from '@angular/core';
import { UpperSliderComponent } from '../../common-subscription-component/upper-slider/upper-slider.component';
import { MatDialog } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SubscriptionService } from '../../../subscription.service';
// import { MatDialog } from '../../../../../../overridden/dialog';

@Component({
  selector: 'app-plans-settings',
  templateUrl: './plans-settings.component.html',
  styleUrls: ['./plans-settings.component.scss']
})
export class PlansSettingsComponent implements OnInit {
  button: any;

  constructor( public dialog: MatDialog, private subService: SubscriptionService) { }

  ngOnInit() {
    this.getSettingsPlanData();
  }
  planSettingData;
  getSettingsPlanData()
  {
    let obj={
      'advisorId':4747
    }
    this.subService.getSubscriptionPlanSettingsData(obj).subscribe(
      data =>this.getSettingsPlanResponse(data)
    )
  }
  getSettingsPlanResponse(data)
  {
    console.log("get plan",data)
   this.planSettingData=data;
  }
  openFragment(data) {
    let Fragmentdata = {
      Flag: data,
      id:1
    }
 
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
  }
}
