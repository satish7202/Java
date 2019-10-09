import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from 'src/app/component/protect-component/common-component/confirm-dialog/confirm-dialog.component';
import {SubscriptionInject} from '../../subscription-inject.service';
import {SubscriptionService} from '../../subscription.service';
import {EventService} from '../../../../../../Data-service/event.service';

export interface PeriodicElement {
  name: string;
  docname: string;
  plan: string;

  cdate: string;
  sdate: string;
  clientsign: string;
  status: string;
}

@Component({
  selector: 'app-quotations-subscription',
  templateUrl: './quotations-subscription.component.html',
  styleUrls: ['./quotations-subscription.component.scss']
})
export class QuotationsSubscriptionComponent implements OnInit {

  constructor(public subInjectService: SubscriptionInject, private eventService: EventService,
              public dialog: MatDialog, private subService: SubscriptionService) {
  }

  displayedColumns: string[];
  dataSource;
  quotationDesignEmail;
  quotationDesign;
  dataCount;
  @Input() screenType: number;
  @Input() upperData;

  // screenType = 0; /* 0 - for All clients , 1 - Single Client */

  // @Input
  ngOnInit() {
    this.displayedColumns = ['checkbox', 'name', 'docname', 'plan', 'cdate', 'sdate', 'clientsign', 'status', 'icons'];
    if (this.screenType === 1) {
      this.displayedColumns.splice(1, 1);
    }
    this.getQuotationsData();
    this.dataCount = 0;
  }

  getQuotationsData() {
    const obj = {
      advisorId: 12345
    };
    this.subService.getSubscriptionQuotationData(obj).subscribe(
      data => this.getQuotationsDataResponse(data)
    );
  }

  getQuotationsDataResponse(data) {
    data.forEach(singleData => {
      singleData.isChecked = false;
    });
    console.log(data);
    this.dataSource = data;
  }

  deleteModal(value) {
    const dialogData = {
      data: value,
      header: 'DELETE',
      body: 'Are you sure you want to delete the document GD?',
      body2: 'This cannot be undone',
      btnYes: 'CANCEL',
      btnNo: 'DELETE',
      positiveMethod: () => {
        console.log('11111111111111111111111111111111111111111111');
      },
      negativeMethod: () => {
        console.log('2222222222222222222222222222222222222');
      }
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: dialogData,
      autoFocus: false,

    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }

  Open(value) {
    this.subInjectService.rightSideData(value);
  }

  selectedInvoice(ele) {
    console.log('invoice data', ele);
    if (ele) {
      this.dataCount--;
    } else {
      this.dataCount++;
    }
  }

  openQuotationsESign(value, state) {
    this.subInjectService.rightSliderData(state);
    this.eventService.sliderData(value);
  }

  getQuotationDesignData(data) {
    this.quotationDesign = data;
  }

  changeDisplay(value) {
    this.quotationDesign = value;
    this.quotationDesignEmail = this.quotationDesign;
  }

}
