import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  leftBar()
  {
    $("#myRightSidenav").css("width","60%");
  }
}
