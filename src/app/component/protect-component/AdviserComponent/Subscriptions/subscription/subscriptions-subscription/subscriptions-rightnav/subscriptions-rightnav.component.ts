import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-subscriptions-rightnav',
  templateUrl: './subscriptions-rightnav.component.html',
  styleUrls: ['./subscriptions-rightnav.component.scss']
})
export class SubscriptionsRightnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Close()
  {
    $('#myRightSidenav').css({"width" : ""});
    $('#myRightSidenav').css({"transition":'0.2s'})
  }
}
