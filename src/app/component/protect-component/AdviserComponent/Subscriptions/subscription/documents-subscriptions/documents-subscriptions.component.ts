import { Component, OnInit } from '@angular/core';
import { SubscriptionInject } from '../../subscription-inject.service';
import { ConfirmDialogComponent } from 'src/app/component/protect-component/common-component/confirm-dialog/confirm-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { EventService } from 'src/app/Data-service/event.service';
import { SubscriptionService } from '../../subscription.service';


export interface PeriodicElement {
  name: string;
  docname:string;
  plan:string;
  servicename:string;
  cdate:string;
  sdate: string;
  clientsign: string;
  status:string;
  documentText:string;
} 
// const ELEMENT_DATA: PeriodicElement[] = [
//   {name: 'Neelam Singh',docname: 'Scope of work', plan: 'Starter plan', servicename: 'AUM Linked fee', cdate: '25/08/2019', sdate: '25/08/2019', clientsign: '25/08/2019',status:'READY TO SEND',documentText:'hello'},
   
// ];
@Component({
  selector: 'app-documents-subscriptions',  
  templateUrl: './documents-subscriptions.component.html',
  styleUrls: ['./documents-subscriptions.component.scss']
})
export class DocumentsSubscriptionsComponent implements OnInit {
  dataSource: any;

  constructor(public subInjectService:SubscriptionInject, public dialog:MatDialog,public eventService:EventService,public subscription:SubscriptionService ) { }

  ngOnInit() {
    this.getdocumentSubData();
  }
  displayedColumns: string[] = ['name','docname','plan', 'servicename', 'cdate','sdate','clientsign','status','icons'];
  // dataSource = ELEMENT_DATA;
  Open(value,state,data)
  {
    this.eventService.sidebarData(value)
    this.subInjectService.rightSideData(state);    
    this.subInjectService.addSingleProfile(data);
  }
//   Open(value)
//  {
//    this.subInjectService.rightSideData(value);
//  }
 

  getdocumentSubData() {
      const obj = {
        advisorId: 12345, // pass here advisor id for Invoice advisor
        clientId: 0,
        flag:3
      };

      this.subscription.getDocumentData(obj).subscribe(
        data => this.getdocumentResponseData(data)
      );
    }
    getdocumentResponseData(data){
    console.log(data);
    data.forEach(singleData => {
      singleData.documentText = singleData.docText;
    });
    this.dataSource=data;
    }
deleteModal(value)
  {
    let dialogData = {
      data:value,
      header: 'DELETE',
      body:'Are you sure you want to delete the document?',
      body2:'This cannot be undone',
      btnYes:'CANCEL',
      btnNo:'DELETE'
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
       width: '400px',
       data: dialogData,
       autoFocus:false,

    });
  
    dialogRef.afterClosed().subscribe(result => {
  
    });
  
  }
}
