import {Injectable} from '@angular/core';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class EnumServiceService {

  constructor() {
  }

  private otherAssetsData;
  private globalEnumData;

  setGlobalEnumData(data) {
    // obj.forEach(element =>
    //   {
    //     element.selected=false;
    //   })
    this.globalEnumData = data;
  }

  getOtherAssetData() {
    return this.globalEnumData.otherAssetTypes;
  }
}
