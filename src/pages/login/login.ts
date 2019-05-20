import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { RegisterPage } from '../register/register';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { AuthService, User } from '../../config/authservice';
import { CustomertabsPage } from '../customertabs/customertabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  response: any;
  local:any;
  userInfo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(user) {

    this.loginService.postData('oauth/token', user).then((result) => {
      this.response = result;
      console.log(result);
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
      console.log(this.userInfo);
      if (this.response.message == 'success') {
        this.navCtrl.setRoot(CustomertabsPage);
      }      
    })    
  }

  goRegister() {
    this.navCtrl.push(RegisterPage);
  }

  goForgotPassword() {
    this.navCtrl.push(ForgotpasswordPage);
  }

  backToProfile() {
    this.navCtrl.setRoot(MenuPage);
  }

}
