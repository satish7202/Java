import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-add-structure',
  templateUrl: './add-structure.component.html',
  styleUrls: ['./add-structure.component.scss']
})
export class AddStructureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeNav() {
    $('#myRightSidenav').css({"width" : ""});
    $('#myRightSidenav').css({"transition":'0.2s'})
  }
}
