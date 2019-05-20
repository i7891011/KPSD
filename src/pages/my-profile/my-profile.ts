import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html'
})
export class MyProfilePage {

  constructor(public navCtrl: NavController, private appCtrl: App) {
  }

  logout() {
    localStorage.clear();
    setTimeout(() => this.appCtrl.getRootNav().setRoot(MenuPage), 1000);
  }
  
}
