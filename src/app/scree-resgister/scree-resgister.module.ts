import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreeResgisterPageRoutingModule } from './scree-resgister-routing.module';

import { ScreeResgisterPage } from './scree-resgister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreeResgisterPageRoutingModule
  ],
  declarations: [ScreeResgisterPage]
})
export class ScreeResgisterPageModule {}
