import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenPersonRegisterPage } from './screen-person-register.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenPersonRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenPersonRegisterPageRoutingModule {}
