import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NglModule } from 'ng-lightning/ng-lightning';

import { AppComponent } from './app.component';

import {
  HeaderComponent,
  FooterComponent,
  NotificationComponent,
  HeaderSearchComponent,
  HeaderToolsComponent,
  NavBarComponent,
  SideBarComponent,
  SideContentComponent,
  MenuItemComponent, } from './components/';


import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';


import { StateService } from './state.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotificationComponent,
    HeaderSearchComponent,
    HeaderToolsComponent,
    NavBarComponent,
    SideBarComponent,
    SideContentComponent,
    MenuItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NglModule.forRoot(),
    PagesModule,
    AppRoutingModule,
  ],
  providers: [
    StateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
