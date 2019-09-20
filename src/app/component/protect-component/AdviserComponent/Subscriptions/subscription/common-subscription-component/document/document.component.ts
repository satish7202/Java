import { Component, OnInit,Input } from '@angular/core';
import { UpperSliderComponent } from '../upper-slider/upper-slider.component';
import { MatDialogRef } from '@angular/material';
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

  constructor(public dialogRef:MatDialogRef<DocumentComponent>) { }
  @Input() componentFlag:string;
  ngOnInit() {
    
  }
  displayedColumns: string[] = ['checkbox','document','plan','service', 'date', 'sdate','cdate','status','icons'];
  dataSource = ELEMENT_DATA;
}
