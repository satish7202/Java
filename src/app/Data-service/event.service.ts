import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(public snackBar: MatSnackBar) { }

  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['app-bottom-snackbar']
    });
  }
  // right slider part
  private sidebarValue = new BehaviorSubject<any>("");
  sidebarSubscribeData = this.sidebarValue.asObservable();
  sidebarData(message: string) {
    this.sidebarValue.next(message)
  }

  private tabValue = new BehaviorSubject<any>("");
  tabChangeData = this.tabValue.asObservable();
  tabData(message: string) {
    this.tabValue.next(message)
  }
   // upper slider part
   private rightSliderValue =new BehaviorSubject("");
   rightSliderData = this.rightSliderValue.asObservable();
   sliderData(msg:string)
   {
     this.rightSliderValue.next(msg)
   }
}
