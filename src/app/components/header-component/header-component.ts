import { Component, OnInit } from '@angular/core';
import * as Constants from '../../../assets/constants/constants.json';
@Component({
  selector: 'open-header',
  templateUrl: 'header-component.html',
  styleUrls: ['header-component.scss'],
})
export class HeaderComponent implements OnInit {
  public headerMenu: string[] = [];
  constructor() {
    this.headerMenu = Constants.headerLinks;
  }
  ngOnInit() {}
}
