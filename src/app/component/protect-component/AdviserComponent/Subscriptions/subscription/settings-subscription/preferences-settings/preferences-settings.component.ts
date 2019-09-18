import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as $ from 'jquery';
import { SubscriptionService } from '../../../subscription.service';
@Component({
  selector: 'app-preferences-settings',
  templateUrl: './preferences-settings.component.html',
  styleUrls: ['./preferences-settings.component.scss']
})
export class PreferencesSettingsComponent implements OnInit {

  constructor(private subscription:SubscriptionService) { }
  viewMode='tab1'
  ngOnInit() {
    this.viewMode="tab1";
  //   $(document).ready(function(){
  //     $('ul li a').click(function(){
  //       $('li a').removeClass("active");
  //       $(this).addClass("active");
  //   });
  // });
  this.getProfileBillerData();
}
    getProfileBillerData()
    {
    this.subscription.getPreferenceBillerProfile().subscribe(
      data => this.getProfileBillerDataResponse(data)
    )
    }
    getProfileBillerDataResponse(data)
    {
     console.log(data)
    }
}
