import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CustomerprofilePage } from '../customerprofile/customerprofile';
import { FoodstorePage } from '../foodstore/foodstore';
import { User } from '../../config/authservice';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  user = {} as User;

  constructor(public navCtrl: NavController, private appCtrl:App) {
    this.user.userToken = JSON.parse(localStorage.getItem('userToken'));
    this.user.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }


  doProfile(){
    this.navCtrl.push(CustomerprofilePage);
  }

  doFoodStore(){
    this.navCtrl.push(FoodstorePage);
  }

  doLogout(){
    localStorage.clear();
    setTimeout(() => this.appCtrl.getRootNav().setRoot(LoginPage), 1000);
  }
}
