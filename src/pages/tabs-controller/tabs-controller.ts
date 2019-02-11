import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyWalletPage } from '../my-wallet/my-wallet';
import { RestaurantsPage } from '../restaurants/restaurants';
import { MyProfilePage } from '../my-profile/my-profile';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  /*select the default page here. using if{}...*/
  tab1Root: any = MyWalletPage;
  tab2Root: string = 'DriverPage';
  tab3Root: any = RestaurantsPage;
  tab4Root: any = MyProfilePage;
  constructor(public navCtrl: NavController) {
  }
  goToDriver(params){
    if (!params) params = {};
    this.navCtrl.push('DriverPage');
  }
}
