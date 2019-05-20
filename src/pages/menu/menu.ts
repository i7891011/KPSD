import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { CustomertabsPage } from '../customertabs/customertabs';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { AuthService, User } from '../../config/authservice';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  userType: any;
  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: AuthService) {
    // this.userService.apiSyncUserType();
    // this.userType = JSON.parse(localStorage.getItem('userType'));
  }

  ionViewWillEnter() {  
    // console.log('User Type menu: '+this.userType);
    // if(this.userType == null) {
    //   this.navCtrl.setRoot(CustomertabsPage);
    // }
    // else if(this.userType.type == 'driver') {
    //   this.navCtrl.setRoot(TabsControllerPage);
    // }
    // else if(this.userType.type == 'user') {
    //   this.navCtrl.setRoot(CustomertabsPage);
    // }
    // else {
    //   this.navCtrl.setRoot(CustomertabsPage);
    // }
  }

}
