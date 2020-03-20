import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-screen-person-register',
  templateUrl: './screen-person-register.page.html',
  styleUrls: ['./screen-person-register.page.scss'],
})
export class ScreenPersonRegisterPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
showScreen(nomeDaPagina: string){
  this.navCtrl.navigateForward(nomeDaPagina);
}
}
