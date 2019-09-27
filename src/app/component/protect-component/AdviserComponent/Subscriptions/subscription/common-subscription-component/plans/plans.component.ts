import { Component, OnInit,Input} from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<PlansComponent>) { }
  @Input() componentFlag:string;
  servicePlanData=[{title:'Starter Plan',code:'PLA123',DESCRIPTION:'This plan is ideal for young people who are just starting off their financial journey and want to start saving with a smaller investment amount.',checked:false},
  {title:'Starter Plan',code:'PLA123',DESCRIPTION:'This plan is ideal for young people who are just starting off their financial journey and want to start saving with a smaller investment amount.',checked:false},
  {title:'Starter Plan',code:'PLA123',DESCRIPTION:'This plan is ideal for young people who are just starting off their financial journey and want to start saving with a smaller investment amount.',checked:false}];
  ngOnInit() {
  }
  dialogClose(){
    this.dialogRef.close();
  }
  selectServicePlan(data)
  { 
    
    (data.checked)?data.checked=false:data.checked=true;
    console.log(data)
  }
}
