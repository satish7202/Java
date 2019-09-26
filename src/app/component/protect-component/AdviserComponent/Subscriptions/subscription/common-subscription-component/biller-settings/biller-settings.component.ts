import { Component, OnInit } from '@angular/core';
import { subscriptionInject } from '../../../subscription-inject.service';

@Component({
  selector: 'app-biller-settings',
  templateUrl: './biller-settings.component.html',
  styleUrls: ['./biller-settings.component.scss']
})
export class BillerSettingsComponent implements OnInit {

  constructor(public subInjectService:subscriptionInject) { }

  ngOnInit() {
  }
  Close(state)
  {
    this.subInjectService.rightSideData(state);
    this.subInjectService.rightSliderData(state); 
  }
  planSettingData=[{'title':'RONAK HINDOCHA','code':'ARN123','Address':'#46,Street 1,Lokhandwala Township,Borivali East,Mumbai 400 066'},
                   {'title':'RUPA HINDOCHA','code':'ARN124','Address':'#46,Street 1,Lokhandwala Township,Borivali East,Mumbai 400 066'},
                   {'title':'DHYAAN HINDOCHA','code':'ARN125','Address':'#46,Street 1,Lokhandwala Township,Borivali East,Mumbai 400 066'}]
}
