import { Component, OnInit } from '@angular/core';
import { subscriptionInject } from '../../../subscription-inject.service';

@Component({
  selector: 'app-plan-rightslider',
  templateUrl: './plan-rightslider.component.html',
  styleUrls: ['./plan-rightslider.component.scss']
})
export class PlanRightsliderComponent implements OnInit {

  constructor(public subInjectService:subscriptionInject ) { }

  ngOnInit() {
  }
  Close(state)
  {
    this.subInjectService.rightSliderData(state)
  }
  planSettingData=[{'title':'Starter Plan','code':'PLA123','DESCRIPTION':'This plan is ideal for young people who are just starting off their financial journey and want to start saving with a smaller investment amount.','SERVICES':'2','DOCUMENTS':'1'},
                   {'title':'Next Level Plan','code':'PLA124','DESCRIPTION':'This plan is ideal for young people who are just starting off their financial journey and want to start saving with a smaller investment amount.','SERVICES':'2','DOCUMENTS':'1'},
                   {'title':'Power Plan','code':'PLA125','DESCRIPTION':'This plan is ideal for young people who are just starting off their financial journey and want to start saving with a smaller investment amount.','SERVICES':'2','DOCUMENTS':'1'}]
}
