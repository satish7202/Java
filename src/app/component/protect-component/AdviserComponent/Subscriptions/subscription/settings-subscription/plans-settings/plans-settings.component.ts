import { Component, OnInit } from '@angular/core';
import { UpperSliderComponent } from '../../common-subscription-component/upper-slider/upper-slider.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-plans-settings',
  templateUrl: './plans-settings.component.html',
  styleUrls: ['./plans-settings.component.scss']
})
export class PlansSettingsComponent implements OnInit {

  constructor( public dialog: MatDialog, ) { }

  ngOnInit() {
  }


  openFragment(data) {
    let Fragmentdata = {
      Flag: data,
    }
    const dialogRef = this.dialog.open(UpperSliderComponent, {
      width: '1400px',
      data: Fragmentdata,
      autoFocus:false,
      panelClass:'dialogBox'
    });
  
    dialogRef.afterClosed().subscribe(result => {
  
    });
  }
   

}
