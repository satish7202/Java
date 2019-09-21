import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class subscriptionInject
{
  // right slider part
  private openCloseRightSlider = new BehaviorSubject<any>("");
  rightSideBarData=this.openCloseRightSlider.asObservable();
  rightSideData(msg:string)
  {
    this.openCloseRightSlider.next(msg);
  }
   
  // upper slider part

  private openCloseupperSlider =new BehaviorSubject("");
  rightslider=this.openCloseupperSlider.asObservable();
  rightSliderData(msg:string)
  {
    this.openCloseupperSlider.next(msg);
  }

  private openContent =new BehaviorSubject("");
  closeRightSlider=this.openContent.asObservable();
  closeSlider(msg:string)
  {
    this.openContent.next(msg);
  }

  // document-clients

  private openDocument = new BehaviorSubject("");
  rightSliderDocument=this.openDocument.asObservable();
  rightDocumentSlider(msg:string)
  {
    this.openDocument.next(msg)
  }
}