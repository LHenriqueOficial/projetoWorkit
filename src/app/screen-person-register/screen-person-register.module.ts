import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenPersonRegisterPageRoutingModule } from './screen-person-register-routing.module';

import { ScreenPersonRegisterPage } from './screen-person-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenPersonRegisterPageRoutingModule
  ],
  declarations: [ScreenPersonRegisterPage]
})
export class ScreenPersonRegisterPageModule {}
