import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenLoginPageRoutingModule } from './screen-login-routing.module';

import { ScreenLoginPage } from './screen-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenLoginPageRoutingModule
  ],
  declarations: [ScreenLoginPage]
})
export class ScreenLoginPageModule {}
