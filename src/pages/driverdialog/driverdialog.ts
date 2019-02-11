import { Component } from '@angular/core';
import { IonicPage, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the DriverdialogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driverdialog',
  templateUrl: 'driverdialog.html',
})
export class DriverdialogPage {

  constructor( private navParams: NavParams,private view: ViewController) {
  }

  ionViewWillLoad(){
    const data = this.navParams.get('data');
    console.log(data);
  }
  closeDDialog(){
    this.view.dismiss();
  }

}
