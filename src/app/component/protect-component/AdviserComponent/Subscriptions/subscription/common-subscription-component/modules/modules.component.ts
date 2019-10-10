import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SubscriptionService } from '../../../subscription.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ModulesComponent>,private subService: SubscriptionService) { }  
  @Input() upperData;
  ModuleData;
  mappedData = [];
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
    this.ModuleData=data
    
  }
  selectModule(data)
  {
    (data.checked)?this.unmapModuleToService(data):this.mapModuleToService(data)
    console.log(data)
  }
  mapModuleToService(data){
    data.checked=true;
    this.mappedData.push(data);
    console.log(this.mappedData.length)
  }
  unmapModuleToService(data)
  {
    data.checked=false
    _.remove(this.mappedData, delData => delData.subModuleId === data.subModuleId);
    console.log(this.mappedData.length)
  }
}
