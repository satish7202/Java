import { Component, OnInit } from '@angular/core';
import { subscriptionInject } from '../../../subscription-inject.service';
import { EventService } from 'src/app/Data-service/event.service';

@Component({
  selector: 'app-fee-structure',
  templateUrl: './fee-structure.component.html',
  styleUrls: ['./fee-structure.component.scss']
})
export class FeeStructureComponent implements OnInit {

  constructor(public subInjectService:subscriptionInject,private eventService:EventService) { }

  ngOnInit() {
  }
  feeStructureServiceData=[
    {type:'Fixed fee',Description:'Choose this fee type if you want to charge a fixed fee. E.g. for Plan writing etc.',checked:false},
    {type:'Fixed fee',Description:'Choose this fee type if you want to charge a fixed fee. E.g. for Plan writing etc.',checked:true},
    // {type:'Fixed fee',Description:'Choose this fee type if you want to charge a fixed fee. E.g. for Plan writing etc.'}
  ]
  openPlanSliderFee(value,state)
  { 
    this.eventService.sliderData(value);
    this.subInjectService.rightSliderData(state)
  }
  selectFees(data)
  { 
    (data.checked)?data.checked=false:data.checked=true;
  }
}
