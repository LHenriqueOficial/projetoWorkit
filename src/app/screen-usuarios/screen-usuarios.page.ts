import { Component, OnInit } from '@angular/core';
import { Usuarios } from './../../Models/Usuarios';
import { NavController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { element } from 'protractor';

@Component({
  selector: 'app-screen-usuarios',
  templateUrl: './screen-usuarios.page.html',
  styleUrls: ['./screen-usuarios.page.scss'],
})
export class ScreenUsuariosPage implements OnInit {

  listaUsuarios:Usuarios[]=[]
  constructor(public navCrl: NavController, public fbauth: AngularFireAuth, public fbstore:AngularFirestore,
    public AlertCtrl: AlertController ) { }

  ngOnInit() {

    this.listarUsuarios();
  }

    listarUsuarios(){

      // verifica se o usuario esta logado 
      this.fbauth.authState.subscribe(user=>{
        if(user)
        {
          // se estiver logado lista usuarios
          let users=this.fbstore.collection("Usuarios")

          // filtrar usuario com uid maior que logado 
          users.ref.where("userId",">",user.uid).get().then(result=>{
            result.forEach(element =>{
              let usuario =new Usuarios()
              usuario.nome = element.data().nome
              usuario.email = element.data().email
              usuario.userId =element.id
              this.listaUsuarios.push(usuario)
            }); 
          })

          // filtrar usuario com uid menor que logado 
          users.ref.where("userId","<",user.uid).get().then(result=>{
            result.forEach(element =>{
              let usuario =new Usuarios()
              usuario.nome = element.data().nome
              usuario.email = element.data().email
              usuario.userId =element.id
              this.listaUsuarios.push(usuario)
            }); 
          })

        }
      
      })

      
      
    }

}
