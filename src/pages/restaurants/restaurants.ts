import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html'
})
export class RestaurantsPage {

  public isSearchbarOpened = false;
  constructor(public navCtrl: NavController) {
  }
  
  onSearch(event){
    //add apis here!!!
    console.log(event.target.value);
  }
  
}
