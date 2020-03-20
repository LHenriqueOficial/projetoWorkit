import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sreen-inicial',
  templateUrl: './sreen-inicial.page.html',
  styleUrls: ['./sreen-inicial.page.scss'],
})
export class SreenInicialPage implements OnInit {

  constructor( private nCtrl: NavController) { }

  ngOnInit() {
  }
  showScreen(nomeDaPagina: string){
    this.nCtrl.navigateForward(nomeDaPagina);
  }
}
