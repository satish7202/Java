import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Close()
  {
    $('#myRightSidenav').css({"width" : ""});
    $('#myRightSidenav').css({"transition":'0.2s'})
  }

}
