import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SreenInicialPageRoutingModule } from './sreen-inicial-routing.module';

import { SreenInicialPage } from './sreen-inicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SreenInicialPageRoutingModule
  ],
  declarations: [SreenInicialPage]
})
export class SreenInicialPageModule {}
