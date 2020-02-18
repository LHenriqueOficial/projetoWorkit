import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenProfessionalRegisterPageRoutingModule } from './screen-professional-register-routing.module';

import { ScreenProfessionalRegisterPage } from './screen-professional-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenProfessionalRegisterPageRoutingModule
  ],
  declarations: [ScreenProfessionalRegisterPage]
})
export class ScreenProfessionalRegisterPageModule {}
