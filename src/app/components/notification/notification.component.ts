import { Component, OnInit } from '@angular/core';

import { StateService, Notification } from '../../state.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  showAlert = false;
  notification: Notification = {
    type: 'alert',
    severity: 'info',
    message: '',
    timeout: 5000,
  };
  constructor(private globalState: StateService) { }

  onClose(ev) {
    this.showAlert = false;
  }
  ngOnInit() {
    this
      .globalState
      .notificationState
      .subscribe(({eventName, data}) => {
        if (eventName === 'open') {
          this.showAlert = true;
          Object.assign(this.notification, data);
        }
        if (eventName === 'close') {
          this.showAlert = false;
        }
      });
  }

}
