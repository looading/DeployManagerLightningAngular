import { Component, OnInit } from '@angular/core';

import { StateService } from '../../state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private open = false;
  constructor(private globalState: StateService) {
    console.log(globalState.get('sideBarOpen'));
  }

  toggleSideBar() {
    this.open = !this.open;
    this.globalState.notifyDataChange('sideBarAction', this.open);
  }

  ngOnInit() {
  }

}
