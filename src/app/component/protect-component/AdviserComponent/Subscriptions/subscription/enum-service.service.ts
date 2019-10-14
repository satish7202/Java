import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class EnumServiceService {

  constructor() { }
  OtherAssetsData;

  setOtherAssetData(data)
  {
    let obj=data.OTHER_ASSET_TYPES
    // obj.forEach(element =>
    //   {
    //     element.selected=false;
    //   })
    this.OtherAssetsData=data;
  }
  getOtherAssetData()
  {
    return this.OtherAssetsData;
  }
}
