import { Injectable } from '@angular/core';
import * as Constants from '../../assets/constants/constants.json';
@Injectable()
export class ResourceService {
  public _CONSTANTS: any;
  constructor() {
    this._CONSTANTS = Constants;
  }
}
