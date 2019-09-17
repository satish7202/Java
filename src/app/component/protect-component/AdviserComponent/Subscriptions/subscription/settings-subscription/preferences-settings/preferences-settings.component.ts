import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-preferences-settings',
  templateUrl: './preferences-settings.component.html',
  styleUrls: ['./preferences-settings.component.scss']
})
export class PreferencesSettingsComponent implements OnInit {

  constructor() { }
  viewMode='tab1'
  ngOnInit() {
    this.viewMode="tab1";
  }

}
