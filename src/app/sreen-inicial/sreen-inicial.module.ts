import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SreenInicialPageRoutingModule } from './sreen-inicial-routing.module';

import { SreenInicialPage } from './sreen-inicial.page';
import { AngularFireModule} from 'angularfire2'



var firebaseConfig = {
  apiKey: "AIzaSyBwjHgjSV8JBy-MLb1guFdJoijJUH4fgko",
  authDomain: "projetoworkit.firebaseapp.com",
  databaseURL: "https://projetoworkit.firebaseio.com",
  projectId: "projetoworkit",
  storageBucket: "projetoworkit.appspot.com",
  messagingSenderId: "822051910540",
  appId: "1:822051910540:web:6e42551a5798ce071a9ca9",
  measurementId: "G-NJ5FG2M9SX"
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SreenInicialPageRoutingModule,AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [SreenInicialPage]
})
export class SreenInicialPageModule {}
