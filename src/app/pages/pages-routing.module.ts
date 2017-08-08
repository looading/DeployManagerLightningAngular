import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

export const routes: Routes = [
  { path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        loadChildren: './+list/list.module#ListModule',
      },
      {
        path: 'approval',
        loadChildren: './+approval/approval.module#ApprovalModule',
      },
      {
        path: 'user',
        loadChildren: './+user/user.module#UserModule',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
