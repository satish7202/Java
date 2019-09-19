import { Component, OnInit } from '@angular/core';
import { UpperSliderComponent } from '../../common-subscription-component/upper-slider/upper-slider.component';
import { MatDialog } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-services-settings',
  templateUrl: './services-settings.component.html',
  styleUrls: ['./services-settings.component.scss']
})
export class ServicesSettingsComponent implements OnInit {
  button: any;

  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
  }
  serviceSettingData=[{'title':'Investment Management','code':'IMA124','feetype':'Fixed','Nature':'Recurring','Mode':'End of period','FEES':'Rs.10,000/Year','PLANS':'3',"MODULES":'12','DOCUMENTS':'0'},
  {'title':'Investment Management','code':'IMA124','feetype':'Fixed','Nature':'Recurring','Mode':'End of period','FEES':'Rs.10,000/Year','PLANS':'3',"MODULES":'12','DOCUMENTS':'0'},
  {'title':'Investment Management','code':'IMA124','feetype':'Fixed','Nature':'Recurring','Mode':'End of period','FEES':'Rs.10,000/Year','PLANS':'3',"MODULES":'12','DOCUMENTS':'0'},
  {'title':'Investment Management','code':'IMA124','feetype':'Fixed','Nature':'Recurring','Mode':'End of period','FEES':'Rs.10,000/Year','PLANS':'3',"MODULES":'12','DOCUMENTS':'0'},
  {'title':'Investment Management','code':'IMA124','feetype':'Fixed','Nature':'Recurring','Mode':'End of period','FEES':'Rs.10,000/Year','PLANS':'3',"MODULES":'12','DOCUMENTS':'0'},
  {'title':'Investment Management','code':'IMA124','feetype':'Fixed','Nature':'Recurring','Mode':'End of period','FEES':'Rs.10,000/Year','PLANS':'3',"MODULES":'12','DOCUMENTS':'0'}]
  openFragment(data) {
    let Fragmentdata = {
      Flag: data,
      id:2
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
