import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodAddRemovePage } from './food-add-remove';

@NgModule({
  declarations: [
    FoodAddRemovePage,
  ],
  imports: [
    IonicPageModule.forChild(FoodAddRemovePage),
  ],
})
export class FoodAddRemovePageModule {}
