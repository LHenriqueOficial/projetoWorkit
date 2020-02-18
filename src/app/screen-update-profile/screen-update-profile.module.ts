import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenUpdateProfilePageRoutingModule } from './screen-update-profile-routing.module';

import { ScreenUpdateProfilePage } from './screen-update-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenUpdateProfilePageRoutingModule
  ],
  declarations: [ScreenUpdateProfilePage]
})
export class ScreenUpdateProfilePageModule {}
