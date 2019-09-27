import { Component, OnInit, Input } from '@angular/core';
import { InvoicesSubscriptionComponent } from '../invoices-subscription.component';
import { ConfirmDialogComponent } from 'src/app/component/protect-component/common-component/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-invoice-pdf-document',
  templateUrl: './invoice-pdf-document.component.html',
  styleUrls: ['./invoice-pdf-document.component.scss']
})
export class InvoicePdfDocumentComponent implements OnInit {

  constructor(public invoiveSub:InvoicesSubscriptionComponent,public dialog:MatDialog) { }
  showRecord;
  showEdit;
  @Input() singleInvoiceData;

  ngOnInit() {
    this.showRecord = false;
    this.showEdit= false;
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  Close()
  {
   this.invoiveSub.showPdfInvoice=false;
  }
  recordPayment()
  {
    this.showRecord = true;
  }
  cancel()
  {
    this.showRecord =false;
    this.showEdit=false;
  }
  editInvoice()
  {
    this.showEdit=true;
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
