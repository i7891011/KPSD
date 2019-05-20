import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodstorePage } from '../foodstore/foodstore';
import { BasketPage } from '../basket/basket';
import { FormControl } from '@angular/forms';
import { AuthService, CartService } from '../../config/authservice';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-foodcenter',
  templateUrl: 'foodcenter.html',
})
export class FoodcenterPage {

  id: string;
  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;
  items2: any;
  checkGetData: boolean = false;
  response: any;
  cartLength = 0;
  restaurantNum = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public inAppService: AuthService, public cartService: CartService) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodcenterPage');


  }

  ionViewWillEnter() {
    this.cartLength = this.cartService.getCartLength();
    this.getRestaurant();

    if (this.checkGetData == true) {
      this.setFilteredItems();
      this.checkGetData = false;
    }

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItems();
    });

  }

  //service เรียกร้านค้า
  getRestaurant() {

    this.inAppService.apiGetService('restaurants').then(result => {

      this.response = result;
      this.items = this.response.data;
      this.restaurantNum = this.response.data.length;

      let sortedStore = this.items.sort((a, b) => {
        if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
        else if (b.name.toUpperCase() > a.name.toUpperCase()) return -1;
        else return 0;
      });

      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].is_active == 0) {
          this.items[i].status = 'ร้านปิด';
        }
        else {
          this.items[i].status = 'ร้านเปิด';
        }
      }

      this.items2 = this.items;
      this.checkGetData = true;

    })

  }

  goInRestaurant(id, name) {
    this.navCtrl.push(FoodstorePage, { restaurant_id: id, restaurant_name: name });
  }

  promo1() {
    console.log("promo1 Clicked");
  }

  doFoodStore() {

  }

  onSearchInput() {
    this.searching = true;
  }

  setFilteredItems() {
    this.items = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm) {
    return this.items2.filter((item) => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  openCart() {
    this.navCtrl.push(BasketPage);
  }

  category(keyword) {

    let postData = new FormData();
    postData.append('search', keyword);

    this.inAppService.apiPostService('categories', postData).then((res: any) => {

      var result = res.data;
      this.items = [];
      this.restaurantNum = result.length;

      for (var i = 0; i < result.length; i++) {
        console.log(result[i].id);

        this.inAppService.apiGetService('restaurants/' + result[i].id).then(result => {

          this.response = result;
          if (this.response.data.is_active == 0) {
            this.response.data.status = 'ร้านปิด';
          }
          else {
            this.response.data.status = 'ร้านเปิด';
          }
          this.items.push(this.response.data);
          
        })
      }
      console.log(this.items);

    })
  }

}
