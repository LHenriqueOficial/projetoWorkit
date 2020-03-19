import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenAddressRegisterPage } from './screen-address-register.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenAddressRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenAddressRegisterPageRoutingModule {}
