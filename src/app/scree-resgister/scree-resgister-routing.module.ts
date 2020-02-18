import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreeResgisterPage } from './scree-resgister.page';

const routes: Routes = [
  {
    path: '',
    component: ScreeResgisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreeResgisterPageRoutingModule {}
