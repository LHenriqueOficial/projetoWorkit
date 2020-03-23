import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule} from 'angularfire2/';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';




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
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), AppRoutingModule,AngularFirestoreModule, AngularFireAuthModule
    , AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
