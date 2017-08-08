import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


export interface Event {
  eventName: string;
  data?: Notification | any;
}

export interface Notification {
  type?: 'toase' | 'alert';
  severity?: 'error' | 'danger' | 'info';
  message: string;
  timeout?: number;
}


@Injectable()
export class StateService {

  notificationState: BehaviorSubject<Event> = new BehaviorSubject({ eventName: 'init', data: ''});

  constructor() { }

  notification(eventName: string, data?: Notification): void {
    this.notificationState.next({eventName, data});
  }

}
