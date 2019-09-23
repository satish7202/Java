import { Component, OnInit } from '@angular/core';
import { subscriptionInject } from '../../../subscription-inject.service';
import { EventService } from 'src/app/Data-service/event.service';

import { ConfirmDialogComponent } from 'src/app/component/protect-component/common-component/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { SubscriptionPopupComponent } from '../subscription-popup/subscription-popup.component';
export interface PeriodicElement {
  document: string;
  plan: string;
  date: string;
  sdate: string;
  cdate: string;
  status:string;
 } 
 const ELEMENT_DATA: PeriodicElement[] = [
  {document: "Scope of work", plan: 'Starter plan', date: "25/08/2019", sdate: '25/08/2019',cdate: '25/08/2019',status:'READY TO SEND'},
  
];

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss']
})
export class QuotationsComponent implements OnInit {

  constructor(public subInjectService:subscriptionInject,private eventService:EventService,public dialog: MatDialog) {
    this.subInjectService.closeRightSlider.subscribe(
      data => this.getQuotationDesignData(data)
    )
   }
  quotationDesign;
  ngOnInit() {
   this.quotationDesign='true';
  }
  displayedColumns: string[] = ['checkbox','document','plan', 'date', 'sdate','cdate','status','icons'];
  dataSource = ELEMENT_DATA;
  openQuotationsESign(value,state)
  {
    this.subInjectService.rightSliderData(state)
    this.eventService.sliderData(value)
  } 
  getQuotationDesignData(data)
  {
    this.quotationDesign=data;
  }
  changeDisplay(value)
  {
    this.quotationDesign=value;
  }
  deleteModal(value)
  {
    let dialogData = {
      data:value,
      header: 'DELETE',
      body:'Are you sure you want to delete the document?',
      body2:'This cannot be undone',
      btnYes:'CANCEL',
      btnNo:'DELETE',
      positiveMethod:() => {
        console.log("11111111111111111111111111111111111111111111");
      },
      negativeMethod:() => {
        console.log("2222222222222222222222222222222222222");
      }
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
       width: '400px',
       data: dialogData,
       autoFocus:false,

    });
  
    dialogRef.afterClosed().subscribe(result => {
  
    });
  
  }
  openPopup(data){
    let Fragmentdata = {
      Flag: data,
    }
    const dialogRef = this.dialog.open(SubscriptionPopupComponent, {
      width: '70%',
      height:'100%',
      data: Fragmentdata,
      autoFocus:false,
     
   });
   dialogRef.afterClosed().subscribe(result => {

  });
  }
}
