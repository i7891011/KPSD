import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-customeraddress',
  templateUrl: 'customeraddress.html',
})
export class CustomeraddressPage {

  data:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomeraddressPage');
  }

  locate() {
    this.geolocation.getCurrentPosition().then((res) => {
      this.data = 'Lat: ' + res.coords.latitude + ' <br>' + res.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

}
