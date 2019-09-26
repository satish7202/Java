import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { subscriptionInject } from '../../../subscription-inject.service';
import { EventService } from 'src/app/Data-service/event.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  overviewDesign: any;

  constructor(private eventService: EventService, private subinject: subscriptionInject, public dialogRef: MatDialogRef<OverviewComponent>) { }


  @Input() componentFlag: string;

  ngOnInit() {
    this.overviewDesign='true';
  }

  openNav(value, state) {
    this.eventService.sliderData(value);
    this.subinject.rightSliderData(state)
  }
  dialogClose() {
    this.dialogRef.close();
  }
  changeDisplay(value)
  {
    this.overviewDesign=value;
  }
}
