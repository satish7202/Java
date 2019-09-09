import { Component, OnInit } from '@angular/core';
import { BackOfficeService } from '../../../back-office.service';
import { EventService } from 'src/app/Data-service/event.service';

@Component({
  selector: 'app-sip',
  templateUrl: './sip.component.html',
  styleUrls: ['./sip.component.scss']
})
export class SipComponent implements OnInit {
  teamMemberId=2929;
  sipCountData: any;
  constructor(private backioffice:BackOfficeService,private dataService:EventService) { }
 
  ngOnInit() {
   this.sipCountGet();
  }

  sipCountGet(){
    this.backioffice.getSipcountGet(this.teamMemberId).subscribe(
      data =>this.getsipCountGet(data)
    )
  }

  getsipCountGet(data){
    console.log("sip count",data);
    this.sipCountData=data;
  }

  getFilerrorResponse(err) {
    this.dataService.openSnackBar(err, 'Dismiss')
   }


}
