import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ToastController } from 'ionic-angular';
import { User, CartService } from '../../config/authservice';
import { Http, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';

//Pages
import { BasketPage } from '../basket/basket';
import { CustomeraccountPage } from '../customeraccount/customeraccount';
import { CustomeraddressPage } from '../customeraddress/customeraddress';
import { CustomeravatarPage } from '../customeravatar/customeravatar';
import { CustomerorderPage } from '../customerorder/customerorder';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { HelpcenterPage } from '../helpcenter/helpcenter';
import { HistoryPage } from '../history/history';
import { LegalntermPage } from '../legalnterm/legalnterm';
import { LoginPage } from '../login/login';
import { MenuPage } from '../menu/menu';
import { RatedriverPage } from '../ratedriver/ratedriver';
import { RaterestaurantPage } from '../raterestaurant/raterestaurant';
import { RegisterPage } from '../register/register';


@IonicPage()
@Component({
  selector: 'page-customerprofile',
  templateUrl: 'customerprofile.html',
})
export class CustomerprofilePage {

  @ViewChild('f') registerForm: NgForm;
  userInfo: any;
  userToken: any;
  cartLength = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private appCtrl: App, public toastCtrl: ToastController, public cartService: CartService) {
    
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad customerProfilePage');
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.cartLength = this.cartService.getCartLength();
  }

  openCart() {
    this.navCtrl.push(BasketPage);
  }

  logout() {
    localStorage.clear();
    setTimeout(() => this.appCtrl.getRootNav().setRoot(MenuPage), 1000);
  }

  login() {
    setTimeout(() => this.appCtrl.getRootNav().setRoot(LoginPage), 1000);
  }

  history() {

    console.log("History");
    this.navCtrl.push(HistoryPage);
    
  }

  shipping() {

    console.log("shipping");
    this.navCtrl.push(CustomerorderPage);

  }

  rateRestaurants() {

    console.log("rateRestaurants");
    this.navCtrl.push(RaterestaurantPage);

  }

  rateDriver() {

    console.log("rateDriver");
    this.navCtrl.push(RatedriverPage);

  }

  editProfile() {

    console.log("editProfile");
    this.navCtrl.push(CustomeraccountPage);

  }

  editAddress() {

    console.log("editAddress");
    this.navCtrl.push(CustomeraddressPage);

  }

  helpcenter() {

    console.log("helpcenter");
    this.navCtrl.push(HelpcenterPage);

  }

  legalnterm() {

    console.log("legalnterm");
    this.navCtrl.push(LegalntermPage);

  }

  changeAvatar() {

    console.log("avatar");
    this.navCtrl.push(CustomeravatarPage);

  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  recoveryPassword() {
    this.navCtrl.push(ForgotpasswordPage);
  }


}
