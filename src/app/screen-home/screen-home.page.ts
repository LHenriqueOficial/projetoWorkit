import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController, NavController } from '@ionic/angular';
import { Usuarios } from './../../Models/Usuarios';

@Component({
  selector: 'app-screen-home',
  templateUrl: './screen-home.page.html',
  styleUrls: ['./screen-home.page.scss'],
})
export class ScreenHomePage implements OnInit {
usuario: Usuarios
  constructor( public fbauth:AngularFireAuth, public fbstore:AngularFirestore,public AlertCtrl: AlertController,
    public navCtrl:NavController) {
      this.usuario=new Usuarios()
     }

  ngOnInit() {
    this.fbauth.authState.subscribe(user=>{
      if (user)
      {
        console.log("autenticado: " + user.uid + " Nome do usuario: " + user.email)
      }
      else{
        console.log("nao autenticado")
      }
    })
  }
  showScreen(nomeDaPagina: string){
    this.navCtrl.navigateForward(nomeDaPagina);
  }

  // metodo logOut para sair do sistema 
  logOut(){
    this.fbauth.auth.signOut();
    this.navCtrl.navigateForward('sreen-inicial')
  }

}
