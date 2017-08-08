import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
  ],
  declarations: [
    ListComponent,
  ]
})
export class ListModule { }
