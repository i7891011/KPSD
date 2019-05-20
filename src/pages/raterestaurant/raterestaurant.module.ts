import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RaterestaurantPage } from './raterestaurant';

@NgModule({
  declarations: [
    RaterestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(RaterestaurantPage),
  ],
})
export class RaterestaurantPageModule {}
