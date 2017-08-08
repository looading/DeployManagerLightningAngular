import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NglModule } from 'ng-lightning/ng-lightning';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotificationComponent } from './components/notification/notification.component';


import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContainerComponent,
    FooterComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NglModule.forRoot(),
    PagesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
