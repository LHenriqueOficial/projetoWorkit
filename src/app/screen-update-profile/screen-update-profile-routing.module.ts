import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenUpdateProfilePage } from './screen-update-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenUpdateProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenUpdateProfilePageRoutingModule {}
