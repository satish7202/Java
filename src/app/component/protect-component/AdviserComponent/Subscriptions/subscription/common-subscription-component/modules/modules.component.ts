import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SubscriptionService } from '../../../subscription.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ModulesComponent>,private subService: SubscriptionService) { }  
  @Input() upperData;
  financialPlanningData;
  onlineTransaction;
  multiAssetView;
  ngOnInit() {
    this.getModuleData();
  }
  dialogClose(){
    this.dialogRef.close();
  }
  getModuleData()
  {
    let obj={
      "serviceId":this.upperData.id
    }
    this.subService.getModuleServiceData(obj).subscribe(
      data =>this.getModuleDataResponse(data)
    )
  }
  getModuleDataResponse(data)
  {
     
    console.log("Module data",data)
  }
  selectModule(data)
  {
    (data.checked)?data.checked=false:data.checked=true;
  }
}
