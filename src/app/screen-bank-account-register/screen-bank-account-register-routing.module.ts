import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenBankAccountRegisterPage } from './screen-bank-account-register.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenBankAccountRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenBankAccountRegisterPageRoutingModule {}
