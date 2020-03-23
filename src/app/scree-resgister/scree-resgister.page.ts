import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/Models/Usuarios';
import {AngularFireAuth} from 'angularfire2/auth'
import {AngularFirestore} from 'angularfire2/firestore'
import { AlertController, NavController } from '@ionic/angular';
import { async } from '@angular/core/testing';



@Component({
  selector: 'app-scree-resgister',
  templateUrl: './scree-resgister.page.html',
  styleUrls: ['./scree-resgister.page.scss'],
})
export class ScreeResgisterPage implements OnInit {

  usuario:Usuarios
  constructor( public fbauth: AngularFireAuth ,public fbstore:AngularFirestore, 
    public AlertCtrl :AlertController, public navCtrl : NavController) {
    this.usuario=new Usuarios()
   }
  
  ngOnInit() {
  }
//  metodo para chamar pagina 
  showScreen(nomeDaPagina: string){
    this.navCtrl.navigateForward(nomeDaPagina)

  };
cadastrarUsuario(){
  // metodo para criar usuario e enviar para fire base 
    this.fbauth.auth.createUserWithEmailAndPassword( this.usuario.email, this.usuario.senha).then
  (result=>{
    let users= this.fbstore.collection("Usuarios") // esta recebendo a base de dados Usuarios do fireStore

    users.add({
      nome:this.usuario.nome,
      email:this.usuario.email,
      senha:this.usuario.senha,
      userId:result.user.uid
    }).then( async ()=>{

       const alert = await this.AlertCtrl.create({
         header:'Mensagen ',
         subHeader:'',
         message:'Usuário Cadastrado com Sucesso ',
         buttons: ['Ok']
       });

       await alert.present();
/// autenticando o usuario apos autenticação 
this.fbauth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(()=>{
// chama pagina de login 
  this.showScreen('sreen-inicial');
});

    }).catch( async ()=>{
      const alert = await this.AlertCtrl.create({
        header:'Menssagem',
        subHeader:'',
        message:'Erro ao Cadastrar Usuário',
        buttons: ['Ok']
      });

      await alert.present();
        
      
    })

  })
}
}
