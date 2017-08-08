import { Component, OnInit } from '@angular/core';

import { StateService } from '../../state.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private globalState: StateService) { }

  notify() {
    this.globalState.notification('open', {
      message: 'hello',
    });
  }
  ngOnInit() {
  }

}
