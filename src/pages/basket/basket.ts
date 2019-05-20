import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CartService } from '../../config/authservice';
import { Geolocation } from '@ionic-native/geolocation';


@IonicPage()
@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})
export class BasketPage {

  basket: any;
  cart: any;
  checkNoItem: any;
  totalCharge: any;
  quantity = 0;
  orderDetail: any;
  userToken: any;
  userInfo: any;
  longitude: any;
  latitude: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cartService: CartService, public alertCtrl: AlertController, private geolocation: Geolocation) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.userToken = JSON.parse(localStorage.getItem('userToken'));
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad BasketPage');

  }

  ionViewWillEnter() {
    this.basket = this.cartService.getBasket();
    this.cart = this.cartService.getCart();
    this.totalCharge = this.cartService.getCharge();

    if (this.basket.length == 0) {
      this.checkNoItem = true;
    }
    else {
      this.checkNoItem = false;
    }
  }

  addProduct(product) {

    product.food_qty = 1;

    this.cartService.addProduct(product);
    this.basket = this.cartService.getBasket();
    this.cart = this.cartService.getCart();
    this.totalCharge = this.cartService.getCharge();

  }

  removeProduct(product) {

    if (product.food_qty > 1) {
      product.food_qty = -1;
      this.cartService.addProduct(product);
    }
    else {
      this.confirmationAlert("ต้องการเอาสินค้าออกใช่ไหม").then(confirm => {
        if (confirm) {
          this.cartService.removeProduct(product);
          this.basket = this.cartService.getBasket();
          this.cart = this.cartService.getCart();
          this.totalCharge = this.cartService.getCharge();

          if (this.basket.length == 0) {
            this.checkNoItem = true;
          }
          else {
            this.checkNoItem = false;
          }
        }
      })
    }

    this.basket = this.cartService.getBasket();
    this.cart = this.cartService.getCart();
    this.totalCharge = this.cartService.getCharge();

  }

  deleteProduct(product) {

    this.confirmationAlert("ต้องการเอาสินค้าออกใช่ไหม").then(confirm => {
      if (confirm) {
        this.cartService.removeProduct(product);
        this.basket = this.cartService.getBasket();
        this.cart = this.cartService.getCart();
        this.totalCharge = this.cartService.getCharge();
      }
    })

  }

  confirmationAlert(message: string): Promise<boolean> {

    let resolveFunction: (confirm: boolean) => void;
    let promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      message: message,
      enableBackdropDismiss: false,
      buttons: [{
        text: 'No',
        handler: () => resolveFunction(false)
      }, {
        text: 'Yes',
        handler: () => resolveFunction(true)
      }]
    });
    alert.present();
    return promise;

  }


  getOrder() {

  }



  sentOrder() {

    var tmp = 0;
    var qty = 0;
    var max: any;

    for (var i = 0; i < this.basket.length; i++) {
      for (var j = 0; j < this.basket[i].products.length; j++) {
        qty += this.basket[i].products[j].food_qty;
      }
      if (qty > tmp) {
        tmp = qty;
        max = this.basket[i];
        qty = 0;
      }
    }

    this.geolocation.getCurrentPosition().then((res) => {

      if (res.coords != null) {
        this.latitude = res.coords.latitude;
        this.longitude = res.coords.longitude;
        this.orderDetail = {
          name: this.userInfo.name,
          address: 'หอพักห้อง 111',
          phone: '0924242424',
          latitude: this.latitude,
          longitude: this.longitude,
          restaurant_id: max.restaurant_id,
          menu: this.basket
        };
      }

    })

    console.log(this.orderDetail);

  }

}
