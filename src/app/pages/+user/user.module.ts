import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglModule } from 'ng-lightning/ng-lightning';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    NglModule.forRoot(),
  ],
  declarations: [UserComponent]
})
export class UserModule { }
