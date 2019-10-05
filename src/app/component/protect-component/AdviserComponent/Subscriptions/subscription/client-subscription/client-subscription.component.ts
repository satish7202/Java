import { Component, OnInit, Input } from '@angular/core';
import { UpperSliderComponent } from '../common-subscription-component/upper-slider/upper-slider.component';
import { MatDialog } from '@angular/material';
import { EventService } from 'src/app/Data-service/event.service';
import { SubscriptionInject } from '../../subscription-inject.service';
import { SubscriptionService } from '../../subscription.service';
export interface PeriodicElement {
  name: string;
  email: string;
  num: number;
  balance: string;
}

@Component({
  selector: 'app-client-subscription',
  templateUrl: './client-subscription.component.html',
  styleUrls: ['./client-subscription.component.scss']
})
export class ClientSubscriptionComponent implements OnInit {

  constructor(public dialog:MatDialog, public eventService:EventService, public subInjectService:SubscriptionInject, private subService:SubscriptionService) { }
  @Input() clientData:any;
  ngOnInit() {
    console.log("clients")
    this.getClientSubscriptionList();
  }
  displayedColumns: string[] = ['name','email', 'num', 'balance'];
  dataSource;

  getClientSubscriptionList()
  {
    let obj={
       'id':2808
    }
   this.subService.getSubscriptionClientsList(obj).subscribe(
     data =>this.getClientListRespobnse(data)
   )
  }
   getClientListRespobnse(data)
   {
    console.log('client-subscription List',data)
    this.dataSource=data
   }
  Open(value,state)
  {
    this.eventService.sidebarData(value)
    this.subInjectService.rightSideData(state);
  }
  openFragment(data,clientData) {
    let Fragmentdata = {
      Flag: data,
      id:1,
      clientData:clientData
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
