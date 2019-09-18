import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-subscription-modifiy-fee-structure',
  templateUrl: './subscription-modifiy-fee-structure.component.html',
  styleUrls: ['./subscription-modifiy-fee-structure.component.scss']
})
export class SubscriptionModifiyFeeStructureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Close()
  {
    $('#myRightSidenav').css({"width" : ""});
    // $('#myRightSidenav').css({"transition":'0.2s'})
  }
} 
