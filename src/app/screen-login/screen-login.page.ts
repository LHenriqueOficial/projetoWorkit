import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Usuarios } from './../../Models/Usuarios';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-screen-login',
  templateUrl: './screen-login.page.html',
  styleUrls: ['./screen-login.page.scss'],
})
export class ScreenLoginPage implements OnInit {

  usuario:Usuarios
  constructor( public fbauth: AngularFireAuth ,public fbstore:AngularFirestore, 
    public AlertCtrl :AlertController, public navCtrl : NavController) {
    this.usuario=new Usuarios()
   }

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
 
  loginUsuario(){
    this.fbauth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(()=>{
      this.showScreen('screen-home')

    })
    .catch(async ()=>{
      const alert = await this.AlertCtrl.create({
        header:'Menssagem',
        subHeader:"",
        message:'Login ou Senha está incorreto',
        buttons:['Ok']
      });
      await alert.present();
    })
  };

}
