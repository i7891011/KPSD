import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../config/authservice';
import { Headers } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-customerorder',
  templateUrl: 'customerorder.html',
})
export class CustomerorderPage {

  userToken: any;
  userAllOrder: any;
  shippingOrder = [];



  constructor(public navCtrl: NavController, public navParams: NavParams, public orderService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerorderPage');
  }

  ionViewWillEnter() {

    this.userToken = JSON.parse(localStorage.getItem('userToken'));
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.userToken);

    this.orderService.apiGetDataService('orders', headers).then((result: any) => {
      this.userAllOrder = result.data;

      for (var i = 0; i < this.userAllOrder.length; i++) {
        if (this.userAllOrder[i].status != 'shipped') {
          this.shippingOrder.push(this.userAllOrder[i]);
        }
      }
    })
  }




}
