import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/Models/Usuarios';
import {AngularFireAuth} from 'angularfire2/auth'


@Component({
  selector: 'app-scree-resgister',
  templateUrl: './scree-resgister.page.html',
  styleUrls: ['./scree-resgister.page.scss'],
})
export class ScreeResgisterPage implements OnInit {

  usuario:Usuarios
  constructor( public fbauth: AngularFireAuth) {
    this.usuario=new Usuarios()
   }
  
  ngOnInit() {
  }
cadastrarUsuario(){
  this.fbauth.auth.createUserWithEmailAndPassword( this.usuario.email, this.usuario.senha)
}
}
