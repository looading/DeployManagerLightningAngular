import { Component, OnInit } from '@angular/core';

import { StateService, User } from 'app/state.service';

@Component({
  selector: 'app-header-tools',
  templateUrl: './header-tools.component.html',
  styleUrls: ['./header-tools.component.scss']
})
export class HeaderToolsComponent implements OnInit {

  private user: User;
  private settingOpen = false;

  constructor(private globalState: StateService) {
    globalState.subscribe('userData', data => {
      this.user = data;
    });
  }

  toggleAction() {
    this.settingOpen = !this.settingOpen;
  }
  ngOnInit() {
  }

}
