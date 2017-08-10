import { Component } from '@angular/core';
import { NglConfig } from 'ng-lightning/ng-lightning';

import { StateService } from './state.service';
import { MenuData, menuData } from './app-menu.config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private open = false;

  public menuData: MenuData = menuData;

  constructor(private config: NglConfig, private globalState: StateService) {
    globalState.subscribe('sideBarAction', open => {
      this.open = open;
    });
  }
}
