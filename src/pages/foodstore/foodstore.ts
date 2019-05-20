import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthService, CartService } from '../../config/authservice';
import { BasketPage } from '../basket/basket';
import { FoodAddRemovePage } from '../food-add-remove/food-add-remove';

@IonicPage()
@Component({
  selector: 'page-foodstore',
  templateUrl: 'foodstore.html',
})
export class FoodstorePage {

  res_id: any;
  res_name: any;
  id: any;
  items: any;
  response: any;
  products = [];
  restaurants: any;
  description: any;
  cartLength = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public menuService: AuthService, public popoverCtrl: PopoverController, public cartService: CartService) {

    this.res_id = this.navParams.get('restaurant_id');
    this.res_name = this.navParams.get('restaurant_name');

    this.goInRestaurant();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodselectPage');

  }

  ionViewWillEnter() {
    this.cartLength = this.cartService.getCartLength();
  }

  //service เรียกเมนูอาหาร เก็บข้อมูลลงใน products
  goInRestaurant() {

    this.menuService.apiGetService('restaurants/' + this.res_id + '/menus').then(result => {

      this.response = result;

      for (var i = 0; i < this.response.data.length; i++) {
        this.products.push({
          restaurant_name: this.res_name,
          restaurant_id: this.response.data[i].restaurant_id,
          id: this.response.data[i].id,
          name: this.response.data[i].name,
          price: this.response.data[i].price
        })
      }

    })

  }

  //เปิดหน้าตะกร้า
  openCart() {
    this.navCtrl.push(BasketPage);
  }

  //เปิดป็อบอัพเลือกจำนวนอาหาร
  selectFood(product) {

    let popover = this.popoverCtrl.create(FoodAddRemovePage, product);
    
    popover.present();
    popover.onDidDismiss(result => {
      this.cartLength = this.cartService.getCartLength();
    })
    

  }

}
