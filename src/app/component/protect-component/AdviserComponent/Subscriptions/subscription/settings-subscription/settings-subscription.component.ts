import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-subscription',
  templateUrl: './settings-subscription.component.html',
  styleUrls: ['./settings-subscription.component.scss']
})
export class SettingsSubscriptionComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    this.selectedTab="PLANS"
  }
   selectedTab;
  tabClick(value)
  {
   this.selectedTab=value.tab.textLabel;
  }
}
