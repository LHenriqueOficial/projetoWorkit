import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenAddressRegisterPageRoutingModule } from './screen-address-register-routing.module';

import { ScreenAddressRegisterPage } from './screen-address-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenAddressRegisterPageRoutingModule
  ],
  declarations: [ScreenAddressRegisterPage]
})
export class ScreenAddressRegisterPageModule {}
