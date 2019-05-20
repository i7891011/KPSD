import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthService, User} from '../../config/authservice';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('f') registerForm: NgForm;
  user = {} as User;
  response: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public registerService: AuthService, public http: Http) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  onSubmit() {
    const userData = this.user;
    const registerForm = this.registerForm.value;

    userData.email = registerForm.userData.email;
    userData.name = registerForm.userData.name;
    userData.type = 'customer';
    userData.password = registerForm.passwords.password;
    userData.c_password = registerForm.passwords.c_password;

    this.registerService.apiRegister(userData, 'register').then((result) => {
      this.response = result;
      if (this.response.success == true) {
        this.navCtrl.push(LoginPage);
      }      
    })    

    this.registerForm.resetForm();
  }

}