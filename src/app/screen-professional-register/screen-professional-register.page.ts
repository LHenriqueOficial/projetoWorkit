import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-screen-professional-register',
  templateUrl: './screen-professional-register.page.html',
  styleUrls: ['./screen-professional-register.page.scss'],
})
export class ScreenProfessionalRegisterPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  showScreen(nomeDaPagina: string){
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
