import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() {
  }

  static convertObjectToArray(inputObject: object): object[] {
    const outputArray = [];
    Object.keys(inputObject).map(key => {
      outputArray.push({
        name: inputObject[key],
        value: key,
        selected: false
      });
    });

    return outputArray;
  }
}
