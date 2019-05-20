import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodcenterPage } from './foodcenter';

@NgModule({
  declarations: [
    FoodcenterPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodcenterPage),
  ],
})
export class FoodcenterPageModule {}
