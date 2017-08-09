import { Component } from '@angular/core';
import { NglConfig } from 'ng-lightning/ng-lightning';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private config: NglConfig) {
    console.log(this.config);
  }
}
