import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenUsuariosPageRoutingModule } from './screen-usuarios-routing.module';

import { ScreenUsuariosPage } from './screen-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenUsuariosPageRoutingModule
  ],
  declarations: [ScreenUsuariosPage]
})
export class ScreenUsuariosPageModule {}
