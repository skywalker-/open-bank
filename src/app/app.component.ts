import { Component } from '@angular/core';
import { ResourceService } from './services/resource-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'open-finance';
  public dots = new Array(88);
  public cardsData: any;
  public termLoanContent =
    'Get your hands on a term loan that’s crafted for your business';

  constructor(private _resource: ResourceService) {
    this.cardsData = this._resource._CONSTANTS.cardContent;
  }
}
