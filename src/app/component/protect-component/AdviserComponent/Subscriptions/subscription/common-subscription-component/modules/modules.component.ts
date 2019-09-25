import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ModulesComponent>) { }
  financialPlanningData=[{name:'Goal tracker',checked:false},{name:'Insurance planning',checked:false},{name:'Risk profiling',checked:false},{name:'Risk profiling',checked:false}];
  onlineTransaction=[{name:'Risk profiling',checked:false},{name:'Insurance planning',checked:false},{name:'Risk profiling',checked:false}]
  multiAssetView=[{name:'Risk profiling',checked:false},{name:'Risk profiling',checked:false},{name:'Risk profiling',checked:false}]
  

  ngOnInit() {
  }
  dialogClose(){
    this.dialogRef.close();
  }
  selectModule(data)
  {
    (data.checked)?data.checked=false:data.checked=true;
  }
}
