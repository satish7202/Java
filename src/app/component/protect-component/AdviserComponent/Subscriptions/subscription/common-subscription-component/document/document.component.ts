import {Component, OnInit, Input} from '@angular/core';
import {MatDialogRef, MatDialog} from '@angular/material';
import {SubscriptionInject} from '../../../subscription-inject.service';
import {ConfirmDialogComponent} from 'src/app/component/protect-component/common-component/confirm-dialog/confirm-dialog.component';
import {EventService} from 'src/app/Data-service/event.service';
import {SubscriptionPopupComponent} from '../subscription-popup/subscription-popup.component';
import {SubscriptionService} from '../../../subscription.service';
import * as _ from 'lodash';
import {AddDocumentComponent} from '../add-document/add-document.component';

export interface PeriodicElement {
  document: string;
  plan: string;
  service: string;
  date: string;
  sdate: string;
  cdate: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    document: 'Scope of work',
    plan: 'Starter plan',
    service: 'AUM Linked fee',
    date: '25/08/2019',
    sdate: '25/08/2019',
    cdate: '25/08/2019',
    status: 'READY TO SEND'
  },

];

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DocumentComponent>, public subInjectService: SubscriptionInject,
              private eventService: EventService, public dialog: MatDialog, private subService: SubscriptionService) {
    this.subInjectService.rightSliderDocument.subscribe(
      data => this.getDocumentsDesignData(data)
    );
  }

  documentDesign;
  planDocumentData;
  mappedData = [];

  @Input() componentFlag: string;

  displayedColumns: string[] = ['checkbox', 'document', 'plan', 'service', 'date', 'sdate', 'cdate', 'status', 'icons'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
    this.getplanDocumentData();
    this.documentDesign = 'true';
  }

  openDocument(data) {
    const Fragmentdata = {
      Flag: data,
    };
    const dialogRef = this.dialog.open(AddDocumentComponent, {
      width: '70%',
      data: Fragmentdata,
      autoFocus: false,

    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openPopup(data) {
    const Fragmentdata = {
      Flag: data,
    };
    const dialogRef = this.dialog.open(SubscriptionPopupComponent, {
      width: '70%',
      height: '100%',
      data: Fragmentdata,
      autoFocus: false,

    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  dialogClose() {
    this.dialogRef.close();
  }

  selectDocument(data) {
    (data.selected) ? this.unmapDocumentToPlan(data) : this.mapDocumentToPlan(data);
  }

  mapDocumentToPlan(data) {
    data.selected = true;
    this.mappedData.push(data);
    console.log(this.mappedData.length);
  }

  unmapDocumentToPlan(data) {
    data.selected = false;
    _.remove(this.mappedData, delData => delData.documentRepositoryId === data.documentRepositoryId);
    console.log(this.mappedData.length);
  }

  openDocumentESign(value, state) {
    this.subInjectService.rightSliderData(state);
    this.eventService.sliderData(value);
  }

  getDocumentsDesignData(data) {
    this.documentDesign = data;
  }

  changeDisplay(value) {
    this.documentDesign = value;
  }

  getplanDocumentData() {
    const obj = {
      advisorId: 2735,
      planId: 10
    };
    this.subService.getPlanDocumentsData(obj).subscribe(
      data => this.getplanDocumentDataResponse(data)
    );
  }

  getplanDocumentDataResponse(data) {
    this.planDocumentData = data;
  }

  deleteModal(value) {
    const dialogData = {
      data: value,
      header: 'DELETE',
      body: 'Are you sure you want to delete the document?',
      body2: 'This cannot be undone',
      btnYes: 'CANCEL',
      btnNo: 'DELETE'
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: dialogData,
      autoFocus: false,

    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }

  savePlanMapToDocument() {
    const obj = [];
    this.mappedData.forEach(element => {
      const data = {
        advisorId: 2735,
        documentRepositoryId: element.documentRepositoryId,
        planId: 10
      };
      obj.push(data);
    });
    this.subService.mapDocumentsToPlanData(obj).subscribe(
      data => console.log(data)
    );
  }
}
