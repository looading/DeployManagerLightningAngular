import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalRoutingModule } from './approval-routing.module';
import { ApprovalComponent } from './approval.component';

@NgModule({
  imports: [
    CommonModule,
    ApprovalRoutingModule
  ],
  declarations: [ApprovalComponent]
})
export class ApprovalModule { }
