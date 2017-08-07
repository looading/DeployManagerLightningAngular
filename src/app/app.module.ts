import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NglModule} from 'ng-lightning/ng-lightning';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NglModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
