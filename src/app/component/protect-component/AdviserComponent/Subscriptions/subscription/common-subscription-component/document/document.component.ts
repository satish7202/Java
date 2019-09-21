import { Component, OnInit,Input } from '@angular/core';
import { UpperSliderComponent } from '../upper-slider/upper-slider.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { subscriptionInject } from '../../../subscription-inject.service';
import { ConfirmDialogComponent } from 'src/app/component/protect-component/common-component/confirm-dialog/confirm-dialog.component';
import { EventService } from 'src/app/Data-service/event.service';
export interface PeriodicElement {
  document: string;
  plan: string;
  service:string;
  date: string;
  sdate: string;
  cdate: string;
  status:string;
 } 
 const ELEMENT_DATA: PeriodicElement[] = [
  {document: "Scope of work", plan: 'Starter plan',service:'AUM Linked fee', date: "25/08/2019", sdate: '25/08/2019',cdate: '25/08/2019',status:'READY TO SEND'},
  
]; 
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  documentDesign;
  constructor(public dialogRef:MatDialogRef<DocumentComponent>,public subInjectService:subscriptionInject,private eventService:EventService,public dialog: MatDialog) 
  {
    this.subInjectService.rightSliderDocument.subscribe(
      data=>this.getDocumentsDesignData(data)
    )
   }
  @Input() componentFlag:string;
  ngOnInit() {
    this.documentDesign='true'
  }
  openDocumentESign(value,state)
  {
    this.subInjectService.rightSliderData(state)
    this.eventService.sliderData(value)
  }
  getDocumentsDesignData(data){
    this.documentDesign=data;
  }
  changeDisplay(value)
  {
    this.documentDesign=value;
  }
  deleteModal()
  {
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
  displayedColumns: string[] = ['checkbox','document','plan','service', 'date', 'sdate','cdate','status','icons'];
  dataSource = ELEMENT_DATA;
}
