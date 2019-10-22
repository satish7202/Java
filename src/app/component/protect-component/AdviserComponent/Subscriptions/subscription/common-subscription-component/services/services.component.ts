import {Component, OnInit, Input} from '@angular/core';
import {UpperSliderComponent} from '../upper-slider/upper-slider.component';
import {SubscriptionService} from '../../../subscription.service';
import {MatDialogRef} from '@angular/material';
import * as _ from 'lodash';
import {SubscriptionInject} from '../../../subscription-inject.service';
import {EventService} from '../../../../../../../Data-service/event.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor( private eventService: EventService,
               private subService: SubscriptionService, private subinject: SubscriptionInject) {
  }

  @Input() componentFlag: string;
  planServiceData;
  mappedData;
  @Input() upperData;

  ngOnInit() {
    this.getPlanServiceData();
    this.mappedData = [];
  }

  getPlanServiceData() {
    const obj = {
      advisorId: 12345,
      planId: this.upperData ? this.upperData.id : null
    };
    this.subService.getSettingPlanServiceData(obj).subscribe(
      data => this.getPlanServiceDataResponse(data)
    );
  }

  getPlanServiceDataResponse(data) {
    console.log('plan service', data);
    this.planServiceData = data;
  }

  selectService(data, index) {
    (data.selected) ? this.unmapPlanToService(data) : this.mapPlanToService(data, index);
    console.log(data);
  }

  dialogClose() {
    this.eventService.changeUpperSliderState({state: 'close'});
  }

  mapPlanToService(data, index) {
    data.selected = true;
    this.mappedData.push(data);
    console.log(this.mappedData.length);
  }

  unmapPlanToService(data) {
    data.selected = false;
    _.remove(this.mappedData, function(delData) {
      return delData.id == data.id;
    });
    console.log(this.mappedData);
  }

  savePlanMapToService() {
    const obj = [];
    this.mappedData.forEach(element => {
      const data = {
        advisorId: 12345,
        global: element.global,
        id: element.id,
        planId: this.upperData ? this.upperData.id : null
      };
      obj.push(data);
    });
    console.log(obj);
    this.subService.mapServiceToPlanData(obj).subscribe(
      data => console.log(data)
    );
  }
}
