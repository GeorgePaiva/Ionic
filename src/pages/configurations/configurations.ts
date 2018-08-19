import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { SobrePage } from '../sobre/sobre';


@IonicPage()
@Component({
  selector: 'page-configurations',
  templateUrl: 'configurations.html',
})
export class ConfigurationsPage { 
  rootPage = PerfilPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurationsPage');
  }
  abrirPerfil(){
    this.navCtrl.push(PerfilPage);
  }

  abrirSobre(){
    this.navCtrl.push(SobrePage);
  }

}
