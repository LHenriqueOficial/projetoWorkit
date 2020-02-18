import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenProfessionalRegisterPage } from './screen-professional-register.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenProfessionalRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenProfessionalRegisterPageRoutingModule {}
