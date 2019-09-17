import { Component, OnInit } from '@angular/core';
import { UpperSliderComponent } from '../../common-subscription-component/upper-slider/upper-slider.component';
import { MatDialog } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-documents-settings',
  templateUrl: './documents-settings.component.html',
  styleUrls: ['./documents-settings.component.scss']
})
export class DocumentsSettingsComponent implements OnInit {
  button:any;
  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
  }
  documentSettingData=[{'title':'Investor agreement','code':'Global'},
                       {'title':'Investor agreement','code':'Global'},
                       {'title':'Investor agreement','code':'Global'},
                       {'title':'Investor agreement','code':'Global'}]
                       
  openFragment(data) {
    let Fragmentdata = {
      Flag: data,
      id:1
    }

    const dialogRef = this.dialog.open(UpperSliderComponent, {
       width: '1400px',
       data: Fragmentdata,
       autoFocus:false,
       panelClass:'dialogBox',
      //  position: { 
      //    top: `30px`,
      //    right: `40px`
      //   },
      // openFrom:'{
      //   top: -50,
      //   width: 30,
      //   height: 80
      // }',
      // closeTo({
      //   left: 1500
      // })
      // hasBackdrop: false,
    });
  
    dialogRef.afterClosed().subscribe(result => {
  
    });
  }
}
