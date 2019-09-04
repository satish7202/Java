import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
openNav() {
      document.getElementById("myRightSidenav").style.width = "250px";
           }
  
closeNav() {
    document.getElementById("myRightSidenav").style.width = "0";
           }
}
