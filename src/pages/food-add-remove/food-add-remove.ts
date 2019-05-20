import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartService } from '../../config/authservice';


@IonicPage()
@Component({
  selector: 'page-food-add-remove',
  templateUrl: 'food-add-remove.html',
})
export class FoodAddRemovePage {

  product: any;
  quantity = 0;
  noProduct = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartService: CartService) {
    this.product = this.navParams.data;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodAddRemovePage');
    
  }

  //เพิ่มอาหารลงตะกร้า
  addToCart() {
    
    var newProduct = {
      restaurant_id: this.product.restaurant_id,
      restaurant_name: this.product.restaurant_name,
      food_id: this.product.id,
      food_name: this.product.name,
      food_price: this.product.price,
      food_qty: this.quantity
    };

    if (newProduct.food_qty == 0){
      this.noProduct = "Please choose quantity.";
    }
    else {
      this.noProduct = null;
      this.cartService.addProduct(newProduct);
    }

  }

  //เพิ่มอาหาร
  addProduct() {
    this.quantity += 1;
  }

  //ลดอาหาร
  removeProduct() {
    if (this.quantity > 0) {
      this.quantity -= 1;
    }
  }

}
