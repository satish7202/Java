import { Component, OnInit,Input } from '@angular/core';
import { UpperSliderComponent } from '../upper-slider/upper-slider.component';
import { SubscriptionService } from '../../../subscription.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private upper:UpperSliderComponent,private subService:SubscriptionService) { }
  @Input() componentFlag:string;
  planServiceData;
  ngOnInit() {
  this.getPlanServiceData();
  }
   getPlanServiceData()
   {
     let obj={
       'advisorId':4747,
       'planId':0
     }
     this.subService.getSettingPlanServiceData(obj).subscribe(
       data =>this.getPlanServiceDataResponse(data)
     )
   }
   getPlanServiceDataResponse(data)
   {
     console.log(data)
     this.planServiceData=data;
   }
   selectService(data)
   {
    
     (data.selected)?data.selected=false:data.selected=true;
     console.log(data)
   }
}
