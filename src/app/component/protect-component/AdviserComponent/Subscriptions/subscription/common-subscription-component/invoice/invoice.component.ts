import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SubscriptionInject} from '../../../subscription-inject.service';
import {FormBuilder, Validators} from '@angular/forms';

export interface PeriodicElement {
  document: string;
  plan: string;
  date: string;
  sdate: string;
  cdate: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    document: 'Scope of work',
    plan: 'Starter plan',
    date: '25/08/2019',
    sdate: '25/08/2019',
    cdate: '25/08/2019',
    status: 'READY TO SEND'
  },

];

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor(public subInjectService: SubscriptionInject, private fb: FormBuilder) {
    this.dataSub = this.subInjectService.singleProfileData.subscribe(
      data => this.getInvoiceData(data)
    );
    this.subInjectService.rightSideBarData.subscribe(
      data => this.getRecordPayment(data)
    );
  }
  dataSub: any;
  storeData;
  showRecord: any;
  clientInvoice: any;
  invData: any;
  showEdit: boolean;
  isamountValid: boolean;
  ischargeValid: boolean;
  istdsValid: boolean;
  ismodeValid: boolean;

  @Input() invoiceData;
  @Input() invoiceInSub;
  @Input() clientData;
  @Input() invoiceValue
  @Output() valueChange = new EventEmitter();

  @Input() invoiceTab;
  rPayment;
  editPayment
  editAdd1;
  editAdd2;

  displayedColumns: string[] = ['checkbox', 'document', 'plan', 'date', 'sdate', 'cdate', 'status', 'icons'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
    console.log('this.invoiceSubscription', this.invoiceInSub);
    this.showRecord = false;
    this.showEdit = false;
    this.editAdd1 = false
    this.editAdd2 = false
    console.log("invoiceValue+++++++++++",this.invoiceValue)
    if(this.invoiceValue == 'edit'){
      this.showEdit = true;
      this.storeData = []
    }
  }
  onclickChangeAdd1(editVlaue){
    if(editVlaue == false){
      this.editAdd1 = true
    }else{
      this.editAdd1 = false
    }
  }
  onclickChangeAdd2(editVlaue){
    if(editVlaue == false){
      this.editAdd2 = true
    }else{
      this.editAdd2 = false
    }
  }
  getRecordPayment(data) {
    console.log('payee data', data);
    this.rPayment = this.fb.group({
      amountReceive: [data.amountReceive, [Validators.required]],
      charges: [data.charges, [Validators.required]],
      tds: [data.tds, [Validators.required]],
      paymentDate: [data.paymentDate],
      paymentMode: [data.paymentMode, [Validators.required]],
      gstTreatment: [data.gstTreatment],
      notes: [data.notes]
    });
    this.getFormControl().amountReceive.maxLength = 10;
    this.getFormControl().charges.maxLength = 10;
    this.getFormControl().tds.maxLength = 10;
    this.getFormControl().paymentMode.maxLength = 10;
    this.getFormControl().notes.maxLength = 10;

  }
  getInvoiceData(data) {
    this.storeData = data;
    console.log(this.storeData)
    this.editPayment =  this.fb.group({
      clientName : [data.clientName, [Validators.required]],
      billerAddress:[data.billerAddress, [Validators.required]],
      billingAddress:[data.billingAddress, [Validators.required]],
      invoiceNumber:[data.invoiceNumber, [Validators.required]],
      invoiceDate:[data.invoiceDate, [Validators.required]],
      discount:[data.discount,[Validators.required]]
      
    })
    this.getFormControledit().clientName.maxLength = 10;
    this.getFormControledit().billerAddress.maxLength = 150;
    this.getFormControledit().billingAddress.maxLength = 150;
    this.getFormControledit().invoiceNumber.maxLength = 10;
  }

  getFormControledit() {
    return this.editPayment.controls;
  }
  getFormControl() {
    return this.rPayment.controls;
  }
 saveFormData(state) {
    if (this.rPayment.controls.amountReceive.invalid) {
      this.isamountValid = true;
      return;
    } else if (this.rPayment.controls.charges.invalid) {
      this.ischargeValid = true;
      return;
    } else if (this.rPayment.controls.tds.invalid) {
      this.istdsValid = true;
      return;
    } else if (this.rPayment.controls.paymentMode.invalid) {
      this.ismodeValid = true;
      return;
    } else {
      const obj = {
        advisorId: 12345,
        amountReceieve: this.rPayment.controls.amountReceive.value,
        chargeIfAny: this.rPayment.controls.charges.value,
        TDS: this.rPayment.controls.tds.value,
        paymentDate: this.rPayment.controls.paymentDate.value,
        paymentMode: this.rPayment.controls.paymentMode.value,
        gstTreatment: this.rPayment.controls.gstTreatment.value,
        notes: this.rPayment.controls.notes.value,
      };
      console.log('jifsdfoisd', obj);
    }
    this.cancel();
  }
  recordPayment() {
    this.showRecord = true;
  }

  cancel() {
    this.showRecord = false;
  }
  formatter(data)
  {
    data=Math.round(data);
    return data;
  }
  passInvoice(data,event) {
    console.log(data);
    this.storeData = data;
  }

  editInvoice() {
    this.showEdit = true;
  }

  closeEditInv() {
    this.showEdit = false;
  }

  Close(state) {
    if (this.showRecord == true) {
      this.showRecord = false;
    } else {
      (this.invoiceTab == 'invoiceUpperSlider') ? this.subInjectService.rightSliderData(state) : this.subInjectService.rightSideData(state);
      this.valueChange.emit(this.invoiceInSub);
    }

  }
}
