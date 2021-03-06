import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-sreen-inicial',
  templateUrl: './sreen-inicial.page.html',
  styleUrls: ['./sreen-inicial.page.scss'],
})
export class SreenInicialPage implements OnInit {

  constructor( public fbauth:AngularFireAuth, public fbstore:AngularFirestore,public AlertCtrl: AlertController,
    public navCtrl:NavController) { }

  ngOnInit() {
    this.fbauth.authState.subscribe(user=>{
      if (user)
      {
        console.log("autenticado: " + user.uid)
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
