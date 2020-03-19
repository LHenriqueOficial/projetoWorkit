import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-screen-update-profile',
  templateUrl: './screen-update-profile.page.html',
  styleUrls: ['./screen-update-profile.page.scss'],
})
export class ScreenUpdateProfilePage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  showScreen(nomeDaPagina : string ){
    this.navCtrl.navigateForward(nomeDaPagina);
  }


}
