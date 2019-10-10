import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { SubscriptionInject } from '../../../subscription-inject.service';
import { ConfirmDialogComponent } from 'src/app/component/protect-component/common-component/confirm-dialog/confirm-dialog.component';
import { EventService } from 'src/app/Data-service/event.service';
import { SubscriptionPopupComponent } from '../subscription-popup/subscription-popup.component';
import { SubscriptionService } from '../../../subscription.service';
import * as _ from 'lodash';
import { AddDocumentComponent } from '../add-document/add-document.component';

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
  quotationDesignEmail: any;
  @Input() upperData;
  constructor(public dialogRef: MatDialogRef<DocumentComponent>, public subInjectService: SubscriptionInject,
    private eventService: EventService, public dialog: MatDialog, private subService: SubscriptionService) {
    this.subInjectService.rightSliderDocument.subscribe(
      data => this.getDocumentsDesignData(data)
    );
  }

  documentDesign;
  planDocumentData;
  serviceDocumentData;
  mappedData = [];
  @Input() componentFlag: string;

  displayedColumns: string[] = ['checkbox', 'document', 'plan', 'service', 'date', 'sdate', 'cdate', 'status', 'icons'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
    this.getplanDocumentData();
    this.getServiceDocumentData();
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
    this.quotationDesignEmail = this.documentDesign;

  }

  getplanDocumentData() {
    const obj = {
      advisorId: 12345,
      planId: this.upperData.id
    };
    this.subService.getPlanDocumentsData(obj).subscribe(
      data => this.getplanDocumentDataResponse(data)
    );

  }

  getplanDocumentDataResponse(data) {
    data.forEach(singleData => {
      singleData.isChecked = false;
    });
    console.log("document Data", data)
    this.planDocumentData = data;
  }
  getServiceDocumentData() {
    let obj = {
      'advisorId': 12345
    }
    this.subService.getMapDocumentToService(obj).subscribe(
      data => this.getServiceDocumentDataResponse(data)
    )
  }
  getServiceDocumentDataResponse(data) {
    console.log("service Documents", data.documentList)
    this.serviceDocumentData = data.documentList;
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
  saveMappingDocumentToPlans() {
    if (this.mappedData.length >= 0) {
      let obj = [];
      this.mappedData.forEach(element => {
        let data = {
          'advisorId': 12345,
          'documentRepositoryId': element.documentRepositoryId,
          'mappingId': this.upperData.id
        }
        obj.push(data)
      })
      this.subService.mapDocumentsToPlanData(obj).subscribe(
        data => console.log("sucessful")
      )
      this.dialogRef.close();
    }
    else {
      return;
    }
  }
  savePlanMapToDocument() {
    const obj = [];
    this.mappedData.forEach(element => {
      const data = {
        advisorId: 12345,
        documentRepositoryId: element.documentRepositoryId,
        planId: 10
      };
      obj.push(data);
    });
    this.subService.mapDocumentsToPlanData(obj).subscribe(
      data => console.log(data)
    );
  }
  display(data) {
    console.log(data)
    this.ngOnInit()
  }
}
