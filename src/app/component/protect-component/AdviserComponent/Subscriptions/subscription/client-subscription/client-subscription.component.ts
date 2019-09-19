import { Component, OnInit } from '@angular/core';
import { UpperSliderComponent } from '../common-subscription-component/upper-slider/upper-slider.component';
import { MatDialog } from '@angular/material';
import * as $ from 'jquery';
import { SubscriptionComponent } from '../subscription.component';
export interface PeriodicElement {
  name: string;
  email: string;
  num: number;
  balance: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Drasti Zaveri', email: 'drasti@futurewise.co.in', num: 9987455665, balance: 'Rs.20,000'},
  {name: 'Ajaykumar', email: 'ronak.hindocha@futurewise.co.in', num: 9987455665, balance: '0'},
  {name: 'Sarvesh Shinde', email: 'sarvesh@gmail.com', num: 9987455665, balance: 'Rs.7,000'},
 
];


@Component({
  selector: 'app-client-subscription',
  templateUrl: './client-subscription.component.html',
  styleUrls: ['./client-subscription.component.scss']
})
export class ClientSubscriptionComponent implements OnInit {

  constructor(public dialog:MatDialog,public sub:SubscriptionComponent) { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['name','email', 'num', 'balance'];
  dataSource = ELEMENT_DATA;
 
 
  help(value)
   {
    this.sub.subscriptionTab=value;
    this.sub.help();
  }
  openFragment(data) {
    let Fragmentdata = {
      Flag: data,
      id:1
    }

    const dialogRef = this.dialog.open(UpperSliderComponent, {
       width: '1400px',
       data: Fragmentdata,
       autoFocus:false,
       panelClass:'dialogBox',
    });
  
    dialogRef.afterClosed().subscribe(result => {
  
    });
  }
  
}
