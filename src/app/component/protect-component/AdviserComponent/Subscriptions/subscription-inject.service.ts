import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class subscriptionInject
{
  private openClose = new BehaviorSubject<any>("");
  rightSideBarData=this.openClose.asObservable();
  rightSideData(msg:string)
  {
    this.openClose.next(msg);
  }
}