import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenBankAccountRegisterPageRoutingModule } from './screen-bank-account-register-routing.module';

import { ScreenBankAccountRegisterPage } from './screen-bank-account-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenBankAccountRegisterPageRoutingModule
  ],
  declarations: [ScreenBankAccountRegisterPage]
})
export class ScreenBankAccountRegisterPageModule {}
