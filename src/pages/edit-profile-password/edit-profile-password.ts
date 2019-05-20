import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App } from 'ionic-angular';
import { User } from '../../config/authservice';
import { Http, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { MenuPage } from '../menu/menu';


@IonicPage()
@Component({
  selector: 'page-edit-profile-password',
  templateUrl: 'edit-profile-password.html',
})
export class EditProfilePasswordPage {

  user = {} as User;
  @ViewChild('f') registerForm: NgForm;
  userInfo: any;
  userToken: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController, private appCtrl: App) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.userToken = JSON.parse(localStorage.getItem('userToken'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePasswordPage');
  }

  doPass() {

    this.user.name = this.registerForm.value.userData.name;
    this.user.password = this.registerForm.value.userData.cpassword;
    this.user.newpass = this.registerForm.value.userData.passwords.password;
    this.user.cnewpass = this.registerForm.value.userData.passwords.c_password;

    var url = 'http://158.108.207.4/delivery/public/oauth/token';

    let postData = new FormData();
    postData.append('username', this.userInfo.email);
    postData.append('password', this.user.password);
    postData.append('grant_type', 'password');
    postData.append('client_id', '2');
    postData.append('client_secret', 'tacNc9Ll4lUkD56JMhEKVpdQ9ZVxQCQMhCkPM1Yw');
    this.http.post(url, postData).map(res => res.json()).subscribe(data => {
      this.userToken = data;
      localStorage.setItem('userToken', JSON.stringify(this.userToken));

      var url = 'http://158.108.207.4/delivery/public/api/users/' + this.userInfo.id;

      let headers = new Headers();
      headers.append('Authorization', 'Bearer ' + this.userToken.access_token);

      let postData = new FormData();
      postData.append('_method', 'PUT');
      postData.append('name', this.userInfo.name);
      postData.append('email', this.userInfo.email);
      postData.append('password', this.user.newpass);

      this.http.post(url, postData, { headers: headers }).map(res => res.json()).subscribe(data => {

        this.http.get(url, { headers: headers }).map(res => res.json()).subscribe(data => {
          this.userInfo = data;
          localStorage.setItem('userInfo', JSON.stringify(this.userInfo.users[0]));

          if (data.message == 'success') {
            localStorage.clear();
            setTimeout(() => this.appCtrl.getRootNav().setRoot(MenuPage), 1000);
          }
        });
      });

    }, error => {
      const toast = this.toastCtrl.create({
        message: 'Password incorrect!',
        duration: 3000
      });
      toast.present();
    });
  }

}
