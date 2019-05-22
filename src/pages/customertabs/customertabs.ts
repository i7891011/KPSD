import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodcenterPage } from '../foodcenter/foodcenter';
import { HistoryPage } from '../history/history';
import { CustomerprofilePage } from '../customerprofile/customerprofile';
import { CustomerorderPage } from '../customerorder/customerorder';

@IonicPage()
@Component({
  selector: 'page-customertabs',
  templateUrl: 'customertabs.html',
})
export class CustomertabsPage {

  tab1Root = FoodcenterPage;
  tab2Root = CustomerorderPage;
  tab3Root = HistoryPage;
  tab4Root = CustomerprofilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomertabsPage');
  }

}
