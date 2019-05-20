import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditProfileAddressPage } from '../edit-profile-address/edit-profile-address';
import { EditProfileNamePage } from '../edit-profile-name/edit-profile-name';
import { EditProfilePasswordPage } from '../edit-profile-password/edit-profile-password';


@IonicPage()
@Component({
  selector: 'page-customeraccount',
  templateUrl: 'customeraccount.html',
})
export class CustomeraccountPage {

  userInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }

  ionViewWillEnter() {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomeraccountPage');
  }

  editName() {
    this.navCtrl.push(EditProfileNamePage);
  }

  editAddress() {
    this.navCtrl.push(EditProfileAddressPage);
  }

  editPassword() {
    this.navCtrl.push(EditProfilePasswordPage);
  }

}
