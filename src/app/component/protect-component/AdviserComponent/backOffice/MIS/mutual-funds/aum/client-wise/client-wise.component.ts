import { Component, OnInit } from '@angular/core';
import { AumComponent } from '../aum.component';

@Component({
  selector: 'app-client-wise',
  templateUrl: './client-wise.component.html',
  styleUrls: ['./client-wise.component.scss']
})
export class ClientWiseComponent implements OnInit {

  constructor(private aum:AumComponent) { }

  ngOnInit() {
  }
  aumReport()
  {
   this.aum.aumComponent=true;
  }

}
