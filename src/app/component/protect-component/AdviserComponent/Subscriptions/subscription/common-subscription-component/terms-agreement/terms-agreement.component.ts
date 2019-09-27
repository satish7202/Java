import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {SubscriptionInject} from '../../../subscription-inject.service';
import {HowToUseDialogComponent} from '../how-to-use-dialog/how-to-use-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-terms-agreement',
  templateUrl: './terms-agreement.component.html',
  styleUrls: ['./terms-agreement.component.scss']
})
export class TermsAgreementComponent implements OnInit {

  constructor(public subInjectService: SubscriptionInject, public dialog: MatDialog) {
  }

  mailForm = new FormGroup({
    mail_body: new FormControl(''),

  });

  ngOnInit() {
  }

  Close(value) {
    this.subInjectService.rightSideData(value);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.mailForm.value);
  }

  openDialog(data) {
    const Fragmentdata = {
      Flag: data,
    };
    const dialogRef = this.dialog.open(HowToUseDialogComponent, {
      width: '40%',
      data: Fragmentdata,
      autoFocus: false,

    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }
}
