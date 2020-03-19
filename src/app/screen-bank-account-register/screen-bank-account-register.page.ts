import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-screen-bank-account-register',
  templateUrl: './screen-bank-account-register.page.html',
  styleUrls: ['./screen-bank-account-register.page.scss'],
})
export class ScreenBankAccountRegisterPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  showScreen(nomeDaPagina: string){
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
