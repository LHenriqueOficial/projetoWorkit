import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-screen-address-register',
  templateUrl: './screen-address-register.page.html',
  styleUrls: ['./screen-address-register.page.scss'],
})
export class ScreenAddressRegisterPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  showScreen(nomeDaPagina: string){
    this.navCtrl.navigateForward(nomeDaPagina)
  }
}
