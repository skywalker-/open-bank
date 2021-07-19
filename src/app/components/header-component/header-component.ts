import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource-service';

@Component({
  selector: 'open-header',
  templateUrl: 'header-component.html',
  styleUrls: ['header-component.scss'],
})
export class HeaderComponent implements OnInit {
  public headerMenu: string[] = [];
  constructor(private _resource: ResourceService) {
    this.headerMenu = this._resource._CONSTANTS.headerLinks;
  }
  ngOnInit() {}
}
