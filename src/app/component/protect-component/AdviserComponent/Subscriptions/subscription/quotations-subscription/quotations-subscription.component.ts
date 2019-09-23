import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/component/protect-component/common-component/confirm-dialog/confirm-dialog.component';
import { subscriptionInject } from '../../subscription-inject.service';
import { SubscriptionService } from '../../subscription.service';

export interface PeriodicElement {
  name: string;
  docname:string;
  plan:string;
  
  cdate:string;
  sdate: string;
  clientsign: string;
  status:string;
} 

@Component({
  selector: 'app-quotations-subscription',
  templateUrl: './quotations-subscription.component.html',
  styleUrls: ['./quotations-subscription.component.scss']
})
export class QuotationsSubscriptionComponent implements OnInit {

  constructor(public subInjectService:subscriptionInject , public dialog: MatDialog,private subService:SubscriptionService) { }

  ngOnInit() {
    this.getQuotationsData();
  }
  displayedColumns: string[] = ['name', 'docname', 'plan', 'cdate','sdate','clientsign','status','icons'];
  dataSource;
  
  getQuotationsData()
  {
    let obj={
      'advisorId':12345
    }
    this.subService.getSubscriptionQuotationData(obj).subscribe(
      data=>this.getQuotationsDataResponse(data)
    )
  }
  getQuotationsDataResponse(data)
  {
    console.log(data);
   this.dataSource=data
  }
  openConfirmDialog(){
    let dialogData = {
      header: 'Are you sure you want to delete?',
      body:'if you are interested in some quick pretty solution with css format done',
      btnYes:'yes',
      btnNo:'No'
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
       width: '400px',
       data: dialogData,
       autoFocus:false,

    });
  
    dialogRef.afterClosed().subscribe(result => {
  
    });
  
  }

  Open(value)
  {
    this.subInjectService.rightSideData(value);
  }
}
