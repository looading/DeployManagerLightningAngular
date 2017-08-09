import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


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


  private _globalState = new Map();

  private _data = new Subject<Object>();
  private _dataStream$ = this._data.asObservable();
  private _subscriptions: Map<string, Function[]> = new Map<string, Function[]>();

  constructor() {
    console.log('%cglobal state constructor', 'color: red');
    this._dataStream$.subscribe(data => this._onEvent(data));
  }

  notifyDataChange(event: string, value) {
    const current = this._data[event];
    if (current !== value) {
      this._data[event] = value;
      this._data.next({
        event: event,
        data: this._data[event]
      });
    }
  }

  subscribe(event: string, callback: Function) {
    const subscribers = this._subscriptions.get(event) || [];
    subscribers.push(callback);

    this._subscriptions.set(event, subscribers);
  }

  get(key) {
    if (this._globalState.has(key)) {
      return this._globalState.get(key);
    }
    return null;
  }

  set(key, value) {
    this._globalState.set(key, value);
  }

  remove(key) {
    return this._globalState.delete(key);
  }

  private _onEvent(data) {
    const subscribers = this._subscriptions.get(data['event']) || [];
    subscribers.forEach((callback) => {
      callback.call(null, data['data']);
    });
  }
}
