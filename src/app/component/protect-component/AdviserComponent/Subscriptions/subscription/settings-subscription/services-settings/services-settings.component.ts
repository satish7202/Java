import { Component, OnInit } from '@angular/core';
import { UpperSliderComponent } from '../../common-subscription-component/upper-slider/upper-slider.component';
import { MatDialog } from '@angular/material';
import { SubscriptionService } from '../../../subscription.service';

@Component({
  selector: 'app-services-settings',
  templateUrl: './services-settings.component.html',
  styleUrls: ['./services-settings.component.scss']
})
export class ServicesSettingsComponent implements OnInit {
  button: any;

  constructor(public dialog: MatDialog,private subService: SubscriptionService) { }

  ngOnInit() {
    this.getServiceSettingSubData();
  }
  serviceSettingData;
  openFragment(data) {
    let Fragmentdata = {
      Flag: data,
      id:2
    }
   
    const dialogRef = this.dialog.open(UpperSliderComponent, {
       width: '1400px',
       data: Fragmentdata,
       autoFocus:false,
       panelClass:'dialogBox',
    });
  
    dialogRef.afterClosed().subscribe(result => {
  
    });
  }

  getServiceSettingSubData()
  {
   let obj={
     'advisorId':4747
   }
   this.subService.getSubscriptionServiceSettingsData(obj).subscribe(
     data =>this.getServiceSettingSubResponse(data)
   )
  }
  getServiceSettingSubResponse(data)
  {
    console.log("service data",data)
   this.serviceSettingData=data;
  }
}
