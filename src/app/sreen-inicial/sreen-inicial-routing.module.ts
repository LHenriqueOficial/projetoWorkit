import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SreenInicialPage } from './sreen-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: SreenInicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SreenInicialPageRoutingModule {}
