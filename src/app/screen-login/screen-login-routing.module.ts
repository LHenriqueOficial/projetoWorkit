import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenLoginPage } from './screen-login.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenLoginPageRoutingModule {}
